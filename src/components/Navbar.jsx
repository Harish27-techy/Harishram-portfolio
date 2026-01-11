import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Awards", id: "awards" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LOGO */}
        <div className="nav-logo" onClick={() => scrollTo("home")}>
          HARISHRAM
        </div>

        {/* DESKTOP NAV */}
        <div className="nav-items">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="nav-item"
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* HAMBURGER (MOBILE ONLY) */}
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
              className="mobile-item"
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
