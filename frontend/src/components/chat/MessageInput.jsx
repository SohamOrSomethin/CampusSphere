export default function MessageInput({ onTyping }) {
  const handleChange = (e) => {
    onTyping(e.target.value.length > 0);
  };

  return (
    <input
      id="message-input"
      className="border p-2 w-full"
      placeholder="Type a message..."
      onChange={handleChange}
    />
  );
}