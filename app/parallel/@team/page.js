import styles from '../parallel.module.css';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Team () {
  await delay(3000);

  return <div className={styles.teamWrapper}>Team</div>;
};
