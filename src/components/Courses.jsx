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
                            <div className="course-card-body">
                                <div className="course-top">
                                    <div className="course-title-group">
                                        <div className="course-icon-box">
                                            {course.icon}
                                        </div>
                                        <h4 className="course-title">{course.title}</h4>
                                    </div>
                                    <span className="course-level-badge">{course.level}</span>
                                </div>

                                <p className="course-description">{course.desc}</p>

                                <div className="curriculum-box">
                                    <span className="curriculum-label">COURSE MODULES</span>
                                    <ul className="curriculum-list">
                                        {course.curriculum.map((item, i) => (
                                            <li key={i} className="curriculum-item">
                                                <ChevronRight size={14} color="var(--primary)" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="course-footer">
                                    <span className="course-duration">
                                        <Clock size={16} /> {course.duration}
                                    </span>
                                    <span className="course-cta">
                                        Syllabus <ChevronRight size={14} />
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
