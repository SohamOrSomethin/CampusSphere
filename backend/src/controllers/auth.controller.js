import {
  registerUserService,
  loginUserService,
  getMeService,
} from "../services/auth.service.js";

const getCookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

export const registerUser = async (req, res) => {
  try {
    const result = await registerUserService(req.body);

    res.cookie("token", result.token, getCookieOptions());

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: result.user,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      error: error.error || "Internal Server Error",
      status: error.status || 500,
      message: error.message || "Something went wrong while registering user",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const result = await loginUserService(req.body);

    res.cookie("token", result.token, getCookieOptions());

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: result.user,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      error: error.error || "Internal Server Error",
      status: error.status || 500,
      message: error.message || "Something went wrong while logging in",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await getMeService(req.user.id);

    return res.status(200).json({
      success: true,
      message: "Authenticated user fetched successfully",
      user,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      error: error.error || "Internal Server Error",
      status: error.status || 500,
      message: error.message || "Something went wrong while fetching user",
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
      status: 500,
      message: "Something went wrong while logging out",
    });
  }
};