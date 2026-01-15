import { Briefcase, Calendar, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Bravura Technologies Pvt Ltd",
      role: "Software Development Engineer – L2",
      duration: "Feb 2023 – Present",
      points: [
        "Developed responsive and cross-browser compatible UIs using Angular, HTML5, CSS3, Bootstrap, and Flexbox.",
        "Built and maintained enterprise-level SPAs using Angular (v4–latest), RxJS, Ngx libraries, and Nebular.",
        "Integrated Google APIs for housing and location-based solutions.",
        "Optimized backend performance using DynamoDB queries, filters, and efficient SQL handling.",
        "Designed and integrated RESTful APIs using JSON and XML.",
        "Improved application performance and state management using RxJS and async programming.",
        "Collaborated with cross-functional teams using Git in an Agile environment.",
      ],
    },
    {
      company: "AvenData Technologies Pvt Ltd",
      role: "Full Stack Developer",
      duration: "Aug 2022 – Nov 2022",
      points: [
        "Debugged production issues by analyzing logs and resolving client-reported defects.",
        "Improved application reliability and turnaround time for client issues.",
        "Created automation scripts to streamline client operations.",
        "Worked on SQL imports, data transformation, and mapping.",
        "Supported enterprise clients such as Gaspool, Vonovia, and Edeka.",
        "Collaborated with teams to implement fixes aligned with business requirements.",
      ],
    },
  ];

  return (
    <section id="experience" style={{ padding: "140px 24px" }}>
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
            <Briefcase size={14} />
            EXPERIENCE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
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
            Professional Journey
          </motion.h2>
        </div>

        {/* EXPERIENCE CARDS */}
        <div style={{ display: "grid", gap: "40px" }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              style={{
                display: "grid",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "22px",
                backdropFilter: "blur(20px)",
                overflow: "hidden",
              }}
            >
              {/* LEFT PANEL */}
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.15 }}
                style={{
                  padding: "28px",
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(34,211,238,0.25))",
                  borderRight: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: 800,
                    fontSize: "16px",
                    marginBottom: "14px",
                  }}
                >
                  <Building2 size={18} />
                  {exp.company}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  <Calendar size={14} />
                  {exp.duration}
                </div>
              </motion.div>

              {/* RIGHT PANEL */}
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.25 }}
                style={{ padding: "36px" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: 700,
                    fontSize: "18px",
                    marginBottom: "22px",
                  }}
                >
                  <Briefcase size={18} />
                  {exp.role}
                </motion.div>

                {/* POINTS */}
                <div style={{ display: "grid", gap: "14px" }}>
                  {exp.points.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        delay: 0.45 + i * 0.08,
                        duration: 0.5,
                      }}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "14px",
                      }}
                    >
                      {/* BULLET */}
                      <div
                        style={{
                          marginTop: "6px",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #6366f1, #22d3ee)",
                          boxShadow:
                            "0 0 10px rgba(99,102,241,0.6)",
                          flexShrink: 0,
                        }}
                      />

                      <p
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.6,
                          color: "rgba(255,255,255,0.82)",
                        }}
                      >
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
