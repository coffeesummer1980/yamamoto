'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <span>倉吉</span>整体院やまもと
          </Link>
        </div>

        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <Link href="/" onClick={closeMenu}>ホーム</Link>
          <Link href="/services" onClick={closeMenu}>メニュー・料金</Link>
          <Link href="/blog" onClick={closeMenu}>ブログ・お知らせ</Link>
          <Link href="/first-visit" onClick={closeMenu}>初めての方へ</Link>
          <Link href="/access" onClick={closeMenu}>アクセス</Link>
          <Link href="/contact" onClick={closeMenu} style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>ご予約</Link>
        </nav>
      </div>
    </header>
  );
}
