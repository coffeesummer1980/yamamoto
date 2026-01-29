import Link from 'next/link';
import { getPostData, getAllPostIds } from '../../../lib/posts';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const postData = await getPostData(id);
    return {
        title: `${postData.title} | 整体院やまもと`,
        description: postData.description,
    };
}

// Generate static params for export
export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({
        id: path.params.id,
    }));
}

export default async function Post({ params }) {
    const { id } = await params;
    const postData = await getPostData(id);

    return (
        <div className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ marginBottom: '30px' }}>
                    <Link href="/blog" style={{ color: '#8EB8B8', textDecoration: 'none' }}>
                        &larr; ブログ一覧に戻る
                    </Link>
                </div>

                <article className="card" style={{ padding: '40px' }}>
                    <div style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                        <div style={{ color: '#888', marginBottom: '10px' }}>{postData.date}</div>
                        <h1 style={{ fontSize: '2rem', marginBottom: '0' }}>{postData.title}</h1>
                    </div>

                    <div
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                        style={{ lineHeight: '1.8' }}
                        className="prose"
                    />
                </article>
            </div>
        </div>
    );
}
