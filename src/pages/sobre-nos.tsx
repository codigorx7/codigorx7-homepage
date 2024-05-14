import React from 'react';
import Image from 'next/image';
import Layout from '../app/layout';
import * as styles from '../styles/styles.css'
import Mountain from '../../public/assets/images/mountain.png'

const About = () => {

    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      alert('E-mail copiado!'); 
    };

  return (
    <Layout>
      <div className={styles.hero}></div>
      <div className={styles.content}>
        <div className={styles.profileContainer}>
          <Image src={Mountain} alt="Montanha com um caminho para o topo" className={styles.profileImage} />
          <div className={styles.textAbout}>
            <h2 className={styles.heading}>CODIGORX7</h2>
            <p className={styles.paragraph}>
            <b>Nossa missão</b> é a transparência e nos colocarmos no seu lugar. Fazer de conta que o negócio deles é como se fosse o nosso, para o qual vamos criar um site ou aplicar estratégias de segurança cibernética para nós mesmos. 
            <br />
            <br />
            Transparência, trabalho, paciência e persistência. <b>Esses são os nossos valores.</b>
            <br/>
            <br/>
            Não estamos buscando quantidade de clientes, mas qualidade, e se Deus quiser, relacionamentos de longo prazo.
            </p>
            <div className={styles.aboutButtons}>
            
            <p className={styles.emailLink} onClick={() => copyToClipboard('codigorx7@gmail.com')} style={{ cursor: 'pointer' }}>
              codigorx7@gmail.com
            </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;