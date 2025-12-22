import { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            fontSize: '1.5rem',
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
        }
    };

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>Ambulantes <span style={{ color: 'var(--c-primary)' }}>Em </span>Transe </div>
            <ul style={styles.menu}>
                <li style={styles.item} onClick={() => scrollToSection('hero')}>INÍCIO</li>
                <li style={styles.item} onClick={() => scrollToSection('about')}>SOBRE</li>
                <li style={styles.item} onClick={() => scrollToSection('music')}>MÚSICAS</li>
                <li style={styles.item} onClick={() => scrollToSection('contact')}>CONTATO</li>
            </ul>
        </nav>
    );
};

export default Navbar;
