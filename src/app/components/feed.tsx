import Link from 'next/link';
import * as styles from '../../styles/feed.css';

const postInfo = [
  {
    id: 1,
    title: 'Objetivos dos sites',
    description: 'Qual é a finalidade do e-commerce, das landing pages e das plataformas de e-learning para sua empresa?',
    link: '/posts/objetivos-do-site',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Blockchain',
    description: 'Usamos bancos de dados centralizados que permitem que uma empresa tenha controle total de nossos dados on-line.',
    link: '/posts/blockchain',
    imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  // Add more posts here
];

const Feed: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.feed}>
        {postInfo.map((post) => (
          <Link href={post.link} key={post.id}>
            <div className={styles.card}>
              <img src={post.imageUrl} alt={post.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <div className={styles.header}>
                  <h5 className={styles.title}>{post.title}</h5>
                </div>
                <p>{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Feed;
