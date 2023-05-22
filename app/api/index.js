import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/globals.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Burger Kitchen in Vienna</title>
        <meta name="description" content="Best burger shop in Vienna" />
        <link rel="icon" href="/favic.ico" />
      </Head>
      homepage
    </div>
  );
}
