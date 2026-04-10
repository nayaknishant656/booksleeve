import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Edit3, Menu, X } from 'lucide-react';

const Navbar = ({ scrolled }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleNavClick = (id) => {
        closeMenu();
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="premium-container nav-content">
                <Link to="/" className="logo-text" onClick={closeMenu} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Edit3 size={28} color="var(--primary)" />
                    <span>Booksleeve India</span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <a href="#about">About</a>
                    <a href="#courses">Courses</a>
                    <a href="#pricing">Contracts</a>
                    <button className="btn btn-primary" onClick={() => navigate('/contract')}>Get Started</button>
                </div>

                {/* Mobile Toggle */}
                <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Side Mobile Navigation */}
                <div className={`nav-drawer ${isMenuOpen ? 'open' : ''}`}>
                    <div className="drawer-header">
                        <span className="logo-text">Menu</span>
                        <button className="close-drawer" onClick={closeMenu}><X size={28} /></button>
                    </div>
                    <div className="drawer-links">
                        <Link to="/" onClick={closeMenu}>Home</Link>
                        <a href="#about" onClick={() => handleNavClick('about')}>About Us</a>
                        <a href="#courses" onClick={() => handleNavClick('courses')}>Our Courses</a>
                        <a href="#pricing" onClick={() => handleNavClick('pricing')}>Contracts</a>
                        <button className="btn btn-primary" onClick={() => { navigate('/contract'); closeMenu(); }} style={{ marginTop: '20px' }}>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Backdrop overlay */}
                {isMenuOpen && <div className="nav-backdrop" onClick={closeMenu}></div>}
            </div>
        </nav>
    );
};

export default Navbar;
