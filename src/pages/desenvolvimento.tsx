  import React from 'react';
  import Layout from '../app/layout';
  import * as styles from '../styles/styles.css'

  const WebDevelopment = () => {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeUEbxnWcFygLqa9sB6dDYxdbealZmyr3_FETi3l3gNN2FT3w/viewform";
  
    const openFormInNewTab = () => {
      window.open(formUrl, "_blank");
    };
  
    return (
      <Layout>
        <div className={styles.hero}>
        </div>
            <div className={styles.content}>
            <div className={styles.section}>
                <h2 className={styles.heading}>Desenvolvemos seu site sob medida e com inteligência artificial</h2>
                <p className={styles.paragraph}>
                Você aprenderá ao longo do caminho, saberá como aplicar as soluções de SEO e entenderá melhor o mercado online do seu setor.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.heading}>I. Planejamento e design</h2>
                <p className={styles.paragraph}>Começamos discutindo suas metas e requisitos e, em seguida, crio wireframes e designs detalhados no Figma para mapear a estrutura e a aparência do seu site. Isso nos ajuda a entender sua ideia e a garantir que o design do site esteja alinhado com suas necessidades. <br/>— O resto flui a partir daí.
                </p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.heading}>II. Pesquisa e Otimização de SEO</h2>
                <p className={styles.paragraph}>Em seguida, vamos nos aprofundar no SEO, realizando pesquisas sobre o mercado, cliente-alvo e as melhores estratégias de otimização com base no seu perfil. A partir daí, vamos nos concentrar em refinar o conteúdo do seu site para melhorar sua visibilidade e classificação no Google.
                </p>
              </div>
              
              <div className={styles.section}>
                  <h2 className={styles.heading}>III. Desenvolvimento e Lançamento</h2>
                  <p className={styles.paragraph}>Por fim, desenvolvemos seu site e lhe damos funcionalidade, incorporando as estratégias e designs acordados. Configuramos o Google Analytics para monitorar o desempenho e lançamos o site com um relatório SEO detalhado. Isso garante um bom começo, com todas as ferramentas necessárias para ter uma presença sólida na internet.
                  </p>
              </div>
              <button className={styles.sharedButton} onClick={openFormInNewTab}>Entre em contato!</button>
              </div>
      </Layout>
    );
  };

  export default WebDevelopment;