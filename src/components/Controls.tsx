type Props = {
  onFeed: () => void;
  onPlay: () => void;
  onSleep: () => void;
  onReset: () => void;
};

function Controls({ onFeed, onPlay, onSleep, onReset }: Props) {
  return (
    <div className="controls">
  <button onClick={onFeed}>🍔</button>
  <button onClick={onPlay}>🎮</button>
  <button onClick={onSleep}>💤</button>
  <button onClick={onReset}>🔄</button>
</div>
  );
}

export default Controls;