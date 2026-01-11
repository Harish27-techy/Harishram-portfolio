import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";

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
                        <Send size={14} />
                        CONTACT
                    </div>

                    <h2
                        style={{
                            fontSize: "clamp(36px, 5vw, 56px)",
                            fontWeight: 900,
                        }}
                    >
                        Let’s Connect
                    </h2>
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
                    {contacts.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            title={item.label}
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
                                transition: "all 0.3s ease",
                                boxShadow: "0 0 0 rgba(0,0,0,0)",
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
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
