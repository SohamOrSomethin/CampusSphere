import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      className="
        w-64
        bg-gray-900
        text-white
        min-h-screen
        p-5
      "
    >
      <div className="space-y-4">
        <Link to="/">Home</Link>

        <Link to="/marketplace">
          Marketplace
        </Link>

        <Link to="/services">
          Services
        </Link>

        <Link to="/chat">
          Chat
        </Link>

        <Link to="/profile">
          Profile
        </Link>
      </div>
    </aside>
  );
}