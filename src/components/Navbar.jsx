import { useState } from "react";
import {
  Menu,
  X,
  User,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  UserCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", id: "about", icon: <User size={16} /> },
    { label: "Skills", id: "skills", icon: <Code2 size={16} /> },
    { label: "Experience", id: "experience", icon: <Briefcase size={16} /> },
    { label: "Education", id: "education", icon: <GraduationCap size={16} /> },
    { label: "Awards", id: "awards", icon: <Award size={16} /> },
    { label: "Contact", id: "contact", icon: <Mail size={16} /> },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LEFT BRAND */}
        <motion.div
          onClick={() => scrollTo("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* PROFILE ICON */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(99,102,241,0)",
                "0 0 18px rgba(99,102,241,0.45)",
                "0 0 0 rgba(99,102,241,0)",
              ],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.35), rgba(34,211,238,0.35))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <UserCircle2 size={20} color="#e0e7ff" />
          </motion.div>

          {/* BRAND TEXT */}
          <motion.div
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "200% 50%" }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{
              textShadow:
                "0 0 10px rgba(103,232,249,0.8), 0 0 30px rgba(99,102,241,0.6)",
            }}
            style={{
              fontWeight: 900,
              letterSpacing: "0.22em",
              fontSize: "15px",
              background:
                "linear-gradient(90deg, #e0e7ff, #c7d2fe, #67e8f9, #e0e7ff)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              position: "relative",
              lineHeight: 1,
            }}
          >
            HARISHRAM

            {/* UNDERLINE ACCENT */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: 0,
                bottom: "-6px",
                height: "2px",
                width: "100%",
                transformOrigin: "left",
                borderRadius: "999px",
                background:
                  "linear-gradient(90deg, transparent, #67e8f9, transparent)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT DESKTOP NAV */}
        <div className="nav-items">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="nav-item"
              onClick={() => scrollTo(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="nav-item"
              onClick={() => scrollTo(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
