import Message from "./Message.jsx";


export default function MessageList({ messages, pinnedId, onPin, onReact }) {  
  return (
    <ul className="messages">
      {messages.map((message) => (
      <Message 
      key={message.id} 
      message={message} 
      isPinned={message.id === pinnedId}
      onPin={onPin}
      onReact={onReact} 
      />
  ))}
    </ul>
  );
}
