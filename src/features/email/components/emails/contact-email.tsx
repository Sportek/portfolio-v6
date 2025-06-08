import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  title: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({ name, email, title, message }) => (
  <div
    style={{
      fontFamily: "Work Sans, Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "32px",
      background: "linear-gradient(135deg, #181a20 70%, #232733 100%)",
      borderRadius: "18px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
      color: "#f1f5f9",
      border: "1px solid #232733",
    }}
  >
    <div
      style={{
        marginBottom: "24px",
      }}
    >
      <h1
        style={{
          fontSize: 26,
          fontWeight: 800,
          margin: 0,
          color: "#60a5fa",
          letterSpacing: 1,
        }}
      >
        Nouvelle demande de contact
      </h1>
    </div>
    <div
      style={{
        background: "rgba(36, 39, 54, 0.85)",
        borderRadius: "12px",
        padding: "20px 24px",
        marginBottom: "24px",
        border: "1px solid #334155",
        boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
      }}
    >
      <p style={{ margin: "8px 0", fontSize: 16 }}>
        <span style={{ color: "#facc15", fontWeight: 700 }}>Nom :</span> {name}
      </p>
      <p style={{ margin: "8px 0", fontSize: 16 }}>
        <span style={{ color: "#34d399", fontWeight: 700 }}>Email :</span> {email}
      </p>
      <p style={{ margin: "8px 0", fontSize: 16 }}>
        <span style={{ color: "#60a5fa", fontWeight: 700 }}>Sujet :</span> {title}
      </p>
    </div>
    <div
      style={{
        background: "rgba(24, 26, 32, 0.95)",
        borderRadius: "12px",
        padding: "20px 24px",
        border: "1px solid #334155",
        boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
      }}
    >
      <h2
        style={{
          color: "#f472b6",
          fontSize: 18,
          fontWeight: 700,
          margin: "0 0 12px 0",
          letterSpacing: 0.5,
        }}
      >
        Message
      </h2>
      <p
        style={{
          color: "#f1f5f9",
          whiteSpace: "pre-wrap",
          lineHeight: "1.7",
          fontSize: 16,
          margin: 0,
        }}
      >
        {message}
      </p>
    </div>
  </div>
);
