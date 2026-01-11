import {
    Award,
    BadgeCheck,
    Trophy,
    Calendar,
    Building2,
    Camera,
} from "lucide-react";

export default function Awards() {
    const awards = [
        {
            title: "STAR Award 2025 – Striving To Achieve Results",
            description:
                "Recognized for strong problem-solving skills, ownership, and delivery excellence.",
            organization: "Bravura Technologies Pvt Ltd",
            date: "Dec 2025",
            icon: "trophy",
        },
        {
            title: "Certificate of Appreciation – Bravura HOUSING Module",
            description:
                "Awarded for playing a key role in the successful implementation and launch of the HOUSING module.",
            organization: "Bravura Technologies Pvt Ltd",
            date: "Dec 2025",
            icon: "badge",
        },
        {
            title: "Best Photography – 2nd Prize",
            description:
                "Secured second place in the photography competition for creative excellence and visual storytelling.",
            organization: "Periyar Maniammai University",
            date: "Aug 2018",
            icon: "camera",
        },
    ];

    return (
        <section id="awards" style={{ padding: "140px 24px" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* SECTION HEADER */}
                <div style={{ textAlign: "center", marginBottom: "90px" }}>
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
                        <Award size={14} />
                        AWARDS & CERTIFICATIONS
                    </div>

                    <h2
                        style={{
                            fontSize: "clamp(36px, 5vw, 56px)",
                            fontWeight: 900,
                        }}
                    >
                        Recognition & Achievements
                    </h2>
                </div>

                {/* AWARDS GRID */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "40px",
                    }}
                >
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            style={{
                                background: "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                borderRadius: "20px",
                                padding: "36px",
                                backdropFilter: "blur(20px)",
                            }}
                        >
                            {/* ICON BADGE */}
                            <div
                                style={{
                                    width: "52px",
                                    height: "52px",
                                    borderRadius: "14px",
                                    background:
                                        "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(34,211,238,0.25))",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "22px",
                                }}
                            >
                                {award.icon === "trophy" && <Trophy size={22} />}
                                {award.icon === "badge" && <BadgeCheck size={22} />}
                                {award.icon === "camera" && <Camera size={22} />}
                            </div>

                            {/* TITLE */}
                            <h3
                                style={{
                                    fontSize: "18px",
                                    fontWeight: 800,
                                    marginBottom: "14px",
                                    lineHeight: 1.4,
                                }}
                            >
                                {award.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p
                                style={{
                                    fontSize: "15px",
                                    lineHeight: 1.6,
                                    color: "rgba(255,255,255,0.8)",
                                    marginBottom: "22px",
                                }}
                            >
                                {award.description}
                            </p>

                            {/* META INFO */}
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "18px",
                                    fontSize: "13px",
                                    color: "rgba(255,255,255,0.65)",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                    <Building2 size={14} />
                                    {award.organization}
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                    <Calendar size={14} />
                                    {award.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
