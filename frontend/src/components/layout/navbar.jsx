import Avatar from "../ui/Avatar";

export default function Navbar() {
  return (
    <nav
      className="
        h-16
        bg-white
        shadow-md
        flex
        items-center
        justify-between
        px-6
      "
    >
      <h1 className="text-2xl font-bold text-blue-600">
        CampusSphere
      </h1>

      <div className="flex items-center gap-4">
        <Avatar
          src="https://i.pravatar.cc/100"
          alt="user"
        />
      </div>
    </nav>
  );
}