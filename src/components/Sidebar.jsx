export default function Sidebar({ channels }) {
  function handleChannelClick(channel) {
    console.log("clicked", channel.name);
    console.log("type:", e.type);
    console.log("target:", e.taget.tagName, e.taget.textContent);
    console.log("a real browser event underneath:", e.nativeEvent instanceof MouseEvent);
  }
  return (
    <nav className="sidebar">
      <h2>Channels</h2>
      {channels.map((channel) => (
        <button 
        key={channel.id} 
        className="channel">
        onClick={(e) => handleChannelClick(e,channel)}
 
        # {channel.name}
        </button>
      ))}
    </nav>
  );
}
