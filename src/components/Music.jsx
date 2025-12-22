import '../index.css';
import AlbumCover from '../assets/images/album-cover.jpg';

const Music = () => {
    const styles = {
        section: {
            padding: '4rem 1rem',
            background: 'transparent',
        },
        grid: {
            display: 'flex', /* Centering single item */
            justifyContent: 'center',
            gap: '2rem',
            maxWidth: 'var(--s-container)',
            margin: '0 auto',
        },
        card: {
            background: '#ffffff',
            padding: '2rem',
            borderRadius: '12px',
            border: '2px solid #000', /* Sketchy border */
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            boxShadow: '4px 4px 0px rgba(0,0,0,0.1)',
            maxWidth: 'min(400px, 100%)',
            width: '100%',
        },
        albumTitle: {
            fontSize: '1.5rem',
            marginTop: '1rem',
            fontFamily: 'var(--f-heading)',
            color: '#000',
        },
        cover: {
            width: '100%',
            aspectRatio: '1',
            objectFit: 'cover',
            borderRadius: '4px',
            marginBottom: '1rem',
            border: '1px solid #eee',
        }
    };

    const tracks = [
        { title: "Como Se o Mundo Fosse um Quarto Imenso", type: "Album", year: "2025", cover: AlbumCover },
    ];

    return (
        <section id="music" style={styles.section}>
            <h2 className="text-gradient" style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: '3rem' }}>ÚLTIMO LANÇAMENTO</h2>
            <div style={styles.grid}>
                {tracks.map((track, i) => (
                    <div key={i} style={styles.card} className="music-card">
                        <img src={track.cover} alt={track.title} style={styles.cover} />
                        <h3 style={styles.albumTitle}>{track.title}</h3>
                        <p style={{ color: 'var(--c-accent)', margin: '0.5rem 0' }}>{track.type} // {track.year}</p>
                        <a href="https://open.spotify.com/intl-pt/album/5TD7spNO1E1oG0hYzZuMS8?si=njBmkwQQQPyMjR-xVZ0Jew" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginTop: '1rem', fontSize: '0.8rem', display: 'inline-block', textDecoration: 'none' }}>OUÇA AGORA</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Music;
