export default function Footer() {
  return (
    <footer
      style={{
        padding: "36px 24px",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          fontSize: "14px",
          color: "rgba(255,255,255,0.65)",
        }}
      >
        © {new Date().getFullYear()}{" "}
        <span
          style={{
            fontWeight: 700,
            background: "linear-gradient(135deg, #6366f1, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Harishram S
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}
