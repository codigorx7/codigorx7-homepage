'use client'
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import WhatsappLogo from '../../../public/assets/images/whatsapp.svg';
import "../globals.css";

const Whatsapp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleNotification = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000); 
    };

    toggleNotification();

    const interval = setInterval(toggleNotification, 1200);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="whatsapp-button-container">
      <div className="whatsapp-button">
      <a href="https://wa.me/5538992582682" target="_blank" rel="noopener noreferrer">
      <motion.div
        className="whatsapp-button"
        whileHover={{ translateY: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image src={WhatsappLogo} className='whatsapp-logo' alt="The logo of Whatsapp, Meta's communication and instant messaging channel" style={{ width: '50px', height: 'auto' }} />
        {isVisible && (
        <motion.div
            className="notification"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 10, stiffness: 100 }}
          >
            <b>1</b>
        </motion.div>
        )}
      </motion.div>
      </a>
      </div>
    </div>
  );
};

export default Whatsapp;
