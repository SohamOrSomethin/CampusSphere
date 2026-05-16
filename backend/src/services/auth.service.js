import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";

const sanitizeUser = (user) => {
  const { password, ...safeUser } = user;
  return safeUser;
};

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    }
  );
};

const normalizeRole = (role) => {
  const normalizedRole = role ? role.toUpperCase() : "STUDENT";

  if (!["STUDENT", "ADMIN"].includes(normalizedRole)) {
    const error = new Error("Invalid role");
    error.status = 400;
    error.error = "Bad Request";
    throw error;
  }

  return normalizedRole;
};

export const registerUserService = async (payload) => {
  const { name, email, password, role } = payload;

  if (!name || !email || !password) {
    const error = new Error("Name, email, and password are required");
    error.status = 400;
    error.error = "Bad Request";
    throw error;
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    const error = new Error("User already exists with this email");
    error.status = 409;
    error.error = "Conflict";
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const normalizedRole = normalizeRole(role);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role: normalizedRole,
      profile: {
        create: {
          name,
          department: "Not set",
          year: 1,
          bio: "",
          skills: [],
          interests: [],
        },
      },
    },
    include: {
      profile: true,
    },
  });

  const token = generateToken(user);

  return {
    user: sanitizeUser(user),
    token,
  };
};

export const loginUserService = async (payload) => {
  const { email, password } = payload;

  if (!email || !password) {
    const error = new Error("Email and password are required");
    error.status = 400;
    error.error = "Bad Request";
    throw error;
  }

  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      profile: true,
    },
  });

  if (!user) {
    const error = new Error("Invalid email or password");
    error.status = 401;
    error.error = "Unauthorized";
    throw error;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    const error = new Error("Invalid email or password");
    error.status = 401;
    error.error = "Unauthorized";
    throw error;
  }

  const token = generateToken(user);

  return {
    user: sanitizeUser(user),
    token,
  };
};

export const getMeService = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      profile: true,
    },
  });

  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    error.error = "Not Found";
    throw error;
  }

  return sanitizeUser(user);
};