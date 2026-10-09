export default function PinnedBar({ message, onUnpin }) {
  if (!message) {
    return null;
  }

  return (
    <div className="pinned-bar">
      <span className="label">Pinned</span>
      <span className="pinned-text">
        {message.author}: {message.text}
      </span>
      <button onClick={onUnpin}>Unpin</button>
    </div>
  );
}
