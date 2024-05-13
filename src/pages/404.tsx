import React from 'react';
import Layout from '../app/layout';
import * as styles from '../styles/styles.css'

const notfound = () => {
return (

    <Layout>
      <div className={styles.hero}>
      </div>
          <div className={styles.content}>
            <div className={styles.section}>
              
              <h2 className={styles.heading}>404 Page Not Found</h2>
              <h2 className={styles.heading}>Sorry, the page you are looking for does not exist.</h2>
              
            </div>
        </div>
    </Layout>
  );
};






export default notfound;

