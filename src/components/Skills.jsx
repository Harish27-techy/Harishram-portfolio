import { Code2 } from "lucide-react";

export default function Skills() {
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

    return (
        <section id="skills" style={{ padding: "140px 24px" }}>
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
                        <Code2 size={14} />
                        SKILLS
                    </div>

                    <h2
                        style={{
                            fontSize: "clamp(36px, 5vw, 56px)",
                            fontWeight: 900,
                        }}
                    >
                        Technical Expertise
                    </h2>
                </div>

                {/* SKILL GROUPS */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "32px",
                    }}
                >
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            style={{
                                background: "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                borderRadius: "20px",
                                padding: "32px",
                                backdropFilter: "blur(20px)",
                            }}
                        >
                            {/* GROUP TITLE */}
                            <h3
                                style={{
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    marginBottom: "26px",
                                }}
                            >
                                {group.title}
                            </h3>

                            {/* SKILLS */}
                            <div style={{ display: "grid", gap: "18px" }}>
                                {group.skills.map((skill) => (
                                    <div key={skill.name}>
                                        {/* LABEL */}
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                marginBottom: "6px",
                                                fontSize: "14px",
                                            }}
                                        >
                                            <span>{skill.name}</span>
                                            <span style={{ color: "rgba(255,255,255,0.6)" }}>
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* BAR */}
                                        <div
                                            style={{
                                                height: "8px",
                                                background: "rgba(255,255,255,0.12)",
                                                borderRadius: "999px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: `${skill.level}%`,
                                                    height: "100%",
                                                    borderRadius: "999px",
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
