export default function DBook() {
  return (
    <main style={{
      background: "black",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "50px" }}>💻 DBOOK</h1>

      <p style={{ color: "gray", marginTop: "10px" }}>
        Powerful laptop built for performance.
      </p>

      <div style={{
        marginTop: "30px",
        background: "#111",
        padding: "20px",
        borderRadius: "12px"
      }}>
        <h2>🔥 Features</h2>
        <ul>
          <li>High-speed processor</li>
          <li>Ultra thin design</li>
          <li>Long battery life</li>
          <li>4K display option</li>
        </ul>
      </div>
    </main>
  );
}
