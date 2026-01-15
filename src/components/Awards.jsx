import {
  Award,
  BadgeCheck,
  Trophy,
  Calendar,
  Building2,
  Camera,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Awards() {
  const awards = [
    {
      title: "STAR Award 2025 – Striving To Achieve Results",
      description: "Recognized for solving complex problems, taking strong ownership, and consistently delivering high-quality results",
      organization: "Bravura Technologies Pvt Ltd",
      date: "Dec 2025",
      icon: "trophy",
    },
    {
      title: "Certificate of Appreciation – Bravura HOUSING module",
      description:
        "Awarded for playing a key role in the successful implementation and launch of the HOUSING module.",
      organization: "Bravura Technologies Pvt Ltd",
      date: "Dec 2025",
      icon: "badge",
    },
    {
      title: "Best Photography Competition – Second Prize",
      description:
        "Secured second place in the photography competition for creative excellence and visual storytelling.",
      organization: "Periyar Maniammai University",
      date: "Aug 2018",
      icon: "camera",
    },
  ];

  return (
    <section id="awards" style={{ padding: "140px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.7 }}
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
            <Award size={14} />
            AWARDS & CERTIFICATIONS
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
            Recognition & Achievements
          </motion.h2>
        </div>

        {/* AWARDS GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
          }}
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                delay: index * 0.15,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -10 }}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "20px",
                padding: "36px",
                backdropFilter: "blur(20px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* ICON BADGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.25 + index * 0.15,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(34,211,238,0.25))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "22px",
                }}
              >
                {award.icon === "trophy" && <Trophy size={22} />}
                {award.icon === "badge" && <BadgeCheck size={22} />}
                {award.icon === "camera" && <Camera size={22} />}
              </motion.div>

              {/* TITLE */}
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.35, duration: 0.6 }}
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  marginBottom: "14px",
                  lineHeight: 1.4,
                }}
              >
                {award.title}
              </motion.h3>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.45, duration: 0.6 }}
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: "22px",
                }}
              >
                {award.description}
              </motion.p>

              {/* META INFO */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "18px",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <Building2 size={14} />
                  {award.organization}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <Calendar size={14} />
                  {award.date}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
