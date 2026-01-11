import { GraduationCap, Calendar, School } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Master of Science – Computer Science",
      institution: "Sastra Deemed University",
      duration: "2020 – 2022",
      score: "CGPA: 6.9",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Periyar Maniammai University",
      duration: "2017 – 2020",
      score: "CGPA: 7.3",
    },
  ];

  return (
    <section id="education" style={{ padding: "140px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* SECTION HEADER */}
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.25)",
              fontSize: "12px",
              letterSpacing: "0.15em",
              marginBottom: "18px",
            }}
          >
            <GraduationCap size={14} />
            EDUCATION
          </div>

          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900,
            }}
          >
            Academic Background
          </h2>
        </div>

        {/* EDUCATION CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
          }}
        >
          {education.map((edu, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "20px",
                padding: "36px",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* DEGREE */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  marginBottom: "16px",
                }}
              >
                {edu.degree}
              </h3>

              {/* INSTITUTION */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "14px",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <School size={16} />
                {edu.institution}
              </div>

              {/* DURATION */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "14px",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <Calendar size={14} />
                {edu.duration}
              </div>

              {/* SCORE */}
              <div
                style={{
                  marginTop: "18px",
                  display: "inline-block",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(34,211,238,0.2))",
                  border: "1px solid rgba(255,255,255,0.25)",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                {edu.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
