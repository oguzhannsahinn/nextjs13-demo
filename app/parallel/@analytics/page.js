import styles from '../parallel.module.css';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Analytics() {
  await delay(1000);

  return <div className={styles.analyticsWrapper}>Analytics</div>;
}
