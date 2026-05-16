export default function MessageInput() {
  return (
    <div className="border-t border-gray-300 p-4 flex gap-2 bg-white">
      
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 border rounded-full px-5 py-3 outline-none"
      />

      <button className="bg-blue-500 text-white px-5 py-3 rounded-full">
        Send
      </button>
    </div>
  );
}