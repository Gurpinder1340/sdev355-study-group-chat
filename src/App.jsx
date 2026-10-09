import { useState } from "react";

import { CHANNELS, SEED_MESSAGES } from "./data.js";
import Sidebar from "./components/Sidebar.jsx";
import ChatHeader from "./components/ChatHeader.jsx";
import MessageList from "./components/MessageList.jsx";
import Composer from "./components/Composer.jsx";

function now() {
  return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export default function App() {
  const [activeId, setActiveId] = useState("general");

  const channel = CHANNELS.find((c) => c.id === activeId);

  const [messages, setMessages] = useState(SEED_MESSAGES);

  const [isTyping, setIsTyping] = useState(false);

  function handleSend(text) {
    const message = { id: crypto.randomUUID(), author: "You", time: now(), hearts: 0, text };
    setMessages({...messages, [activeId]: [...messages[activeId], message] });
  }

    function handleReact(id) {
        const updated = messages[activeId].map((m) =>
          m.id === id ? {...m, hearts: m.hearts + 1} : m
        );
      setMessages({ ...messages, [activeId]: updated});
    }
  return (
    <div className="app">
      <Sidebar 
      channels={CHANNELS} 
      activeId={activeId}
      onSelectChannel={setActiveId}
      />
      <main className="main">
        <ChatHeader channel={channel} isTyping={isTyping} />
        <MessageList messages={messages[activeId]} />
        <Composer onSend={handleSend} onTypingChange={setIsTyping} />
      </main>
    </div>
  );
}
