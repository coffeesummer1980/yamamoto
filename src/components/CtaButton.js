import Link from 'next/link';
import styles from './CtaButton.module.css';

export default function CtaButton() {
    return (
        <div className={styles.floatingContainer}>
            <Link href="/contact" className={styles.lineButton}>
                <span>LINEで予約・相談</span>
            </Link>
        </div>
    );
}
