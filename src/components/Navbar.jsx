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
  ShieldCheck,
} from "lucide-react";

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
        <div
          className="nav-logo"
          onClick={() => scrollTo("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          {/* PROFESSIONAL LOGO ICON */}
          <ShieldCheck
            size={22}
            style={{
              color: "#c7d2fe",
            }}
          />

          {/* PREMIUM GRADIENT TEXT */}
          <span
            style={{
              fontWeight: 900,
              letterSpacing: "0.08em",
              fontSize: "15px",
              background:
                "linear-gradient(90deg, #e0e7ff 0%, #c7d2fe 35%, #f8fafc 70%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            HARISHRAM
          </span>
        </div>

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
