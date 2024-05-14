import React from 'react';
import Link from 'next/link';
import * as card from '../../styles/card.css';
import "../globals.css";

const cardinfo = () => {
  return (
                    
  <div className={card.main}>
    <div className={card.postfeed}>
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
