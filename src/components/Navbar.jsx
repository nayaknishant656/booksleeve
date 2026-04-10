import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Edit3 } from 'lucide-react';

const Navbar = ({ scrolled }) => {
    const navigate = useNavigate();

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="premium-container nav-content">
                <Link to="/" className="logo-text" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Edit3 size={28} color="var(--primary)" />
                    <span>Booksleeve India</span>
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <a href="#about">About</a>
                    <a href="#courses">Courses</a>
                    <a href="#pricing">Contracts</a>
                    <button className="btn btn-primary" onClick={() => navigate('/contract')}>Get Started</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
