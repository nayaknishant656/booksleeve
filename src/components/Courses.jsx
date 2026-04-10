import React from 'react';
import { BookOpen, PenTool, User, Rocket, ChevronRight, Clock } from 'lucide-react';

const courses = [
    {
        title: "Creative Writing Fundamentals",
        desc: "Master the basics of storytelling and character development with our literary masters.",
        icon: <BookOpen size={24} />,
        level: "Beginner",
        duration: "8 Weeks Intensive",
        curriculum: ["Character Arc Construction", "World Building Mechanics", "Dialogue Authenticity"]
    },
    {
        title: "Non-Fiction Strategy",
        desc: "Transform your specialized expertise into a structured, highly compelling manuscript.",
        icon: <PenTool size={24} />,
        level: "Intermediate",
        duration: "10 Weeks Roadmap",
        curriculum: ["Research Methodology", "Structural Outlining", "Engagement Psychology"]
    },
    {
        title: "Ghostwriting Excellence",
        desc: "Master the high-demand art of writing in specific client voices with professional precision.",
        icon: <User size={24} />,
        level: "Advanced",
        duration: "12 Weeks Mastery",
        curriculum: ["Voice Mimicry Masterclass", "Collaborative Ethics", "Rapid Drafting Workflow"]
    },
    {
        title: "Publishing Roadmap",
        desc: "Strategic navigation through traditional query cycles and global self-publishing logistics.",
        icon: <Rocket size={24} />,
        level: "Professional",
        duration: "6 Weeks Strategic",
        curriculum: ["Market Analysis & Querying", "Royalty & Rights Management", "Launch Strategy"]
    }
];

const Courses = () => {
    return (
        <section id="courses" className="courses-section" style={{ background: '#f8f9fa' }}>
            <div className="premium-container">
                <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '20px' }}>Professional Writing Curriculum</h2>
                <p style={{ textAlign: 'center', color: '#666', marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px' }}>Elevate your craft with our intensive curriculum designed specifically for serious authors in the Indian market.</p>

                <div className="courses-grid">
                    {courses.map((course, idx) => (
                        <div key={idx} className="course-card">
                            <div className="course-info" style={{ padding: '40px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ background: '#fff5e6', padding: '10px', borderRadius: '12px', color: 'var(--primary)', display: 'flex' }}>
                                            {course.icon}
                                        </div>
                                        <h4 style={{ fontSize: '1.4rem', margin: 0 }}>{course.title}</h4>
                                    </div>
                                    <span className="course-level" style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', padding: '4px 10px', background: 'var(--primary)', color: 'white', borderRadius: '4px', whiteSpace: 'nowrap' }}>{course.level}</span>
                                </div>

                                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '25px', lineHeight: '1.6' }}>{course.desc}</p>

                                <div className="curriculum-box" style={{ background: '#fcfcfc', border: '1px solid #f0f0f0', padding: '20px', borderRadius: '15px', marginBottom: '25px' }}>
                                    <span style={{ fontSize: '0.75rem', fontWeight: '800', display: 'block', marginBottom: '15px', color: 'var(--accent)', letterSpacing: '1px' }}>COURSE MODULES</span>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {course.curriculum.map((item, i) => (
                                            <li key={i} style={{ fontSize: '0.9rem', color: '#444', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <ChevronRight size={14} color="var(--primary)" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid #eee' }}>
                                    <span style={{ fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <Clock size={16} /> {course.duration}
                                    </span>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '700', cursor: 'pointer', borderBottom: '2px solid var(--primary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        Detailed Syllabus <ChevronRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
