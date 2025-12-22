import '../index.css';
import { FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';

const Contact = () => {
    const styles = {
        section: {
            padding: '4rem 1rem',
            backgroundColor: '#f9f9f9', /* Slightly off-white for footer area */
            textAlign: 'center',
            borderTop: '2px solid #000',
        },
        form: {
            maxWidth: 'min(500px, 100%)',
            margin: '0 auto 3rem auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        },
        input: {
            padding: '1rem',
            background: '#fff',
            border: '2px solid #000',
            color: '#000',
            fontFamily: 'var(--f-body)',
            fontSize: '1rem',
            borderRadius: '4px',
            width: '100%',
        },
        footer: {
            marginTop: '4rem',
            color: '#000',
            fontSize: '0.9rem',
        }
    };

    return (
        <section id="contact" style={styles.section}>
            <h2 className="text-gradient" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: '2rem' }}>ENVIE NOS UM E-MAIL
            </h2>
            <form style={styles.form} action="mailto:ambulantesemtranseofc@gmail.com" method="POST" encType="text/plain">
                <input style={styles.input} type="email" name="email" placeholder="SEU E-MAIL" required />
                <textarea style={{ ...styles.input, minHeight: '150px' }} name="mensagem" placeholder="CONTEÚDO DA MENSAGEM" required></textarea>
                <button type="submit" className="btn">ENVIAR</button>
            </form>

            <div style={styles.footer}>
                <p>&copy; {new Date().getFullYear()} AMBULANTES EM TRANSE. TODOS OS DIREITOS RESERVADOS.</p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '2rem', justifyContent: 'center', fontSize: '2rem' }}>
                    <a href="https://www.instagram.com/ambulantesemtranseofc/" style={{ color: '#000', transition: 'color 0.3s' }} className="social-icon">
                        <FaInstagram />
                    </a>
                    <a href="https://open.spotify.com/intl-pt/artist/0jOYDCsR3dTxUG4s3Oh6LH?si=BqucgG32Q76FTUfTxrMlgg" style={{ color: '#000', transition: 'color 0.3s' }} className="social-icon">
                        <FaSpotify />
                    </a>
                    <a href="https://www.youtube.com/@AmbulantesemTranse" style={{ color: '#000', transition: 'color 0.3s' }} className="social-icon">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
