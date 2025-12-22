import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../index.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const styles = {
        nav: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: scrolled ? '1rem 2rem' : '2rem',
            backgroundColor: scrolled ? 'var(--c-bg-translucent)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        },
        logo: {
            fontFamily: 'var(--f-heading)',
            fontSize: 'clamp(0.9rem, 4vw, 1.5rem)',
            fontWeight: '700',
            color: 'var(--c-text)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
        },
        menu: {
            display: 'flex',
            gap: '2rem',
        },
        item: {
            fontFamily: 'var(--f-body)',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: 'var(--c-text)',
            cursor: 'pointer',
        },
        hamburger: {
            fontSize: '2rem',
            cursor: 'pointer',
            color: 'var(--c-text)',
            zIndex: 1001,
        },
        mobileMenu: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'var(--c-bg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            zIndex: 999,
            padding: '2rem',
        },
        mobileItem: {
            fontFamily: 'var(--f-heading)',
            fontSize: '2rem',
            color: 'var(--c-text)',
            textTransform: 'uppercase',
            cursor: 'pointer',
        }
    };

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>Ambulantes <span style={{ color: 'var(--c-primary)' }}>Em </span>Transe </div>

            {/* Desktop Menu */}
            <ul style={styles.menu} className="desktop-only">
                <li style={styles.item} onClick={() => scrollToSection('hero')}>INÍCIO</li>
                <li style={styles.item} onClick={() => scrollToSection('about')}>SOBRE</li>
                <li style={styles.item} onClick={() => scrollToSection('music')}>MÚSICAS</li>
                <li style={styles.item} onClick={() => scrollToSection('contact')}>CONTATO</li>
            </ul>

            {/* Mobile Hamburger */}
            <div className="mobile-only" style={styles.hamburger} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div style={styles.mobileMenu}>
                    <div onClick={() => scrollToSection('hero')} style={styles.mobileItem}>INÍCIO</div>
                    <div onClick={() => scrollToSection('about')} style={styles.mobileItem}>SOBRE</div>
                    <div onClick={() => scrollToSection('music')} style={styles.mobileItem}>MÚSICAS</div>
                    <div onClick={() => scrollToSection('contact')} style={styles.mobileItem}>CONTATO</div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
