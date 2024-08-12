import Link from 'next/link';

import styles from './parallel.module.css';

export default function parallelLayout({ children, team, analytics, reports }) {
  return (
    <>
      <div>{children}</div>
      <div className={styles.wrapper}>
        <div className={styles.page}>{team}</div>
        <div className={styles.page}>{analytics}</div>
        <div className={styles.page}>{reports}</div>
      </div>

      <Link href="/parallel/settings">Settings</Link>
    </>
  );
}
