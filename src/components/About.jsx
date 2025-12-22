import '../index.css';

const About = () => {
    const styles = {
        section: {
            padding: '4rem 1rem',
            backgroundColor: 'transparent',
            color: 'var(--c-text)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        container: {
            maxWidth: '800px',
            textAlign: 'center',
        },
        text: {
            fontSize: '1.5rem',
            lineHeight: '1.8',
            marginBottom: '2rem',
            color: 'var(--c-text)',
        }
    };

    return (
        <section id="about" style={styles.section}>
            <div style={styles.container}>
                <h2 className="text-gradient" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: '2rem' }}>QUEM SOMOS</h2>
                <p style={styles.text}>
                    Ambulantes em Transe é uma banda emo (eu acho) composta atualmente por 3 pessoas.
                    Surgiram em meados de 2025 e seguem fazendo música por ai, tendo em vista que são
                    totalmente independentes. Possuem o lançamento de um álbum contendo 10 faixas, onde 4 delas
                    já foram lançadas como single anteriormente.
                </p>
                <p style={styles.text}>
                    Contendo muitas referências da cena nacional do midwest emo independente e internacional de bandas antigas
                    já estabelecidas no mercado do rock, metal, emo e entre muitos outros gêneros.
                </p>
            </div>
        </section>
    );
};

export default About;
