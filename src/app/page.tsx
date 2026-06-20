"use client";

import React, { useState } from "react";

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  padding: "25px",
  borderRadius: "16px",
  textAlign: "center",
  textDecoration: "none",
  color: "white",
  border: "1px solid rgba(255,255,255,0.1)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  fontSize: "20px",
  fontWeight: "bold"
};

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main>
      <div
        style={{
          minHeight: "100vh",
          background: dark
            ? "linear-gradient(180deg,#050505,#0d0d0d,#111827)"
            : "#f5f5f5",
          color: dark ? "white" : "black",
          transition: "0.3s"
        }}
      >
        {/* NAVBAR */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            position: "sticky",
            top: 0,
            backdropFilter: "blur(20px)",
            background: dark
              ? "rgba(0,0,0,0.6)"
              : "rgba(255,255,255,0.7)",
            borderBottom: dark
              ? "1px solid #222"
              : "1px solid #ddd"
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              letterSpacing: "3px",
              fontSize: "28px"
            }}
          >
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

        {/* FEATURED DPHONE */}
        <section
          style={{
            textAlign: "center",
            padding: "120px 20px"
          }}
        >
          <h1
            style={{
              fontSize: "80px",
              marginBottom: "10px"
            }}
          >
            📱 DPHONE X1
          </h1>

          <h2
            style={{
              fontSize: "48px",
              marginBottom: "20px"
            }}
          >
            Power Beyond Limits
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "20px",
              color: dark ? "#aaa" : "#555"
            }}
          >
            Experience next-generation performance,
            AI-powered photography, all-day battery life,
            and premium design crafted by DTECH.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >
            <a
              href="/dphone"
              style={{
                background: "#2563eb",
                color: "white",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: "10px",
                fontWeight: "bold"
              }}
            >
              Learn More
            </a>

            <a
              href="/dphone"
              style={{
                border: "1px solid #444",
                color: "white",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: "10px",
                fontWeight: "bold"
              }}
            >
              View Specs
            </a>
          </div>
        </section>

        {/* PRODUCTS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
            padding: "20px"
          }}
        >
          <a href="/dphone" style={cardStyle}>
            📱 DPHONE
          </a>

          <a href="/dpad" style={cardStyle}>
            📟 DPAD
          </a>

          <a href="/dbook" style={cardStyle}>
            💻 DBOOK
          </a>

          <a href="/dwatch" style={cardStyle}>
            ⌚ DWATCH
          </a>

          <a href="/dbuds" style={cardStyle}>
            🎧 DBUDS
          </a>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            textAlign: "center",
            padding: "40px",
            marginTop: "100px",
            borderTop: dark
              ? "1px solid #222"
              : "1px solid #ddd",
            color: dark ? "#666" : "#777"
          }}
        >
          © 2026 DTECH. All Rights Reserved.
        </footer>
      </div>
    </main>
  );
}
