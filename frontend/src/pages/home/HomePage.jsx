import useSocket from "../../hooks/useSocket";

export default function HomePage() {
  const socket = useSocket();

  return (
    <div className="p-10 text-4xl font-bold">
      Home Page
    </div>
  );
}