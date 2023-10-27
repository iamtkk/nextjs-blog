import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export async function getServerSideProps() {
  console.log('server');
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Home({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
      <h1>
        <Link href="/csr" legacyBehavior>
          <a>CSR로</a>
        </Link>
      </h1>
      <h1>
        <Link href="/ssg" legacyBehavior>
          <a>SSG로</a>
        </Link>
      </h1>
      <h1>
        <Link href="/isr" legacyBehavior>
          <a>ISR로</a>
        </Link>
      </h1>
    </>
  );
}
