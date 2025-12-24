import '../index.css';
import BandLogo from '../assets/images/custom-logo.png';
import SpiralImage from '../assets/images/spiral.png';
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
            maxWidth: '500px',
            width: '80%',
            marginBottom: '0', // Moved margin to container
            marginTop: '0',
            animation: 'fadeInUp 1s ease-out',
            zIndex: 2,
        },
        logoContainer: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '500px',
            marginBottom: '0.5rem',
            marginTop: '8rem',
        },
        spiral: {
            position: 'absolute',
            width: '80%',
            marginBottom: '2rem',
            height: 'auto',
            zIndex: 1,
            opacity: 0.7,
        },

        subtitle: {
            fontFamily: 'var(--f-sketch)',
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            color: 'var(--c-text)',
            marginBottom: '2rem',
            marginTop: '3rem',
            letterSpacing: '2px',
            animation: 'fadeInUp 1.2s ease-out',
            maxWidth: '100%',
            padding: '0 1rem',
        },
        arrow: {
            color: 'var(--c-text)',
            fontSize: '3rem',
            animation: 'bounce 2s infinite',
            cursor: 'default',
        },
        background: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            opacity: 0.1,
            background: 'conic-gradient(from 0deg at 50% 50%, #ffffff 0%, #eeeeee 50%, #ffffff 100%)',
        }
    };


    return (
        <section id="hero" style={styles.section}>
            <div className="bg-animation"></div>
            <div style={styles.content}>
                <div className="logo-container" style={styles.logoContainer}>
                    <img src={SpiralImage} alt="" className="spiral-animated" style={styles.spiral} />
                    <img src={BandLogo} alt="Ambulantes em Transe Logo" className="logo-animated" style={styles.logo} />
                </div>
                <p style={styles.subtitle}>Nós somos os Ambulantes em Transe</p>
                <div style={styles.arrow}>
                    <FaChevronDown />
                </div>
            </div>
        </section>
    );
};

export default Hero;
