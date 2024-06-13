import React from 'react';
import Image from 'next/image';
import Layout from '../app/layout';
import * as styles from '../styles/styles.css'
import { AiOutlineArrowRight, AiOutlineCoffee } from "react-icons/ai";
import MoraEmbalagens from  '../../public/assets/images/works/moraembalagens.ico';
import Tremunda from '../../public/assets/images/works/tremunda.ico';
import VosEnglish from '../../public/assets/images/works/vosenglish.ico';


const Portfolio = () => {
  return (
    <Layout>
      <div className={styles.hero}>
      </div>
          <div className={styles.content}>
          <div className={styles.section}>
              <div className={styles.workImage}>
                <Image src={MoraEmbalagens} alt="Logo of Mora Embalagens, a Brazilian manufacturer of plastic and paper bags." className={styles.image} />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.heading}>Mora Embalagens</h2>
                <div className={styles.techButtonContainer}>
                  <button className={styles.techButton}>NextJS</button>
                  <button className={styles.techButton}>Tailwind CSS</button>
                  <button className={styles.techButton}>Supabase</button>
                  <button className={styles.techButton}>Fabric JS</button>
                </div>
                <p className={styles.paragraph}>Mora Embalagens é uma plataforma desenvolvida com Next.js e estilizada com Tailwind CSS, focada na personalização de sacos de plástico e de papel. Utiliza Supabase para gerir os dados e Fabric JS para visualizar antes da produção e devolve o design listo para produção. Oferece uma interface intuitiva para criar e personalizar sacos de acordo com as necessidades de design dos clientes.</p>
                <a href="https://mora-embalagens.vercel.app/" target="_blank" className={styles.link}>Visitar o site <AiOutlineArrowRight /></a>
              </div>
            </div>


          <div className={styles.section}>
              <div className={styles.workImage}>
                <Image src={Tremunda} alt="Tremunda's personal brand logo and website" className={styles.image} />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.heading}>Tremunda</h2>
                <div className={styles.techButtonContainer}>
                  <button className={styles.techButton}>NextJS</button>
                  <button className={styles.techButton}>ChakraUI</button>
                  <button className={styles.techButton}>Google Cloud</button>
                </div>
                <p className={styles.paragraph}>O site da Tremunda é uma landing page que se destaca pelo seu conteúdo transacional e informativo sobre o mundo esotérico. Foi criada do zero a funcionalidade de "conhecer sua fortuna" por meio de um mecanismo de cartas do tarô, integrando-se com o Calendly para agendamento de consultas e contando com um blog e um e-commerce baseado no Payhip.</p>
                <a href="https://tremunda.com" target="_blank" className={styles.link}>Visitar o site <AiOutlineArrowRight /></a>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.workImage}>
                <Image src={VosEnglish} alt="The logo of the free English learning space VosEnglish and paid ZOOM classes" className={styles.image} />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.heading}>Vos English</h2>
                <p className={styles.paragraph}>Plataforma de e-learning para o ensino da língua inglesa com recursos completos e gratuitos e acompanhamento do progresso do aluno.</p>
                <a className={styles.working}>Trabalhando <AiOutlineCoffee /></a>
              </div>
            </div>

          
          </div>
            
        
    </Layout>
  );
};

export default Portfolio;

