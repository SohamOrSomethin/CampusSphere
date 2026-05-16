export default function ChatInboxPage() {
  return (
    <div className="flex h-screen">
      
      <div className="w-[320px] border-r border-gray-300 p-4">
        <h2 className="text-2xl font-bold mb-4">
          Chats
        </h2>

        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-gray-100 cursor-pointer">
            John Doe
          </div>

          <div className="p-3 rounded-lg bg-gray-100 cursor-pointer">
            Jane Smith
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        
        <div className="border-b border-gray-300 p-4 text-xl font-semibold">
          John Doe
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="mb-3 flex justify-start">
            <div className="bg-gray-200 px-4 py-2 rounded-xl max-w-xs">
              Hello!
            </div>
          </div>

          <div className="mb-3 flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-xl max-w-xs">
              Hi there 👋
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 p-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
      </div>
    </div>
  );
}