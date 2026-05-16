export default function ChatInbox() {
  const contacts = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ];

  return (
    <div className="w-64 border-r bg-white flex flex-col">
      <div className="p-4 font-bold text-lg border-b">Chats</div>
      <div className="flex flex-col gap-2 p-2">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200"
          >
            {contact.name}
          </div>
        ))}
      </div>
    </div>
  );
}