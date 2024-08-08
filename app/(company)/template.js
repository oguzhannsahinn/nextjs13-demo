'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from './company.module.css';

const CompanyLayout = ({ children }) => {
  return (
    <section>
      <div className={styles.wrapper}>
        <nav>
          <ul role="list" className={styles.listWrapper}>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/about">About</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/contact">Contact</Link>
            </motion.li>
          </ul>
        </nav>

        <main className={styles.content}>{children}</main>
      </div>
    </section>
  );
};

export default CompanyLayout;
