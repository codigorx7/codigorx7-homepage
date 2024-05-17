import React from 'react';
import Image from 'next/image';
import Layout from '../app/layout';
import * as styles from '../styles/styles.css';
import Ciberseguranca from '../../public/assets/images/ciberseguranca.jpg';

const features = {
  essencial: [
    {
      text: 'Manual de Defesa Digital (PDF)',
    },
    {
      text: 'Capacitação prática do início ao fim do serviço.',
    },
    {
      text: 'Otimização de senhas.',
    },
    {
      text: 'Otimização de perfis de redes sociais.',
    },
    {
      text: 'Execução de estratégias de prevenção para e-mails.',
    },
  ],
  completo: [
    {
      text: <b>Serviço Essencial incluido.</b>,
    },
    {
      text: 'Configuração e otimização remota do seu sistema operacional (Windows ou Linux) e dispositivos.',
    },
    {
      text: '2 semanas de consultas ilimitadas no horário comercial',
    },
    {
      text: 'Minimização de riscos e proteção de dados pessoais.',
    },
  ],
};

interface PricingCardProps {
  title: string;
  price: string;
  featuresList: { text: string | JSX.Element }[];
  oldPrice?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, featuresList, oldPrice }) => {
  return (
    <div className={styles.pricingCard}>
      <h2 className={styles.pricingCardTitle}>{title}</h2>
      <ul className={styles.pricingCardFeatures}>
        {featuresList &&
          featuresList.map((feature, index) => (
            <li key={index} className={styles.pricingCardFeature}>
              {feature.text}
            </li>
          ))}
      </ul>
      <div className={styles.priceContainer}>
        <p className={styles.pricingCardPrice}>{price}</p>
        {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
      </div>
      <a href="https://wa.me/5538992582682" target="_blank" rel="noopener noreferrer" className={styles.pricingCardButton}>Obtenha proteção agora!</a>
    </div>
  );
};

const CibersecurityConsulting = () => {
  
  return (
    <Layout>
      <div className={styles.hero}></div>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.heading}>Hoje em dia, grande parte de nossas atividades acontece digitalmente.</h2>
          <p className={styles.paragraph}>
            <b>Isso nos traz muita comodidade.</b> Também alguns riscos para nossa segurança na vida real.
            <br />
            <br />
            <a href="#exemplos-vida-real" className={styles.sharedButton}>Quais são os riscos?</a>
            <br />
            <br />
              <b>Você aprenderá durante o processo e receberá um manual prático para gerenciar sua defesa digital.</b>
            <br />
            Com base nas melhores fontes de informação, muitas horas de tentativa e erro e treinamento acadêmico.
          </p>
        </div>
        <div className={styles.section}>
        <Image src={Ciberseguranca} alt="Consultoria em Ciberseguraca" className={styles.img} />
        <div className={styles.pricingCardContainer}>
          <PricingCard title="Serviço Essencial" price="129R$" featuresList={features.essencial} oldPrice="150R$" />
          <PricingCard title="Serviço Completo" price="249R$" featuresList={features.completo} oldPrice="270R$" />
        </div>
        <div className={styles.section} id="exemplos-vida-real">
          </div>
      </div>


        <div className={styles.section} >
          <h2 className={styles.heading}>Situações cotidianas da vida real</h2>
          <h2 className={styles.heading}>Autenticação</h2>
          <p className={styles.paragraph}>
            Protegendo as credenciais de login de sua conta on-line.
            <br />
            <br />
            <i>
              Teresa usa a mesma senha para todas as suas contas on-line. Um dos sites que ela visita com frequência sofre uma <b>data breach</b>, expondo milhões de dados, inclusive nomes de usuário e senhas. Os invasores obtêm acesso à senha dela. Como Teresa reutiliza a mesma senha em todos os lugares, agora eles correm o risco de acessar seus e-mails, mídias sociais e contas bancárias.
            </i>
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Navegação na Web</h2>
          <p className={styles.paragraph}>
            Evitar o rastreamento e a coleta de dados on-line.
            <br />
            <br />
            <i>
              Pedro usa as configurações padrão de seu navegador sem se preocupar em configurar a privacidade ou limpar regularmente seu histórico. Como resultado, os cookies de rastreamento se acumulam, registrando sua atividade on-line. Um invasor consegue acessar seu navegador e roubar os cookies, permitindo que ele tenha acesso a todos os seus dados, contas e senhas.
            </i>
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Estratégia de e-mail</h2>
          <p className={styles.paragraph}>
            Protegendo o portão de entrada para suas contas on-line.
            <br />
            <br />
            <i>
              Para todas as suas contas, Luis usa o mesmo endereço de e-mail. Um grupo de hackers acessa um banco de dados de senhas vazado que inclui o endereço de e-mail de Luis. Em seguida, eles tentam acessar as contas de Luis em diferentes serviços on-line usando técnicas de força bruta e ataques de preenchimento de credenciais.
            </i>
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Redes</h2>
          <p className={styles.paragraph}>
            Proteção do tráfego de rede do roteador.
            <br />
            <br />
            <i>
              Maria usa uma senha fraca para o Wi-Fi de sua casa. Um hacker da vizinhança usa força bruta e consegue decifrar a senha em pouco tempo, obtendo acesso ao Wi-Fi de Maria. O invasor tira proveito de todos os dispositivos conectados à rede, podendo monitorar tudo o que acontece neles.
            </i>
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Dispositivos móveis</h2>
          <p className={styles.paragraph}>
            Reduza as ameaças aos seus dispositivos diários.
            <br />
            <br />
            <i>
              Marcelo recebe um e-mail falso de seu provedor de serviços móveis, solicitando a atualização de suas informações. Ele fornece seus dados. O e-mail era uma tentativa de <b>phishing.</b> Os invasores usam isso para alterar o SIM do celular dele e acessar suas contas. Marcelo descobre o problema quando não consegue fazer login e percebe que sofreu um ataque de <b>SIM-swap.</b>
            </i>
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.heading}>Dispositivos de computador</h2>
          <p className={styles.paragraph}>
            Proteger o sistema operacional, os dados e a atividade do seu PC.
            <br />
            <br />
            <i>
              Camila ignora as atualizações de segurança em seu sistema operacional e aplicativos. Ela também pode ter sido vítima de phishing ou ter configurações de rede e segurança fracas. Como resultado, seu computador é infectado por <b>ransomware</b> que criptografa seus arquivos importantes e exige dinheiro para recuperá-los.
            </i>
          </p>
              </div>

              <div className={styles.section}>
                  <h2 className={styles.heading}>Aspectos humanos</h2>
                  <p className={styles.paragraph}>Evitar riscos de segurança de engenharia social.
                  <br />
                  <br />
                  <i>Fernando recebe um e-mail alarmante que parece ser de seu banco, indicando que sua conta foi comprometida e exige ação imediata. Ele faz download de um PDF do e-mail, sem saber que o PDF foi infectado, e o invasor tem acesso total ao seu dispositivo.
                  </i>
                  <br />
                  <br />
                  <i>Juliana, uma influenciadora de mídia social, sofre roubo de identidade por hackers asiáticos e há negócios questionáveis em seu nome em países estrangeiros, sua reputação é afetada por fraudes que não foram cometidas por ela.
                  </i>
                  </p>
              </div>
              
          </div>
      </Layout>
  );
};

export default CibersecurityConsulting;