import { style } from '@vanilla-extract/css';

export const formContainer = style({
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: '1px solid #201E1B',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,

  '@media': {

    '(min-width: 768px)': {
      width: '50%',
    },
},
});
  

export const formPopup = style({
  backgroundColor: '#f4f4ed',
  padding: '30px',
  borderRadius: '5px',
  maxWidth: '500px',
  width: '100%',
});

export const formGroup = style({
  marginBottom: '20px',
  
});

export const formLabel = style({
  display: 'block',
  fontWeight: 'bold',
  marginBottom: '5px',
});

export const formInput = style({
  width: '100%',
  padding: '10px',
  border: '1px solid #201E1B',
  borderRadius: '5px',
  backgroundColor: '#f9f9f4',

});

export const formSelect = style({
  width: '100%',
  padding: '10px',
  border: '1px solid #201E1B',
  borderRadius: '5px',
  backgroundColor: '#f9f9f4',

});

export const formSelectText = style({
  fontSize: '11px',
  fontFamily: 'Poppins, sans-serif',
});

export const formTextarea = style({
  width: '100%',
  padding: '10px',
  border: '1px solid #201E1B',
  borderRadius: '5px',
  resize: 'vertical',
  backgroundColor: '#f9f9f4',

});


export const formCheckbox = style({
  backgroundColor: '#f9f9f4',

});


export const formButton = style({
  backgroundColor: '#201E1B',
  color: '#f9f9f4',
  fontSize: '1rem',
  padding: '10px 20px',
  border: 'none',
  cursor: 'pointer',
});