import { Download, Mail, Laptop } from "lucide-react";
import profileImg from "../assets/profile.jpeg";
import resumePdf from "../assets/HarishramResume.pdf";

export default function Hero() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      style={{
        padding: "160px 24px 140px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <div>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "14px",
            }}
          >
            HI, I’M
          </p>

          <h1
            style={{
              fontSize: "clamp(44px, 6vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "18px",
            }}
          >
            Harishram{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #6366f1, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              S
            </span>
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "18px",
              color: "rgba(255,255,255,0.85)",
              marginBottom: "26px",
            }}
          >
            <Laptop size={18} />
            Software Development Engineer – L2
          </div>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.75)",
              maxWidth: "520px",
              marginBottom: "36px",
            }}
          >
            Results-driven Software Engineer with 3+ years of experience
            building scalable, high-performance web applications using
            Angular, Node.js, and AWS technologies.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "22px",
              flexWrap: "wrap",
            }}
          >
            {/* DOWNLOAD RESUME */}
            <a
              href={resumePdf}
              download="Harishram_Resume.pdf"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, #6366f1, #22d3ee)",
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
                transition: "transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Download size={18} />
              Download Resume
            </a>

            {/* CONTACT ME */}
            <button
              onClick={scrollToContact}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                borderRadius: "999px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Mail size={18} />
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.35), rgba(34,211,238,0.35))",
              padding: "8px",
            }}
          >
            <img
              src={profileImg}
              alt="Harishram"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
