export default function MessageBubble({
  message,
  isSender,
}) {
  return (
    <div
      className={`flex mb-3 ${
        isSender ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-xs px-4 py-3 rounded-2xl text-sm shadow-sm
          ${
            isSender
              ? "bg-blue-500 text-white rounded-br-sm"
              : "bg-white text-black rounded-bl-sm border"
          }
        `}
      >
        {message}
      </div>
    </div>
  );
}