import { User, Briefcase, MapPin, Laptop, Mail } from "lucide-react";

export default function About() {
    const infoItems = [
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
            icon: <Laptop size={18} />,
        },
        {
            label: "Email",
            value: "harishramsanthanam4@gmail.com",
            icon: <Mail size={18} />,
        },
    ];

    return (
        <section id="about"
            style={{
                padding: "140px 24px",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {/* SECTION HEADER */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "80px",
                    }}
                >
                    <div
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
                    </div>

                    <h2
                        style={{
                            fontSize: "clamp(36px, 5vw, 56px)",
                            fontWeight: 900,
                        }}
                    >
                        Who I Am
                    </h2>
                </div>

                {/* CONTENT */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.2fr 1fr",
                        gap: "48px",
                    }}
                >
                    {/* LEFT DESCRIPTION */}
                    <div
                        style={{
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            borderRadius: "20px",
                            padding: "40px",
                            backdropFilter: "blur(20px)",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "18px",
                                lineHeight: 1.7,
                                color: "rgba(255,255,255,0.8)",
                            }}
                        >
                            I’m a <strong>Software Development Engineer – L2</strong> with
                            3+ years of experience in building scalable and high-performance
                            web applications using Angular, Node.js, and DynamoDB.
                            <br />
                            <br />
                            I enjoy solving real-world problems, optimizing performance,
                            and crafting clean, maintainable architectures while keeping
                            user experience at the center.
                        </p>
                    </div>

                    {/* RIGHT INFO CARDS */}
                    <div
                        style={{
                            display: "grid",
                            gap: "24px",
                        }}
                    >
                        {infoItems.map(({ label, value, icon }) => (
                            <div
                                key={label}
                                style={{
                                    background: "rgba(255,255,255,0.08)",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    borderRadius: "16px",
                                    padding: "22px 26px",
                                    backdropFilter: "blur(20px)",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "16px",
                                }}
                            >
                                {/* ICON */}
                                <div
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "12px",
                                        background: "rgba(255,255,255,0.12)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#22d3ee",
                                        flexShrink: 0,
                                    }}
                                >
                                    {icon}
                                </div>

                                {/* TEXT */}
                                <div>
                                    <div
                                        style={{
                                            fontSize: "12px",
                                            letterSpacing: "0.12em",
                                            color: "rgba(255,255,255,0.6)",
                                            marginBottom: "6px",
                                        }}
                                    >
                                        {label.toUpperCase()}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {value}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
