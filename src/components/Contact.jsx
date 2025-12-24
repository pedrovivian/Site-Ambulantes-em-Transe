import '../index.css';
import { FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

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

    const [state, handleSubmit] = useForm("xpqaeyyj");

    if (state.succeeded) {
        return (
            <section id="contact" style={styles.section}>
                <h2 className="text-gradient" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: '2rem' }}>OBRIGADO!</h2>
                <p style={{ color: '#000', fontSize: '1.2rem' }}>Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
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
    }

    return (
        <section id="contact" style={styles.section}>
            <h2 className="text-gradient" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: '2rem' }}>ENVIE-NOS UM E-MAIL
            </h2>
            <form style={styles.form} onSubmit={handleSubmit}>
                <input style={styles.input} type="email" name="email" id="email" placeholder="SEU E-MAIL" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: 'red', fontSize: '0.8rem', textAlign: 'left' }} />

                <textarea style={{ ...styles.input, minHeight: '150px' }} name="message" id="message" placeholder="CONTEÚDO DA MENSAGEM" required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} style={{ color: 'red', fontSize: '0.8rem', textAlign: 'left' }} />

                <button type="submit" className="btn" disabled={state.submitting}>
                    {state.submitting ? 'ENVIANDO...' : 'ENVIAR'}
                </button>
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
