# CampusSphere Socket.io Events

## Connection Events
connect
disconnect

## Room Events
join_room
leave_room

## Message Events
send_message
receive_message

## Typing Events
typing_start
typing_stop

## Seen Events
message_seen

## Notification Events
notification

## Payload Structures

### join_room
{
  chatId: string
}

### send_message
{
  chatId: string,
  senderId: string,
  content: string,
  type: "TEXT"
}

### receive_message
{
  id: string,
  chatId: string,
  senderId: string,
  content: string,
  createdAt: string
}

### typing_start
{
  chatId: string,
  userId: string
}

### typing_stop
{
  chatId: string,
  userId: string
}

### message_seen
{
  chatId: string,
  messageId: string,
  seenBy: string
}