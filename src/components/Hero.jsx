import { Download, Mail, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";
import resumePdf from "../assets/HarishramResume.pdf";

export default function Hero() {
    const scrollToContact = () => {
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            style={{
                padding: "160px 0 120px",
            }}
        >
            <div className="container hero-grid">
                {/* IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.4, y: 140 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 1.3,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            width: "300px",
                            height: "300px",
                            borderRadius: "50%",
                            background:
                                "linear-gradient(135deg, rgba(99,102,241,0.35), rgba(34,211,238,0.35))",
                            padding: "8px",
                        }}
                    >
                        <img
                            src={profileImg}
                            alt="Harishram"
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </motion.div>

                {/* CONTENT */}
                <div>
                    <motion.h4
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        style={{
                            fontSize: "clamp(22px, 4vw, 42px)",
                            fontWeight: 400,
                            marginBottom: "12px",
                        }}
                    >
                        HI, I’M
                    </motion.h4>

                    <motion.h1
                        initial={{ opacity: 0, y: 80, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            delay: 0.35,
                            duration: 1,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{
                            fontSize: "clamp(42px, 6vw, 72px)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            marginBottom: "16px",
                        }}
                    >
                        Harishram{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(135deg, #6366f1, #22d3ee)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            S
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55, duration: 0.8 }}
                        whileHover={{ y: -4, scale: 1.03 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "12px 22px",
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.06)",
                            backdropFilter: "blur(14px)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            boxShadow:
                                "0 10px 40px rgba(99,102,241,0.25), inset 0 0 0 1px rgba(255,255,255,0.08)",
                            color: "#fff",
                            fontSize: "16px",
                            fontWeight: 600,
                            marginBottom: "28px",
                        }}
                    >
                        {/* ICON */}
                        <span
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "38px",
                                height: "38px",
                                borderRadius: "50%",
                                background:
                                    "linear-gradient(135deg, #6366f1, #22d3ee)",
                                boxShadow: "0 0 18px rgba(99,102,241,0.6)",
                            }}
                        >
                            <Laptop size={18} />
                        </span>

                        {/* TEXT */}
                        <span
                            style={{
                                background:
                                    "linear-gradient(135deg, #e0e7ff, #67e8f9)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Software Development Engineer – L2
                        </span>
                    </motion.div>


                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75, duration: 0.8 }}
                        style={{
                            fontSize: "17px",
                            lineHeight: 1.7,
                            color: "rgba(255,255,255,0.75)",
                            maxWidth: "520px",
                            marginBottom: "36px",
                        }}
                    >
                        Results-driven Software Engineer with 3+ years of experience
                        building scalable, high-performance web applications using
                        Angular, Node.js, and cloud technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.95, duration: 0.8 }}
                        style={{
                            display: "flex",
                            gap: "20px",
                            flexWrap: "wrap",
                        }}
                    >
                        <motion.a
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            href={resumePdf}
                            download
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "14px 28px",
                                borderRadius: "999px",
                                background:
                                    "linear-gradient(135deg, #6366f1, #22d3ee)",
                                color: "#fff",
                                fontWeight: 700,
                                textDecoration: "none",
                            }}
                        >
                            <Download size={18} />
                            Download Resume
                        </motion.a>

                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToContact}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "14px 28px",
                                borderRadius: "999px",
                                background: "transparent",
                                border: "1px solid rgba(255,255,255,0.4)",
                                color: "#fff",
                                fontWeight: 600,
                                cursor: "pointer",
                            }}
                        >
                            <Mail size={18} />
                            Contact Me
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
