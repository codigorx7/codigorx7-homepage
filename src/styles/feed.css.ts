// styles/feed.css.ts
import { style } from '@vanilla-extract/css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
  width: '100%',
  margin: '0 auto',
  padding: '20px',
  boxSizing: 'border-box',
});

export const feed = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
  width: '100%',
});

export const card = style({
  backgroundColor: '#201E1B',
  color: '#F4F4ED',
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

export const cardImage = style({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
});

export const cardContent = style({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
});

export const title = style({
  fontSize: '16px',
  fontWeight: 'bold',
});
