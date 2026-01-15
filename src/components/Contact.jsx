import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Contact() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = width <= 640;

  const contacts = [
    {
      label: "Call",
      href: "tel:+917708173148",
      icon: <Phone size={isMobile ? 20 : 22} />,
    },
    {
      label: "Email",
      href: "mailto:harishramsanthanam4@gmail.com",
      icon: <Mail size={isMobile ? 20 : 22} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harishram-santhankrishnan-94455b159/",
      icon: <Linkedin size={isMobile ? 20 : 22} />,
    },
    {
      label: "GitHub",
      href: "https://github.com/Harish27-techy",
      icon: <Github size={isMobile ? 20 : 22} />,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: isMobile ? "90px 20px" : "140px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "44px" : "70px",
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
            <Send size={14} />
            CONTACT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
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
            Let’s Connect
          </motion.h2>
        </div>

        {/* CONTACT ICON ROW – NO EXTRA GAPS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: isMobile ? "18px" : "26px",
            maxWidth: "420px",
            margin: "0 auto",
          }}
        >
          {contacts.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              title={item.label}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={
                !isMobile
                  ? {
                    y: -6,
                    scale: 1.08,
                  }
                  : {}
              }
              style={{
                width: isMobile ? "60px" : "72px",
                height: isMobile ? "60px" : "72px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
                backdropFilter: "blur(20px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                if (isMobile) return;
                e.currentTarget.style.boxShadow =
                  "0 18px 36px rgba(34,211,238,0.35)";
                e.currentTarget.style.borderColor =
                  "rgba(34,211,238,0.7)";
              }}
              onMouseLeave={(e) => {
                if (isMobile) return;
                e.currentTarget.style.boxShadow =
                  "0 0 0 rgba(0,0,0,0)";
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.25)";
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
