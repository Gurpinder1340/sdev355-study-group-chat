export default function Sidebar({ channels, activeId, onSelectChannel }) {
  return (
    <nav className="sidebar">
      <h2>Channels</h2>
      {channels.map((channel) => (
        <button
          key={channel.id}
          className={channel.id === activeId ? "channel active" : "channel"}
          onClick={() => onSelectChannel(channel.id)}
        >
          # {channel.name}
        </button>
      ))}
    </nav>
  );
}
