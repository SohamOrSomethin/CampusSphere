import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import TypingIndicator from "./TypingIndicator";

export default function ChatRoom() {
  return (
    <div className="flex-1 flex flex-col">
      
      <ChatHeader />

      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        <MessageBubble
          message="Hello!"
          isSender={false}
        />

        <MessageBubble
          message="Hi there 👋"
          isSender={true}
        />

        <TypingIndicator />
      </div>

      <MessageInput />
    </div>
  );
}