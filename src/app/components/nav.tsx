import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RX7 from '../../../public/assets/images/codigorx7_vector.png';
import * as nav from '../../styles/styles.css';
import WhatsApp from '../components/whatsapp';
import "../globals.css";

const Nav = () => {
  return (
    <nav>
      <div className='main_nav'>
          <Link href="/">
              <Image src={RX7} className={nav.logo} alt="O logotipo da Codigorx7, serviço de consultoria em cibersegurança e programação." style={{ width: '80px', height: 'auto', marginBottom: '-7px', marginTop: '-15px'}} />
          </Link>
        
        <div className={nav.navLinks}>
        <Link className={nav.navLink} href="/ciberseguranca">
          Consultoria em Cibersegurança
          </Link>
          <Link className={nav.navLink} href="/desenvolvimento">
          Desenvolvimento Web
          </Link>
          <Link className={nav.navLink} href="/portfolio">
          Portfólio
          </Link>
          
          
          
        </div>
        <div className={nav.animatedNotification}>
          <WhatsApp  />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

