import Link from 'next/link';

import styles from '../photos.module.css'

export const dynamicParams = false;

export function generateStaticParams() {
  let slugs = ['1', '2', '3', '4', '5', '6'];
  return slugs.map((slug) => ({ id: slug }));
}

export default function PhotoPage({ params: { id } }) {
  return (
    <div className={styles.wrapper}>
      <div className="card">photo: {id}</div>
      <Link href="/photos">Back to photos</Link>
    </div>
  );
}
