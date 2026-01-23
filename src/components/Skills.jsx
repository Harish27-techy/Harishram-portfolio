import { useState, useEffect } from "react";
import { Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- SLIDE VARIANTS (MOBILE) ---------------- */
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.96,
  }),
};

/* ---------------- MOBILE CHECK ---------------- */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
}

export default function Skills() {
  const isMobile = useIsMobile();

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "Angular", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "HTML5 & CSS3", level: 85 },
        { name: "RxJS", level: 80 },
        { name: "Bootstrap & Flexbox", level: 82 },
        { name: "Nebular / Ngx Libraries", level: 78 },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "RESTful APIs", level: 88 },
        { name: ".NET", level: 62 },
        { name: "DynamoDB (AWS)", level: 80 },
        { name: "SQL", level: 75 },
        { name: "AWS Services", level: 72 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & Version Control", level: 85 },
        { name: "Google APIs", level: 80 },
        { name: "WordPress (Divi Builder)", level: 70 },
        { name: "Cross-Browser Compatibility", level: 78 },
      ],
    },
  ];

  /* ---------------- MOBILE CAROUSEL STATE ---------------- */
  const [[index, direction], setIndex] = useState([0, 0]);
  const AUTOPLAY_DELAY = 4500;

  const paginate = (dir) => {
    setIndex(([prev]) => [
      (prev + dir + skillGroups.length) % skillGroups.length,
      dir,
    ]);
  };

  /* ---------------- AUTOPLAY (MOBILE ONLY) ---------------- */
  useEffect(() => {
    if (!isMobile) return;
    const timer = setTimeout(() => paginate(1), AUTOPLAY_DELAY);
    return () => clearTimeout(timer);
  }, [index, isMobile]);

  return (
    <section id="skills" style={{ padding: "140px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* ---------------- HEADER ---------------- */}
        <div style={{ textAlign: "center", marginBottom: "90px" }}>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.25)",
              fontSize: 12,
              letterSpacing: "0.15em",
              marginBottom: 18,
            }}
          >
            <Code2 size={14} />
            SKILLS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900,
            }}
          >
            Technical Expertise
          </motion.h2>
        </div>

        {/* ================================================= */}
        {/* ================= DESKTOP GRID ================= */}
        {/* ================================================= */}
        {!isMobile && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "32px",
            }}
          >
            {skillGroups.map((group, i) => (
              <SkillCard key={group.title} group={group} delay={i * 0.15} />
            ))}
          </div>
        )}

        {/* ================================================= */}
        {/* ================= MOBILE CAROUSEL =============== */}
        {/* ================================================= */}
        {isMobile && (
          <div style={{ position: "relative", overflow: "hidden" }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 260, damping: 30 },
                  opacity: { duration: 0.25 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -100) paginate(1);
                  if (offset.x > 100) paginate(-1);
                }}
              >
                <SkillCard group={skillGroups[index]} />
              </motion.div>
            </AnimatePresence>

            {/* DOTS */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
                marginTop: 28,
              }}
            >
              {skillGroups.map((_, i) => (
                <div
                  key={i}
                  onClick={() =>
                    setIndex([i, i > index ? 1 : -1])
                  }
                  style={{
                    width: index === i ? 18 : 8,
                    height: 8,
                    borderRadius: 999,
                    background:
                      index === i
                        ? "linear-gradient(135deg, #6366f1, #22d3ee)"
                        : "rgba(255,255,255,0.3)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ================= SKILL CARD ================= */
function SkillCard({ group, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.8 }}
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "20px",
        padding: "32px",
        backdropFilter: "blur(20px)",
      }}
    >
      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 26,
        }}
      >
        {group.title}
      </h3>

      <div style={{ display: "grid", gap: 18 }}>
        {group.skills.map((skill, i) => (
          <div key={skill.name}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 6,
                fontSize: 14,
              }}
            >
              <span>{skill.name}</span>
              <span style={{ opacity: 0.6 }}>{skill.level}%</span>
            </div>

            <div
              style={{
                height: 8,
                background: "rgba(255,255,255,0.12)",
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.9 }}
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(90deg, #6366f1, #22d3ee)",
                  boxShadow:
                    "0 0 10px rgba(99,102,241,0.6)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
