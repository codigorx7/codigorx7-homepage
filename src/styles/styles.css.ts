import { style } from '@vanilla-extract/css';

const mobileFontSize = '39px';
const desktopFontSize = '100px';


//______________________NAVBAR



export const logo = style({
  justifyContent: 'flex-start',
  paddingTop: '15px',

});


  export const navLinks = style({
    display: 'flex',
    flexDirection: 'column',
  });

  export const navLink = style({
    cursor: 'pointer', 
    transition: 'font-style 0.2s', 
    textTransform: 'uppercase',
    padding: '0.1rem',

    ':hover': {
      textDecoration: 'underline', 
    },

    ':active': {
      fontWeight: 'bold',
      textDecoration: 'underline', 
    },

    ':focus': {  
      fontWeight: 'bold',
      textDecoration: 'underline', 
    },
  });

//______________________HERO


export const hero = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end', 
  alignItems: 'right', 
  marginLeft: 'auto',
  paddingRight: '18px',
  paddingLeft: '18px',
  marginTop: '9rem',

  '@media': {
    '(min-width: 768px)': {
      paddingRight: '25vmin'
    },
  },

});

export const buttonText = style({
  marginTop: '15px',
  maxWidth: '70%',
  marginRight: '10px',
  fontSize: '16px',
  fontStyle: 'italic',
  fontWeight: 'bold',
  '@media': {
    '(min-width: 768px)': {
      marginTop: '17px',
    },
  },
});

export const title = style({
  textAlign: 'center',
  marginBottom: '20px',
  fontFamily: 'Inter, sans-serif',
  letterSpacing: '-3px',
  fontSize: mobileFontSize,
  '@media': {
    '(min-width: 768px)': {
      letterSpacing: '-8px',
      fontSize: desktopFontSize,
    },
  },
});


//______________________LANGUAGE

export const languageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: '50%',
  right: '1rem',
  transform: 'translateY(-50%)',
  zIndex: 999, 
});

export const languageButton = style({
  border: 'none',
  backgroundColor: 'transparent',
  color: '#201e1b',
  fontWeight: 'bold',
  fontSize: '.75rem',
  cursor: 'pointer',
  marginBottom: '0.5rem',
  transition: 'background-color 0.2s',
  ':hover': {
    color: '#4f4942',
    textDecoration: 'underline',
  },

  ':active': {
    color: '#4f4942',
    textDecoration: 'underline',
  },

  ':focus': {  
    color: '#4f4942',
    textDecoration: 'underline',
  },
});


//______________________IMAGES

export const workImage = style({
  float: 'left',
  marginRight: '1rem',
});

export const image = style({
  width: '73px',
  height: 'auto',
});

//______________________CONTENT

export const content = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: '1rem',
  padding: '8vmin 4vmin',

});

export const section = style({
  padding: '1rem',
});

export const heading = style({
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
});

export const paragraph = style({
  fontSize: '1rem',
});

export const animatedNotification = style({
  marginLeft: 'auto', 
});


export const buttonsContainer = style({
  display: 'flex',
  justifyContent: 'center',
});

export const list = style({
  textAlign: 'left',
});

export const imageContainer = style({
  marginBottom: '1rem',
});

export const profile = style({
  width: '150px',
  height: 'auto',
});

export const img = style({
  maxWidth: '50%',
  height: 'auto',
  '@media': {
    '(max-width: 660px)': {
      maxWidth: '105%',

    },
  },
});

export const imgcards = style({
  maxWidth: '100%',
  height: 'auto',
  transition: 'box-shadow 0.3s, transform 0.3s',
  cursor: 'pointer',
  overflow: 'hidden',
  userSelect: 'none',
  padding: '0 4vmin',

  '@media': {
    '(max-width: 660px)': {
      maxWidth: '90%',

    },
  },
  selectors: {
    '&:hover, &:active': {
      transform: 'scale(1.03)',
    },
  },
});

export const sharedButton = style({
  width: 'fit-content', 
  backgroundColor: '#201e1b',
  color: '#f4f4ed',
  fontSize: '1rem',
  padding: '.5rem 1rem',
  marginBottom: '.5rem',
  marginLeft: '1rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#4f4942',
  },
});

export const cibersegurancaButton = style({
  width: 'fit-content', 
  backgroundColor: '#f4f4ed',
  color: '#201e1b',
  fontSize: '1rem',
  padding: '.5rem 1rem',
  marginBottom: '.5rem',
  marginLeft: '1rem',
  borderColor: '#201e1b',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#e5e5dc',
  },
});


//______________________WORKS

export const link = style({
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
  fontSize: '1rem',
  justifyContent: 'flex-start',
});

export const working = style({
  textDecoration: 'none',
  fontSize: '1rem',
  justifyContent: 'flex-start',
});

export const textContainer = style({
  overflow: 'hidden',
  marginBottom: '.5rem',
});

export const techButtonContainer = style({
  display: 'flex',
  flexWrap: 'wrap', 
  gap: '.5rem',
  marginTop: '.5rem',
});

export const techButton = style({
  width: 'fit-content',
  backgroundColor: '#201e1b',
  color: '#f4f4ed',
  padding: '.25rem .5rem',
  marginBottom: '.25rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#4f4942',
  },
});

//______________________CIBERSEGURANCA

export const pricingCardContainer = style({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '20px',
});

  const boxShadowColor = 'rgba(0, 0, 0, 0.1)';

export const pricingCard = style({
  backgroundColor: '#f4f4ed',
  padding: '20px',
  textAlign: 'center',
  maxWidth: '300px',
  borderColor: '#201e1b',
  borderWidth: '1px', 
  borderStyle: 'solid',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  ':hover': {
    boxShadow: `4px 4px ${boxShadowColor}`,
    transform: 'scale(1.03)',
  },
});

export const priceContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
});

export const pricingCardTitle = style({
  fontSize: '24px',
  marginBottom: '10px',
});

export const pricingCardPrice = style({
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '20px',
});


export const oldPrice = style({
  textDecorationLine: 'line-through',
  color: 'gray',
  marginLeft: '10px',
  fontSize: '17px',
});

export const pricingCardFeatures = style({
  listStyle: 'none',
  padding: '0',
  marginBottom: '20px',
  textAlign: 'left',
});

export const pricingCardFeature = style({
  marginBottom: '10px',
});

export const pricingCardButton = style({
  backgroundColor: '#201e1b',
  color: '#f4f4ed',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: 'auto',
  transition: 'backgroundColor 0.3s ease-in-out',
  ':hover': {
    backgroundColor: '#333',
  },
});


//______________________POSTS
export const headerPost = style({
  padding: '0 0 11vmin',
});

export const headerPostText = style({
  fontSize: '1.25rem',
  lineHeight: '1.5rem',
  fontWeight: '700',
  marginBottom: '1rem',
  textTransform: 'uppercase',
});

export const metaPost = style({
  fontSize: '.625rem',
  lineHeight: '1rem',
  color: '#807f7b',
  letterSpacing: '.4px',
  textTransform: 'uppercase',
});

//______________________ABOUT
export const profileContainer = style({
  display: 'flex',
  alignItems: 'center',

  '@media': {
    '(max-width: 660px)': {
      flexDirection: 'column', 
    },
  },
});

export const profileImage = style({
  width: '200px', 
  height: 'auto',
  marginBottom: '20px',

  '@media': {
    '(max-width: 660px)': {
      marginRight: '0',  
    },
  },
});

export const textAbout = style({
  marginLeft: '1rem',

  '@media': {
    '(max-width: 660px)': {
      flex: '1', 
    },
  },
});

export const emailLink = style({
  cursor: 'pointer', 
  transition: 'font-style 0.2s', 

  ':hover': {
    textDecoration: 'underline', 
  },

  ':active': {
    fontWeight: 'bold',
    textDecoration: 'underline', 
  },
});

export const aboutButtons = style ({
  textAlign: 'left',
  marginTop: '15px',

});



//______________________FOOTER
export const footer = style({
  textAlign: 'center',
  padding: '20px',
  color: '#201E1B',
  paddingTop: '20.6rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
});

export const footerContainer = style({
  gap: '.75rem',
  justifyContent: 'space-between',
  display: 'flex',
  width: '100%',

  '@media': {
    '(min-width: 950px)': {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '900px',
    },
},
});

export const footerMenu = style({
  fontSize: '.6875rem',
  lineHeight: '1.05rem',
  columnGap: '1.25rem',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  textTransform: 'uppercase',
  textAlign: 'left',
});

export const footerIcons = style({
  fontSize: '1rem',
  marginTop: '.50rem',

});


export const footerLinks = style({
  columnGap: '1rem',
  display: 'flex',
  marginBottom: '1rem',
  alignItems: 'flex-start',
  
  
  '@media': {
    '(min-width: 640px)': {
      flexDirection: 'row',
    },

    '(min-width: 768px)': {
      marginLeft: '7rem',
    },
},
});
  
export const footerText = style({
  fontSize: '11px',
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'italic',
  textAlign: 'left',
  justifyContent: 'flex-start',
  
  
  '@media': {
  '(min-width: 768px)': {
    maxWidth: '50%',
  },
},

});

export const footerRights = style({
    width: '100%',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingBottom: '.625rem',
    fontSize: '.6875rem',
    lineHeight: '1.05rem',
    color: '#66645e',
    justifyContent: 'flex-start',
    display: 'flex',
    maxWidth: '70%'
});

