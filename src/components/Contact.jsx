import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      label: "Call",
      href: "tel:+917708173148",
      icon: <Phone size={22} />,
    },
    {
      label: "Email",
      href: "mailto:harishramsanthanam4@gmail.com",
      icon: <Mail size={22} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harishram-santhankrishnan-94455b159/",
      icon: <Linkedin size={22} />,
    },
    {
      label: "GitHub",
      href: "https://github.com/Harish27-techy",
      icon: <Github size={22} />,
    },
  ];

  return (
    <section id="contact" style={{ padding: "140px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
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
            <Send size={14} />
            CONTACT
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
            Let’s Connect
          </motion.h2>
        </div>

        {/* ICON BUTTONS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {contacts.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              title={item.label}
              initial={{ opacity: 0, y: 80, scale: 0.7, rotate: -12 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
                backdropFilter: "blur(20px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                boxShadow: "0 0 0 rgba(0,0,0,0)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(34,211,238,0.35)";
                e.currentTarget.style.borderColor =
                  "rgba(34,211,238,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
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
