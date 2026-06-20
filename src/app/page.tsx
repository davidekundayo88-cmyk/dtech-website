export default function Home() {
  return (
    <main style={{
      background: "#000",
      color: "#fff",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      
      {/* HEADER */}
      <h1 style={{
        fontSize: "60px",
        textAlign: "center",
        fontWeight: "bold"
      }}>
        DTECH
      </h1>

      <p style={{
        textAlign: "center",
        color: "gray",
        marginTop: "10px"
      }}>
        Building the Future of Technology
      </p>

      {/* PRODUCTS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "20px",
        marginTop: "60px"
      }}>

        <div style={cardStyle}>📱 DPHONE</div>
        <div style={cardStyle}>📟 DPAD</div>
        <div style={cardStyle}>💻 DBOOK</div>
        <div style={cardStyle}>⌚ DWATCH</div>
        <div style={cardStyle}>🎧 DBUDS</div>

      </div>

    </main>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#111",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  fontSize: "18px"
};
