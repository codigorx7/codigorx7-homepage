import React, { useState } from 'react';
import * as styles from '../styles/styles.css';
import "../app/globals.css";
import Link from 'next/link';
import Card from '../app/components/cardinfo';
import Layout from '../app/layout';
import { CSSTransition } from 'react-transition-group';

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const [showPorque, setPorque] = useState(false);

  setTimeout(() => {
    setShowContent(true);
  }, 2000);

  setTimeout(() => {
    setPorque(true);
  }, 1000);

  return (
    <>
      <Layout>
        <div className={styles.hero}>
          <div className={styles.content}>
            <div className={styles.section}>
              <p className={styles.paragraph}>
              Toda empresa séria deve ter um site.
             
              <strong> Por quê?</strong>
              </p>
            </div>
              <div>
                <div className={styles.section}>
                  <h3 className={styles.heading}>Credibilidade</h3>
                  <ul className={styles.list}>
                    <li>- Destaque-se de seus competidores.</li>
                    <li>- Cause uma ótima primeira impressão.</li>
                  </ul>
                </div>
                <div className={styles.section}>
                  <h3 className={styles.heading}>Marca</h3>
                  <ul className={styles.list}>
                  <li>- Encontre facilmente informações sobre sua empresa que demonstrem qualidade e criem confiança.</li>
                  </ul>
                </div>
                <div className={styles.section}>
                  <h3 className={styles.heading}>Leads</h3>
                  <ul className={styles.list}>
                    <li>- Exiba claramente as informações de contato e garanta um retorno sobre o investimento (ROI) positivo.</li>
                  </ul>
                </div>
                <div className={styles.section}>
                  <h3 className={styles.heading}>Tráfego orgânico</h3>
                  <ul className={styles.list}>
                    <li>- Oportunidade de aparecer nos resultados de pesquisa do Google.</li>
                    <li>- Aumentar sua base de clientes.</li>
                  </ul>
                </div>
                <div className={styles.section}>
                  <h3 className={styles.heading}>Marketing digital</h3>
                  <ul className={styles.list}>
                  <li>- Direcionar o tráfego para um site ou site de vendas</li>
                  <li>- Use dados de tráfego passados para segmentar clientes qualificados de forma eficaz.</li>
                  <li>- Busque o melhor retorno sobre o investimento para seus gastos com publicidade (ROI)</li>
                  </ul>
                </div>
                <div className={styles.section}>
                  <h3 className={styles.heading}>Economia de tempo + Atendimento ao cliente</h3>
                  <ul className={styles.list}>
                  <li>- Aumente a produtividade interna e entregue aos clientes informações úteis sem a necessidade de telefonar, melhorando a experiência do usuário</li>
                  <li></li>
                  <li></li>
                  </ul>
                </div>
                <div className={styles.section}>
                  <p className={styles.paragraph}>
                    <strong>Fonte:</strong>{' '}
                    <a className={styles.link}
                      href="https://www.forbes.com/sites/forbesagencycouncil/2022/05/11/why-every-business-needs-a-website/?sh=6e8a42c65c3d"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    Why Every Business Needs A Website — Forbes
                    </a>
                  </p>
                </div>
                <Link href="/desenvolvimento">
                <button className={styles.sharedButton}>Adquirir agora!</button>
                </Link>
              </div>
          </div>
        </div>
        <Card />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const isClient = false;
  return { props: { isClient } };
}

export default Index;