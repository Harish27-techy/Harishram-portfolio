import { User, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const details = [
    {
      label: "Experience",
      value: "3+ Years",
      icon: <Briefcase size={18} />,
    },
    {
      label: "Location",
      value: "Kumbakonam, Tamil Nadu",
      icon: <MapPin size={18} />,
    },
    {
      label: "Role",
      value: "Software Development Engineer – L2",
      icon: <User size={18} />,
    },
  ];

  return (
    <section id="about" style={{ padding: "140px 0" }}>
      <div className="container">
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
            <User size={14} />
            ABOUT ME
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
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
            Who I Am
          </motion.h2>
        </div>

        {/* CONTENT */}
        <div className="about-grid">
          {/* LEFT TEXT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.8)",
                marginBottom: "28px",
              }}
            >
              Results-driven Software Engineer with 3+ years of experience
              in full-stack development using Angular, Node.js, and AWS
              technologies. Passionate about building scalable, responsive,
              and high-performance web applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              Experienced in enterprise applications, RESTful APIs, database
              optimization, and modern frontend architectures. Always eager
              to learn and adopt emerging technologies.
            </motion.p>
          </div>

          {/* RIGHT INFO CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            {details.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 70, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8, scale: 1.04 }}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "18px",
                  padding: "22px",
                  backdropFilter: "blur(20px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                {/* ICON */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: 0.25 + index * 0.15,
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.35), rgba(34,211,238,0.35))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </motion.div>

                {/* TEXT */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.12em",
                      color: "rgba(255,255,255,0.6)",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label.toUpperCase()}
                  </div>

                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
