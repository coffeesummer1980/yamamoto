import Section from '../../components/Section';

export const metadata = {
    title: 'アクセス | 整体院やまもと',
};

export default function AccessPage() {
    return (
        <>
            <Section title={{ sub: 'ACCESS', main: 'アクセス' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="card" style={{ marginBottom: '40px' }}>
                        <div style={{ width: '100%', aspectRatio: '16/9', marginBottom: '20px', borderRadius: '12px', overflow: 'hidden' }}>
                            <iframe
                                src="https://maps.google.com/maps?q=鳥取県倉吉市福庭町1丁目101&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '15px' }}>
                            <div style={{ fontWeight: 'bold', color: '#8EB8B8' }}>住所</div>
                            <div>〒682-0018<br />鳥取県倉吉市福庭町1丁目101 伊藤ビル1F</div>

                            <div style={{ fontWeight: 'bold', color: '#8EB8B8' }}>電話</div>
                            <div>080-5620-8275</div>

                            <div style={{ fontWeight: 'bold', color: '#8EB8B8' }}>駐車場</div>
                            <div>2台あり</div>

                            <div style={{ fontWeight: 'bold', color: '#8EB8B8' }}>アクセス</div>
                            <div>
                                県立産業人材育成センター倉吉校のすぐ近く。<br />
                                国道179号線から少し入ったところ、マクドナルドやすき家の裏手エリアです。<br />
                                「麺屋 八兵衛」さんの隣です。
                            </div>
                        </div>
                    </div>

                    <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>営業時間</h3>
                    <div className="card">
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
                            <thead>
                                <tr style={{ background: '#f9f9f9' }}>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>時間</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>月</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>火</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>水</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>木</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>金</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd', color: 'blue' }}>土</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd', color: 'red' }}>日</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>8:30 - 20:00</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>●</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>●</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>●</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>●</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>●</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>●</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>-</td>
                                </tr>
                            </tbody>
                        </table>
                        <p style={{ marginTop: '10px', fontSize: '0.8rem', textAlign: 'right' }}>
                            -：定休日（日・祝、年末年始、お盆）
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}
