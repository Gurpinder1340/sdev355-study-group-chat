import { useState } from "react";

export default function Message({ message, isPinned, onPin, onReact}) {
  const [showTime, setShowTime] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function handlePinClick(e) {
    e.stopPropagation();
    onPin(message.id);
  }

  return (
    <li
    className={isPinned ? "message pinned" : "message"}
    onClick={() => setShowTime(!showTime)}
    onDoubleClick={() => onReact(message.id)}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
    <span className="author">{message.author}</span>
    <p>{message.text}</p>
    {showTime && <span className="time">{message.time}</span>}
    {message.hearts > 0 && <span className="hearts"> {message.hearts}</span>}
    {isHovered && ( 
      <div className="toolbar">
        <button onClick={handlePinClick}>{isPinned ? "Unpin" : "Pin"}</button>
      </div>
  )}
  </li>
  );
}