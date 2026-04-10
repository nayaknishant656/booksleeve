import React from 'react';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="premium-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2>Booksleeve India</h2>
                        <p>Crafting literary legacies for the next generation of Indian authors.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 Booksleeve India. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
