import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Award, Shield, Globe, FileText, Users, Zap, TrendingUp, UserPlus } from 'lucide-react';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="premium-container hero-grid">
                <div className="hero-content animate-fade">
                    <h1 className="hero-title">Your Story, <br />Our Craft.</h1>
                    <p className="hero-subtitle">
                        Professional book writing contracts tailored for Indian authors.
                        Take your manuscript from concept to reality with our elite team.
                    </p>
                    <div className="hero-buttons">
                        <a href="#pricing" className="btn btn-primary">View Contracts</a>
                        <button className="btn btn-secondary" style={{ marginLeft: '15px' }} onClick={() => navigate('/contract')}>Hire Experts</button>
                    </div>
                </div>

                <div className="trust-banner">
                    <div className="premium-container trust-content">
                        <div className="trust-item"><Award size={18} /> ISO Certified</div>
                        <div className="trust-item"><Shield size={18} /> MSME Registered</div>
                        <div className="trust-item"><Zap size={18} /> SSL Secured</div>
                        <div className="trust-item"><Globe size={18} /> Digital India</div>
                    </div>
                </div>

                <Stats />
            </div>
        </section>
    );
};

export const Stats = () => {
    const statsData = [
        { label: "Contracts Given", value: "12,548", growth: "+8.2%", icon: <FileText size={32} /> },
        { label: "User Acquisitions", value: "4,620", growth: "+21.4%", icon: <UserPlus size={32} /> },
        { label: "Elite Writers", value: "450+", growth: "+5.1%", icon: <Users size={32} /> },
        { label: "Contracts Taken", value: "8,920", growth: "+14.7%", icon: <TrendingUp size={32} /> }
    ];

    return (
        <div className="stats-grid animate-fade">
            {statsData.map((stat, idx) => (
                <div key={idx} className="stat-card">
                    <div style={{ color: 'var(--primary)', marginBottom: '15px' }}>{stat.icon}</div>
                    <span className="stat-number">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                    <div className="growth-indicator">
                        <TrendingUp size={12} /> {stat.growth} <span>last 15 days</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Hero;
