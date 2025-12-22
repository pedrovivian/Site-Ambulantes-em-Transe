import '../index.css';
import BandLogo from '../assets/images/custom-logo.png';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
    const styles = {
        section: {
            height: '100vh',
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'transparent',
        },
        content: {
            textAlign: 'center',
            zIndex: 2,
            padding: '0 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        logo: {
            maxWidth: 'min(500px, 90vw)',
            // Logo is likely black lines, use as is for white bg
            marginBottom: '0.5rem',
            marginTop: '8rem',
            animation: 'fadeInUp 1s ease-out',
        },
        subtitle: {
            fontFamily: 'var(--f-sketch)',
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            color: 'var(--c-text)',
            marginBottom: '3rem',
            letterSpacing: '2px',
            animation: 'fadeInUp 1.2s ease-out',
        },
        arrow: {
            color: 'var(--c-text)',
            fontSize: '3rem',
            animation: 'bounce 2s infinite',
            cursor: 'pointer',
        },
        background: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            opacity: 0.1, // Lighter for white theme
            background: 'conic-gradient(from 0deg at 50% 50%, #ffffff 0%, #eeeeee 50%, #ffffff 100%)',
        }
    };

    return (
        <section id="hero" style={styles.section}>
            <div className="bg-animation"></div>
            <div style={styles.content}>
                <img src={BandLogo} alt="Ambulantes em Transe Logo" style={styles.logo} />
                <p style={styles.subtitle}>Nós somos os Ambulantes em Transe</p>
                <div style={styles.arrow}>
                    <FaChevronDown />
                </div>
            </div>
        </section>
    );
};

export default Hero;
