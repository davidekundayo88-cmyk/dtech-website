"use client";

import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main className={dark ? "dark" : ""}>

      <div style={{
        minHeight: "100vh",
        background: dark ? "#000" : "#f5f5f5",
        color: dark ? "white" : "black",
        transition: "0.3s"
      }}>

        {/* NAVBAR */}
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          borderBottom: dark ? "1px solid #222" : "1px solid #ddd"
        }}>
          
          <h1 style={{ fontWeight: "bold", letterSpacing: "2px" }}>
            DTECH
          </h1>

          <button
            onClick={() => setDark(!dark)}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer"
            }}
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        {/* HERO */}
        <section style={{ textAlign: "center", padding: "80px 20px" }}>
          <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>
            The Future of Technology
          </h2>

          <p style={{ color: "gray", marginTop: "10px" }}>
            DTECH builds next-generation smart devices
          </p>
        </section>

        {/* PRODUCTS */}
        <section style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "20px",
          padding: "20px"
        }}>

          {["DPHONE", "DPAD", "DBOOK", "DWATCH", "DBUDS"].map((item) => (
            <div key={item} style={{
              background: dark ? "#111" : "white",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: dark ? "none" : "0 2px 10px rgba(0,0,0,0.1)"
            }}>
              {item}
            </div>
          ))}

        </section>

      </div>
    </main>
  );
}
