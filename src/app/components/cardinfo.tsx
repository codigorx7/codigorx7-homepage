import React from 'react';
import Link from 'next/link';
import * as card from '../../styles/card.css';
import "../globals.css";

const cardinfo = () => {
  return (
                    
  <div className={card.main}>
    <div className={card.postfeed}>
    <Link href="/desenvolvimiento">
      <div className={`${card.card} ${card.cardHover}`}>
        <div className={card.header}>
          <div className={card.id}>
            112358132
          </div>
          <div className={card.textcard}>
            <small className={card.textbase}>Serviços</small>
            <h5 className={card.titlecard}>Desenvolvimento Web</h5>
          </div>
        </div>
        <div className={card.content}>
          <small className={card.textbase}>Processo de 3 etapas</small>
        </div>
      </div>
      </Link>

      <Link href="/ciberseguranca">
        <div className={`${card.card} ${card.cardHover}`}>
          <div className={card.header}>
            <div className={card.id}>
              233377610
            </div>
            <div className={card.textcard}>
              <small className={card.textbase}>Serviços</small>
              <h5 className={card.titlecard}>Consultoria em Cibersegurança</h5>
            </div>
          </div>
          <div className={card.content}>
            <small className={card.textbase}>Defenda seus dados, <br />Proteger sua empresa</small>
          </div>
        </div>
      </Link>

      <Link href="/portfolio">
      <div className={`${card.card} ${card.cardHover}`}>
        <div className={card.header}>
          <div className={card.id}>
            987159725
          </div>
          <div className={card.textcard}>
            <small className={card.textbase}>Trabalhos</small>
            <h5 className={card.titlecard}>Portfólio</h5>
          </div>
        </div>
        <div className={card.content}>
          <small className={card.textbase}>Mostra de projetos</small>
        </div>
      </div>
      </Link>

      <Link href="/sobre-nos">
        <div className={`${card.card} ${card.cardHover}`}>
          <div className={card.header}>
            <div className={card.id}>
              844181675
            </div>
            <div className={card.textcard}>
              <small className={card.textbase}>Sobre nos</small>
              <h5 className={card.titlecard}>CODIGORX7</h5>
            </div>
          </div>
          <div className={card.content}>
            <small className={card.textbase}>nossa missão e valores</small>
          </div>
        </div>
      </Link>

      <div className={`${card.cardblog} ${card.cardHover}`}>

      <Link href="/posts/objetivos-do-site">
        <div className={card.headerblog}>
          <div className={card.idblog}>
            109461771
          </div>
          <div className={card.textcard}>
            <small className={card.textbaseblog}>Objetivos dos sites</small>
            <h5 className={card.titlecardblog}>Post</h5>
          </div>
        </div>
        <div className={card.content}>
          <small className={card.textbaseblog}>Qual é a finalidade do e-commerce, das landing pages e das plataformas de e-learning para sua empresa?</small>
        </div>
        </Link>
      </div>

      <Link href="/posts/blockchain">

      <div className={`${card.cardblog} ${card.cardHover}`}>
        <div className={card.headerblog}>
          <div className={card.idblog}>
            198013008
          </div>
          <div className={card.textcard}>
            <small className={card.textbaseblog}>Blockchain</small>
            <h5 className={card.titlecardblog}>Post</h5>
          </div>
        </div>
        <div className={card.content}>
          <small className={card.textbaseblog}>Usamos bancos de dados centralizados que permitem que uma empresa tenha controle total de nossos dados on-line.</small>
        </div>
      </div>
      </Link>

    </div>
  </div>
);
};

export default cardinfo;
