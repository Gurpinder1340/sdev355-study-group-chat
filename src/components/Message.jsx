
import { useState } from "react";

export default function Message({ message }) {
  const [showTime, setShowTime] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="message"
      onClick={() => setShowTime(!showTime)}
      onDoubleClick={() => console.log("Double-clicked", message.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="author">{message.author}</span>

      <p className="text">{message.text}</p>

      {showTime && (
        <span className="time">{message.time}</span>
      )}

      {isHovered && (
        <div className="toolbar">
          <button
            onClick={(event) => {
              event.stopPropagation();
              console.log("pin", message.id);
            }}
          >
            Pin
          </button>
        </div>
      )}
    </li>
  );
}
