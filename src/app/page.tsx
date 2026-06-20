"use client";

import React, { useState } from "react";

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
        }}
      >
        {/* NAVBAR */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            backdropFilter: "blur(20px)",
            background: "rgba(0,0,0,0.6)",
            borderBottom: "1px solid #222",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              src="/logo.png"
              alt="DTECH"
              style={{
                height: "50px",
              }}
            />

            <h1
              style={{
                letterSpacing: "3px",
                margin: 0,
              }}
            >
              DTECH
            </h1>
          </div>

          <button
            onClick={() => setDark(!dark)}
            style={{
              padding: "10px 16px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        {/* HERO */}
        <section
          style={{
            padding: "80px 20px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <div style={{ maxWidth: "500px" }}>
            <h1
              style={{
                fontSize: "70px",
                marginBottom: "10px",
              }}
            >
              DPHONE X1
            </h1>

            <h2
              style={{
                color: "#60a5fa",
              }}
            >
              The Future In Your Hands
            </h2>

            <p
              style={{
                color: "#aaa",
                fontSize: "18px",
                lineHeight: "1.8",
              }}
            >
              Featuring a 6.7-inch AMOLED display,
              8GB RAM, 256GB storage, AI camera system
              and a 5000mAh battery.
            </p>

            <a
              href="/dphone"
              style={{
                display: "inline-block",
                marginTop: "20px",
                background: "#2563eb",
                color: "white",
                padding: "14px 28px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Learn More
            </a>
          </div>

          <img
            src="/dphone.png"
            alt="DPHONE X1"
            style={{
              maxWidth: "500px",
              width: "100%",
            }}
          />
        </section>

        {/* PRODUCT BOX */}
        <section
          style={{
            textAlign: "center",
            padding: "80px 20px",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "30px",
            }}
          >
            Premium Packaging
          </h2>

          <img
            src="/dphone-box.png"
            alt="DPHONE X1 Box"
            style={{
              maxWidth: "450px",
              width: "100%",
            }}
          />
        </section>

        {/* PRODUCTS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
            padding: "20px",
          }}
        >
          <a href="/dphone" style={cardStyle}>📱 DPHONE</a>
          <a href="/dpad" style={cardStyle}>📟 DPAD</a>
          <a href="/dbook" style={cardStyle}>💻 DBOOK</a>
          <a href="/dwatch" style={cardStyle}>⌚ DWATCH</a>
          <a href="/dbuds" style={cardStyle}>🎧 DBUDS</a>
        </section>

        <footer
          style={{
            textAlign: "center",
            padding: "40px",
            marginTop: "100px",
            borderTop: "1px solid #222",
            color: "#666",
          }}
        >
          © 2026 DTECH. All Rights Reserved.
        </footer>
      </div>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  padding: "25px",
  borderRadius: "16px",
  textAlign: "center",
  textDecoration: "none",
  color: "white",
  border: "1px solid rgba(255,255,255,0.1)",
  fontWeight: "bold",
};
