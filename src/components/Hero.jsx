import { Download, Mail, Laptop } from "lucide-react";
import profileImg from "../assets/profile.jpeg";
import resumePdf from "../assets/HarishramResume.pdf";

export default function Hero() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        padding: "160px 0 120px",
      }}
    >
      <div className="container hero-grid">
        {/* LEFT CONTENT */}
        <div>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "12px",
            }}
          >
            HI, I’M
          </p>

          <h1
            style={{
              fontSize: "clamp(42px, 6vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "16px",
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
              marginBottom: "24px",
              flexWrap: "wrap",
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
            Angular, Node.js, and cloud technologies.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
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
              }}
            >
              <Download size={18} />
              Download Resume
            </a>

            {/* CONTACT */}
            <button
              onClick={scrollToContact}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                borderRadius: "999px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
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
              width: "300px",
              height: "300px",
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
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
