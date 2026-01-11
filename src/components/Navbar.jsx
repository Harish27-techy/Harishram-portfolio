export default function Navbar() {
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Awards", id: "awards" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        style={{
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: "999px",
          padding: "14px 28px",
          display: "flex",
          alignItems: "center",
          gap: "26px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        }}
      >
        {/* LOGO */}
        <span
          onClick={() => handleScroll("home")}
          style={{
            fontWeight: 800,
            fontSize: "18px",
            letterSpacing: "0.08em",
            color: "#6366f1",
            cursor: "pointer",
          }}
        >
          HARISHRAM<span style={{ color: "#ec4899" }}>.</span>
        </span>

        {/* NAV ITEMS */}
        {navItems.map((item) => (
          <span
            key={item.id}
            onClick={() => handleScroll(item.id)}
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.85)",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background =
                "linear-gradient(135deg, #6366f1, #22d3ee)";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "rgba(255,255,255,0.85)";
            }}
          >
            {item.label}
          </span>
        ))}
      </div>
    </nav>
  );
}
