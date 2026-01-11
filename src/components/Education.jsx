import { GraduationCap, Calendar, School } from "lucide-react";
import { motion } from "framer-motion";

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
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
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
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 70, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900,
            }}
          >
            Academic Background
          </motion.h2>
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 90, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                delay: index * 0.15,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "20px",
                padding: "36px",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* DEGREE */}
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.25, duration: 0.6 }}
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  marginBottom: "16px",
                }}
              >
                {edu.degree}
              </motion.h3>

              {/* INSTITUTION */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.35, duration: 0.6 }}
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
              </motion.div>

              {/* DURATION */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.45, duration: 0.6 }}
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
              </motion.div>

              {/* SCORE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.6,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
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
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
