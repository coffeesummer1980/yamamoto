import Link from 'next/link';
import Section from '../../components/Section';
import { getSortedPostsData } from '../../lib/posts';

export const metadata = {
    title: 'ブログ・お知らせ | 整体院やまもと',
};

export default function BlogIndex() {
    const allPostsData = getSortedPostsData();

    return (
        <Section title={{ sub: 'BLOG', main: 'ブログ・お知らせ' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                {allPostsData.length === 0 ? (
                    <p>現在、記事はありません。</p>
                ) : (
                    <div style={{ display: 'grid', gap: '20px' }}>
                        {allPostsData.map(({ id, date, title, description }) => (
                            <div key={id} className="card" style={{ padding: '30px', transition: 'transform 0.2s' }}>
                                <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '5px' }}>{date}</div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
                                    <Link href={`/blog/${id}`} style={{ color: '#5A5A5A', textDecoration: 'none' }}>
                                        {title}
                                    </Link>
                                </h3>
                                <p style={{ color: '#666', marginBottom: '15px' }}>{description}</p>
                                <div style={{ textAlign: 'right' }}>
                                    <Link href={`/blog/${id}`} style={{ color: '#8EB8B8', fontWeight: 'bold' }}>
                                        続きを読む &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Section>
    );
}
