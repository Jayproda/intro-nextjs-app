import Link from 'next/link';
import styles from '../styles/home.module.css';

export default async function Home() {
  return (
    <div className={styles.home}>
      <div>
        <div>
          <h1>Hi, my name is Jessie Johns!</h1>
        </div>
        <div>
          <p>
            <Link href='./blog' className={styles.link}>
              Checkout my Blog
            </Link>
          </p>
        </div>
        <div>
          <p>
            <Link href='./contact' className={styles.link}>
              Get in touch
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
