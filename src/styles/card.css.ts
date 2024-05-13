import { style } from '@vanilla-extract/css';

const backgroundColor = '#F4F4ED';
const borderColor = '#201E1B';
const blogBackgroundColor = '#201E1B';
const blogBorderColor = '#F4F4ED';
const boxShadowColor = 'rgba(0, 0, 0, 0.1)';

export const main = style({
  display: 'flex',
  flex: '1 0 auto',
  flexDirection: 'column',
  padding: '0 4vmin',
});

export const postfeed = style({
  display: 'grid',
  justifyContent: 'flex-start',
  maxWidth: '340px',
  alignItems: 'center',
  marginTop: '6rem',
  gap: '1rem',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  '@media': {
  '(min-width: 369px)': {
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  },

  '(min-width: 380px)': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },

  '(min-width: 640px)': {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    maxWidth: '500px',
  },

  '(min-width: 768px)': {
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    maxWidth: '710px',
    gap: '2.5vmin 2.5vmin',

  },

  '(min-width: 950px)': {
    gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
    maxWidth: '900px',
 
  },
  },
  animation: 'fadeIn .6s linear',
  animationFillMode: 'forwards',
  animationIterationCount: '1',
});


export const card = style({
  width: '160px',
  height: '220px',
  backgroundColor,
  border: `1px solid ${borderColor}`,
  transition: 'box-shadow 0.3s, transform 0.3s',
  cursor: 'pointer',
  overflow: 'hidden',
  userSelect: 'none',
});

export const cardHover = style({
  selectors: {
    '&:hover, &:active': {
      boxShadow: `4px 4px ${boxShadowColor}`,
      transform: 'scale(1.03)',
    },
  },
});

export const header = style({
  padding: '4px 0',
  borderBottomWidth: '1.5px',
  borderBottomStyle: 'solid',
  borderBottomColor: 'rgba(117, 107, 118, var(--tw-border-opacity))',
});

export const id = style({
  fontSize: '7.2px',
  display: 'flex',
  padding: '0 6px',
  justifyContent: 'flex-end',
});

export const textcard = style({
  margin: '30px 0 0',
  padding: '0 8px',
});

export const titlecard = style({
  fontSize: '.75rem',
  lineHeight: '1.1rem',
  fontWeight: '700',
  textTransform: 'uppercase',
});

export const textbase = style({
  fontSize: '.75rem',
  lineHeight: '1.1rem',
  fontWeight: '400',
  textAlign: 'left',
  textTransform: 'capitalize',
});

export const headerblog = style({
  padding: '4px 0',
  borderBottomWidth: '1.5px',
  borderBottomStyle: 'solid',
  borderBottomColor: '#F4F4ED',
});


export const cardblog = style({
  width: '160px',
  height: '220px',
  backgroundColor: blogBackgroundColor,
  border: `1px solid ${blogBorderColor}`,
  transition: 'box-shadow 0.3s, transform 0.3s',
  cursor: 'pointer',
  overflow: 'hidden',
  userSelect: 'none',
});

export const idblog = style({
  fontSize: '7.2px',
  display: 'flex',
  padding: '0 6px',
  justifyContent: 'flex-end',
  color: '#F4F4ED',
});

export const titlecardblog = style({
  fontSize: '.75rem',
  lineHeight: '1.1rem',
  fontWeight: '700',
  textTransform: 'uppercase',
  color: '#F4F4ED',
});


export const textbaseblog = style({
  fontSize: '.75rem',
  lineHeight: '1.1rem',
  fontWeight: '400',
  textAlign: 'left',
  textTransform: 'capitalize',
  color: '#F4F4ED',
});


export const content = style({
  flex: '1',
  padding: '8px',
});
