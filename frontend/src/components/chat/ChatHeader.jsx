export default function ChatHeader() {
  return (
    <div className="border-b border-gray-300 p-4 flex items-center gap-3 bg-white">
      
      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold">
        J
      </div>

      <div>
        <h2 className="font-semibold text-lg">
          John Doe
        </h2>

        <p className="text-sm text-green-500">
          Online
        </p>
      </div>
    </div>
  );
}