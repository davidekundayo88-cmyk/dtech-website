export default function DPad() {
  return (
    <main style={{
      background: "black",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "50px" }}>📟 DPAD</h1>

      <p style={{ color: "gray", marginTop: "10px" }}>
        Smart tablet device by DTECH.
      </p>

      <div style={{
        marginTop: "30px",
        background: "#111",
        padding: "20px",
        borderRadius: "12px"
      }}>
        <h2>🔥 Features</h2>
        <ul>
          <li>Large HD display</li>
          <li>Fast performance</li>
          <li>Stylus support</li>
          <li>Long battery life</li>
        </ul>
      </div>
    </main>
  );
}
