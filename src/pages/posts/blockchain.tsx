import React from 'react';
import Layout from '../../app/layout';
import * as styles from '../../styles/styles.css'
import Posts from '../../app/components/postsinfo';
import "../../app/globals.css";

const Post2 = () => {
return (
    <Layout>
      <div className={styles.hero}>
      </div>
          <div className={styles.content}>
            <div className={styles.section}>
              <div className={styles.headerPost}>
                <span className={styles.metaPost}>03 Abr 2024 • 1 Min leitura</span>
                <h1 className={styles.headerPostText}>👽 Permissão, transparência, descentralização. </h1>
              </div>
              <h2 className={styles.heading}>O que é um blockchain?</h2>
              <p className={styles.paragraph}>
              A fundação sobre a qual tudo o mais é construído é o blockchain, o elemento mais fundamental do sistema de criptomoedas.
              <br />
              <br />
              Na verdade, é bastante simples. O que é isso?
              <br />
              <br />
              Um grande livro-razão é o blockchain. grande banco de dados. Como qualquer outro banco de dados, ele retém dados. Qual é o maior depósito de informações do mundo? É a internet.
              <br />
              <br />
              Aplicações online são muitas. Aplicativos de mensagens, redes sociais, bancos, jogos, armazenamento de imagens, etc. Todos nós confiamos em bancos de dados centralizados desde o início da era da internet, e os utilizamos diariamente. Seus dados estão sob o controle exclusivo de uma organização se você usar o Facebook. O mesmo vale para qualquer outro aplicativo ou YouTube. Bancos incluídos.
              <br />
              <br />
              Cada pedaço de informação financeira que você possui depende de bancos de dados financeiros incrivelmente intrincados e ineficientes. Além disso, eles são centralizados, opacos e difíceis de integrar entre si.  
              <br />
              <br />
              <strong>O que é um blockchain?</strong> - É apenas um grande banco de dados na internet, mas não é o seu armazenamento típico. Não é propriedade de ninguém. Você é livre para usá-lo, juntar-se e expandir-se sobre ele. Basicamente, é apenas um espaço seguro onde você pode produzir o que quiser. Você também pode ter certeza de que todos os novos membros seguirão as mesmas regras. Decentralização é isso.
              <br />
              <br />
              Isso significa que você e seus clientes podem ter certeza de que sua rede nunca ficará indisponível devido a um bug se estiverem desenvolvendo um aplicativo de defi on-chain. Além disso, todos sabem que você não pode simplesmente pegar o dinheiro deles. Como a rede não é sua propriedade, o aplicativo é. E todos conhecem os usos e locais do dinheiro. Transparência é isso.
              <br />
              <br />
              Além disso, qualquer pessoa pode integrar seu programa sem autorização. uma vez que um banco de dados descentralizado público serve como sua base. Basta inserir sua comissão ou qualquer outra preferência. Você pode usar seu programa dentro de outro sem restrições. Isso não é autorizado.
              </p>
            </div>
            <Posts/>
        </div>
    </Layout>
  );
};

export default Post2;
