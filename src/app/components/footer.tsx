import React from 'react';
import Link from 'next/link';
import * as styles from '../../styles/styles.css';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineFacebook} from "react-icons/ai";

const footer = () => {

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('E-mail copiado!');
  };


  return (
    <>
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerText}>
        Simplifique <br />Descomplique
        </div>
        <div className={styles.footerMenu}>
          <ul className={styles.navLinks}>
            <li className={styles.navLink}><Link href="/ciberseguranca">Consultoria em Cibersegurança</Link></li>
            <li className={styles.navLink}><Link href="desenvolvimento">Desenvolvimento Web</Link></li>
            <li className={styles.navLink}><Link href="/portfolio">Portfolio</Link></li>
            <li className={styles.navLink}><Link href="/sobre-nos">Sobre nos</Link></li>
           <li className={styles.navLink} onClick={() => copyToClipboard('codigorx7@gmail.com')} style={{ cursor: 'pointer' }}>Contato</li>
          </ul>
        </div>
        <div className={styles.footerLinks}>
        <ul>
          {/* <li>
             <a href="https://github.com/codigorx7" target="_blank" rel="noopener">               
            <AiOutlineGithub className={styles.footerIcons} />
            </a>
            </li> */}
            <li>
            <a href="https://facebook.com/codigorx7" target="_blank" rel="noopener">
              <AiOutlineFacebook className={styles.footerIcons} />
            </a>
            </li>

            <li>
            <a href="https://instagram.com/codigorx7" target="_blank"  rel="noopener" >
              <AiOutlineInstagram className={styles.footerIcons} />
            </a>
            </li>
            </ul>
        </div>
      </div>
    </div>
    <div className={styles.footerRights}>
        <div>
          2024 © Codigo RX7
          <br/>
          Todos os direitos reservados.
          </div>
      </div>
    </>
  );
};

export default footer;