import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <h3>整体院やまもと</h3>
                    <div className={styles.info}>
                        <p>〒682-0018 鳥取県倉吉市福庭町1丁目101 伊藤ビル1F</p>
                        <p>TEL: 080-5620-8275</p>
                        <p>営業時間: 8:30〜20:00 / 定休日: 日・祝</p>
                        <p style={{ marginTop: '10px' }}>
                            <a href="https://www.instagram.com/chiro_takahiro/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 'bold' }}>
                                Instagramはこちら
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles.links}>
                    <Link href="/">ホーム</Link>
                    <Link href="/services">施術内容・料金</Link>
                    <Link href="/blog">ブログ・お知らせ</Link>
                    <Link href="/first-visit">初めての方へ</Link>
                    <Link href="/access">アクセス</Link>
                    <Link href="/contact">ご予約・お問い合わせ</Link>
                    <Link href="/privacy">プライバシーポリシー</Link>
                    <Link href="/faq">よくある質問</Link>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} 整体院やまもと All Rights Reserved.
            </div>
        </footer>
    );
}
