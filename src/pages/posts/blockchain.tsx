import React from 'react';
import Layout from '../../app/layout';
import * as styles from '../../styles/styles.css'
import Posts from '../../app/components/postsinfo';
import "../../app/globals.css";



const Post2 = () => {
return (

    <Layout>
      <div className={styles.hero}>
      </div>
          <div className={styles.content}>
            <div className={styles.section}>
              <div className={styles.headerPost}>
                <span className={styles.metaPost}>03 Apr 2024 • 1 Min read</span>
                <h1 className={styles.headerPostText}>👽 Permissionless, transparent, decentralized. </h1>
              </div>
              <h2 className={styles.heading}>What is a blockchain?</h2>
              <p className={styles.paragraph}>
              The foundation upon which everything else is constructed is blockchain, the most fundamental element of the cryptocurrency system.
              <br />
              <br />
              It's actually fairly easy. What's that?
              <br />
              <br />
              A large ledger is blockchain. large database. Like any other database, it retains data. What is the world's largest information storage facility? It's the internet.
              <br />
              <br />
              Online applications are many. Messenger apps, social networks, banking, gaming, picture storage, etc. We have all relied on centralized databases since the dawn of the internet era, and we utilize them on a daily basis. Your data is under the sole control of one organization if you use Facebook. The same holds true for every other app or YouTube. Banks included.
              <br />
              <br />
              Every piece of financial information you have is dependent on incredibly intricate and inefficient financial databases. Furthermore, they are centralized, opaque, and difficult to integrate with one another.  
              <br />
              <br />
              <strong>What is a blockchain?</strong> - It's just a large database on the internet, but it's not your typical storage. It is not anyone's property. You are free to use it, join, and expand upon it. Basically, it's just a secure space where you can produce anything you want. You can also be certain that all new members will adhere to the same set of guidelines. Decentralization is what this is.
              <br />
              <br />
              This means that you and your clients may be certain that your network won't ever go down due to a bug if you are developing an on-chain defi application. Furthermore, everyone is aware that you cannot simply grab their money. Since the network is not your property, the app is. And everyone is aware of the uses and locations of money. Transparency is that.
              <br />
              <br />
              Also, anybody can integrate your program without authorization. since a public decentralized database serves as its foundation. Simply enter your commission or any other preference. You can utilize your program inside of someone else's without restriction. That is not authorized.
              </p>
            </div>
            <Posts/>
        </div>
    </Layout>
  );
};






export default Post2;

