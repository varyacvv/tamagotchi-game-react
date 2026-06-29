function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p>{label}</p>
      <div className="bar-bg">
        <div className="bar-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default Bar;