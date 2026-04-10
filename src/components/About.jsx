import React from 'react';
import aboutImage from '../assets/about-image.png';
import { ShieldCheck, Lock, CreditCard, UserCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="premium-container about-grid">
                <div className="about-image animate-fade">
                    <img src={aboutImage} alt="Premium Writing Setup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="about-content animate-fade">
                    <h2>Our Legacy of Trust</h2>
                    <p>Booksleeve India is a premier literary agency dedicated to preserving the rich narrative heritage of India. Our team of seasoned writers, editors, and publishing consultants work tirelessly to ensure your voice is heard across the globe.</p>

                    <div className="founder-note" style={{ marginTop: '30px', padding: '20px', borderLeft: '4px solid var(--primary)', background: '#fff9f2' }}>
                        <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>"Our mission is to ensure that every Indian story is written with the dignity and professional excellence it deserves. We don't just write books; we build legacies."</p>
                        <strong>Founder, Booksleeve India</strong>
                    </div>

                    <div className="trust-points" style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                            <Lock size={18} color="var(--primary)" /> 100% Confidentiality
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                            <ShieldCheck size={18} color="var(--primary)" /> Legal Protection
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                            <CreditCard size={18} color="var(--primary)" /> Secure Payments
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                            <UserCheck size={18} color="var(--primary)" /> Verified Experts
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
