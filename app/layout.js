import Link from 'next/link';

import './globals.css';

export const metadata = {
  title: 'Next 13 Demo App',
  description: 'A sample Next 13 Demo App',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="layoutWrapper">
          <div className="navbar">
            <h1>Next.js 13</h1>
            <div className="linksWrapper">
              <Link href="/">HOME</Link>
              <Link href="/contact">CONTACT</Link>
              <Link href="/about">ABOUT</Link>
              <Link href="/photos">PHOTOS</Link>
              <Link href="/list">LIST</Link>
              <Link href="/parallel">PARALLEL</Link>
              <Link href="/blog">BLOG</Link>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
