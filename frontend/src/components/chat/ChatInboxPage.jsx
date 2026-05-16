import ChatInbox from "../../components/chat/ChatInbox";
import ChatRoom from "../../components/chat/ChatRoom";

export default function ChatInboxPage() {
  return (
    <div className="flex h-screen">
      <ChatInbox />
      <ChatRoom />
    </div>
  );
}