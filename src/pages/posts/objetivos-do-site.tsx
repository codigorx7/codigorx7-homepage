import React from 'react';
import Layout from '../../app/layout';
import * as styles from '../../styles/styles.css'
import Posts from '../../app/components/postsinfo';
import "../../app/globals.css";

const Post1 = () => {
  return (
    <Layout>
      <div className={styles.hero}>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.headerPost}>
            <span className={styles.metaPost}>24 Mar 2024 • 1 Minuto de leitura</span>
            <h1 className={styles.headerPostText}>🎯 Objetivos dos Sites</h1>
          </div>
          <h2 className={styles.heading}>E-commerce</h2>
          <p className={styles.paragraph}>
            Certifique-se de que seu site esteja devidamente posicionado para os mecanismos de busca e use inteligência artificial para responder eficientemente à intenção de pesquisa do comprador final.
            <br />
            <br />
            Se você tem um negócio de varejo, é aconselhável usar soluções padrão como Shopify e fazer sua configuração e implantação corretamente.
            <br />
            <br />
            Outras opções, como Medusa, muito mais personalizáveis e amigáveis para SEO, são muito boas. Ao implantar sua própria plataforma e personalizá-la, pode ser tentador querer ter controle total sobre todos os aspectos de sua iniciativa de varejo online. No entanto, é importante considerar o propósito de seu negócio.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Landing Page</h2>
          <p className={styles.paragraph}>
            Para criar uma landing page, concentre-se em capturar a atenção dos visitantes e motivá-los a agir. Impulsionar nas redes sociais é fundamental.
            <br />
            <br />
            Comunique claramente a oferta de valor e crie um senso de urgência com linguagem persuasiva e técnicas de storytelling. Coloque um call-to-action bem projetado de forma proeminente para orientar os visitantes em direção à ação desejada.
            <br />
            <br />
            Otimize a página de destino para dispositivos móveis e garanta tempos de carregamento rápidos.
          </p>
        </div>
        
        <div className={styles.section}>
          <h2 className={styles.heading}>E-learning</h2>
          <p className={styles.paragraph}>
            Se você tem uma plataforma de <b>e-learning</b>, concentre-se em fornecer uma experiência educacional intuitiva e envolvente para seus usuários, facilitando o acesso ao conteúdo e rastreando o progresso do aluno e recursos com Inteligência Artificial.
          </p>
        </div>
        <Posts />
      </div>
    </Layout>
  );
};

export default Post1;
