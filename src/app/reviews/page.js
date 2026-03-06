import Section from '../../components/Section';

export const metadata = {
    title: 'お客様の声 | 整体院やまもと',
};

export default function ReviewsPage() {
    return (
        <Section title={{ sub: 'VOICE', main: 'お客様の声' }}>
            <div className="container" style={{ maxWidth: '800px', display: 'grid', gap: '30px' }}>
                {[1, 2, 3].map((i) => (
                    <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '60px', height: '60px', background: '#eee', borderRadius: '50%' }}></div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>倉吉市在住 30代 女性</div>
                                <div style={{ fontSize: '0.8rem', color: '#666' }}>産後骨盤矯正コース</div>
                            </div>
                        </div>
                        <p style={{ fontStyle: 'italic', background: '#f9f9f9', padding: '15px', borderRadius: '8px', position: 'relative' }}>
                            「初めての育児で腰が痛くてどうしようもなかったのですが、ここで施術を受けて本当に楽になりました。先生も優しくて、安心して通えます。」
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
