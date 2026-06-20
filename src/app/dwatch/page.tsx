export default function DWatch() {
  return (
    <main style={{
      background: "black",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "50px" }}>⌚ DWATCH</h1>

      <p style={{ color: "gray", marginTop: "10px" }}>
        Smart wearable technology.
      </p>

      <div style={{
        marginTop: "30px",
        background: "#111",
        padding: "20px",
        borderRadius: "12px"
      }}>
        <h2>🔥 Features</h2>
        <ul>
          <li>Heart rate tracking</li>
          <li>Fitness monitoring</li>
          <li>Water resistant</li>
          <li>Smart notifications</li>
        </ul>
      </div>
    </main>
  );
}
