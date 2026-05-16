import { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import TypingIndicator from "./TypingIndicator";

export default function ChatRoom() {
  const [isTyping, setIsTyping] = useState(false);

  console.log("isTyping:", isTyping); // ✅ MOVED outside JSX return, inside the function

  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        <div className="flex flex-col gap-3">
          <MessageBubble message="Hello!" isSender={false} />
          <MessageBubble message="Hi there 👋" isSender={true} />

          {isTyping && <TypingIndicator />}  {/* ✅ no console.log here */}
        </div>
      </div>

      <MessageInput onTyping={setIsTyping} />
    </div>
  );
}