import { useState, useEffect } from "react";
import {
  Briefcase,
  Calendar,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- SLIDE ANIMATION ---------------- */
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

/* ---------------- MEDIA QUERY ---------------- */
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

export default function Experience() {
  const isMobile = useIsMobile();

  const experiences = [
    {
      company: "Bravura Technologies Pvt Ltd",
      role: "Software Development Engineer – L2",
      duration: "Feb 2023 – Present",
      points: [
        "Developed responsive and cross-browser compatible UIs using Angular and modern CSS.",
        "Built enterprise SPAs using Angular, RxJS, Ngx libraries, and Nebular.",
        "Integrated Google APIs and housing solutions.",
        "Optimized backend performance using DynamoDB and SQL.",
        "Designed and consumed RESTful APIs.",
        "Worked in Agile teams using Git.",
      ],
    },
    {
      company: "AvenData Technologies Pvt Ltd",
      role: "Full Stack Developer",
      duration: "Aug 2022 – Nov 2022",
      points: [
        "Debugged production issues using logs and client feedback.",
        "Improved reliability and response times.",
        "Created automation scripts.",
        "Handled SQL imports and transformations.",
        "Supported enterprise clients.",
      ],
    },
  ];

  const [[index, direction], setIndex] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const AUTOPLAY_DELAY = 5000;

  const paginate = (dir) => {
    setIndex(([prev]) => [
      (prev + dir + experiences.length) % experiences.length,
      dir,
    ]);
  };

  /* ---------------- AUTOPLAY ---------------- */
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => paginate(1), AUTOPLAY_DELAY);
    return () => clearTimeout(timer);
  }, [index, isPaused]);

  return (
    <section id="experience" style={{ padding: "140px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* ---------------- HEADER ---------------- */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div
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
              marginBottom: 16,
            }}
          >
            <Briefcase size={14} />
            EXPERIENCE
          </div>

          <h2 style={{ fontSize: "clamp(34px, 5vw, 56px)", fontWeight: 900 }}>
            Professional Journey
          </h2>
        </div>

        {/* ---------------- CAROUSEL ---------------- */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* LEFT ARROW – DESKTOP ONLY */}
          {!isMobile && <NavArrow left onClick={() => paginate(-1)} />}

          {/* CARD */}
          <div style={{ flex: 1, overflow: "hidden" }}>
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
                dragElastic={0.18}
                onDragStart={() => setIsPaused(true)}
                onDragEnd={(e, { offset }) => {
                  setIsPaused(false);
                  if (offset.x < -100) paginate(1);
                  if (offset.x > 100) paginate(-1);
                }}
                onHoverStart={() => !isMobile && setIsPaused(true)}
                onHoverEnd={() => !isMobile && setIsPaused(false)}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 24,
                  backdropFilter: "blur(20px)",
                  overflow: "hidden",
                }}
              >
                {/* COMPANY + DURATION */}
                <div
                  style={{
                    padding: 24,
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(34,211,238,0.25))",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontWeight: 800,
                      fontSize: 16,
                    }}
                  >
                    <Building2 size={18} />
                    {experiences[index].company}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 14,
                      opacity: 0.85,
                      marginTop: 8,
                    }}
                  >
                    <Calendar size={14} />
                    {experiences[index].duration}
                  </div>
                </div>

                {/* ROLE + POINTS */}
                <div style={{ padding: 28 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontWeight: 700,
                      fontSize: 18,
                      marginBottom: 20,
                    }}
                  >
                    <Briefcase size={18} />
                    {experiences[index].role}
                  </div>

                  <div style={{ display: "grid", gap: 14 }}>
                    {experiences[index].points.map((p, i) => (
                      <div key={i} style={{ display: "flex", gap: 12 }}>
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            marginTop: 8,
                            borderRadius: "50%",
                            background:
                              "linear-gradient(135deg, #6366f1, #22d3ee)",
                          }}
                        />
                        <p
                          style={{
                            fontSize: 15,
                            lineHeight: 1.6,
                            opacity: 0.85,
                          }}
                        >
                          {p}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT ARROW – DESKTOP ONLY */}
          {!isMobile && <NavArrow onClick={() => paginate(1)} />}
        </div>

        {/* ---------------- DOTS (MOBILE + DESKTOP) ---------------- */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 28,
          }}
        >
          {experiences.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
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
    </section>
  );
}

/* ---------------- NAV ARROW ---------------- */
function NavArrow({ left, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: "50%",
        padding: 12,
        cursor: "pointer",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {left ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}
