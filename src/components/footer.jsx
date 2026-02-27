import React from 'react';
import '../css/footer.css';
import "../index.css";
const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>Pawfect Stitch Co.</p>
                <p>Made with love and a whole lot of cat hair.</p>
                <p>&copy; <time>{new Date().getFullYear()}</time> Pawfect Stitch Co.</p>
            </div>
        </footer>
    );
};

export default Footer;
