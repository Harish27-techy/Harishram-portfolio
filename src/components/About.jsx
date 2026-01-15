import { User, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = width <= 640;
  const isTablet = width > 640 && width <= 1024;

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
      value: "Software Development Engineer - L2",
      icon: <User size={18} />,
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: isMobile ? "90px 0" : "140px 0",
      }}
    >
      <div className="container">
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "48px" : "90px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6 }}
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
              marginBottom: "16px",
            }}
          >
            <User size={14} />
            ABOUT ME
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 36, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 900,
              lineHeight: 1.15,
            }}
          >
            Who I Am
          </motion.h2>
        </div>

        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
                ? "1fr"
                : "1.2fr 1fr",
            gap: isMobile ? "44px" : "80px",
            alignItems: "start",
          }}
        >
          {/* LEFT TEXT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              style={{
                fontSize: isMobile ? "16px" : "17px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.8)",
                marginBottom: "26px",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Results-driven Software Engineer with 3+ years of experience in
              full-stack development using Angular, Node.js, and AWS
              technologies. Passionate about building scalable, responsive,
              and high-performance web applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              style={{
                fontSize: isMobile ? "16px" : "17px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.75)",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Experienced in enterprise applications, RESTful APIs, database
              optimization, and modern frontend architectures. Always eager
              to learn and adopt emerging technologies.
            </motion.p>
          </div>

          {/* RIGHT INFO CARDS – DESKTOP SAFE */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(2, minmax(0, 1fr))",
              gap: "22px",
            }}
          >
            {details.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={!isMobile ? { y: -8, scale: 1.04 } : {}}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "18px",
                  padding: "22px",
                  backdropFilter: "blur(18px)",
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
                    delay: 0.2 + index * 0.12,
                    type: "spring",
                    stiffness: 260,
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.12em",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {item.label.toUpperCase()}
                  </div>

                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      lineHeight: 1.4,
                      wordBreak: "break-word",
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
