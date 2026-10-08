import { useState } from "react";

export default function Composer({onSend, onTypingChange}) {
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  function send() {
    const text = draft.trim();
    if (text === "") {
      return;
  }
    console.log("send: ", text);
    setDraft("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    send();
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
    if (e.key === "Escape") {
      setDraft("");
    }
  }
  return (
    <form className="composer" onSubmit={handleSubmit}>
      <textarea
       rows={2} 
       placeholder="Type a message..."
       value={draft}
       onChange={(e) => setDraft(e.target.value)}
       onKeyDown={handleKeyDown}
       onFocus={() => onTypingChange(true)}
       onBlur={() => onTypingChange(false)}
       />
      <button type="submit">Send</button>
      {isTyping && <span className="typing"> You are typing...</span>}
    </form>
    
  );
}
