import Section from '../../components/Section';

export const metadata = {
    title: 'ご予約・お問い合わせ | 整体院やまもと',
};

export default function ContactPage() {
    return (
        <>
            <Section title={{ sub: 'CONTACT', main: 'ご予約・お問い合わせ' }}>
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <p style={{ marginBottom: '40px' }}>
                        当院は<strong>完全予約制</strong>となっております。<br />
                        ご来院の際は、LINEまたはお電話にてご予約をお願いいたします。
                    </p>

                    <div className="card" style={{ padding: '50px 20px', marginBottom: '40px', background: '#F0F9F9', border: '2px solid #8EB8B8' }}>
                        <h3 style={{ marginBottom: '20px', color: '#06C755' }}>LINEでのご予約（24時間受付/推奨）</h3>
                        <p style={{ marginBottom: '30px' }}>
                            「ホームページを見て、予約したいのですが…」とメッセージを送ってください。<br />
                            ご相談だけでも大歓迎です。
                        </p>
                        <a href="#" style={{
                            display: 'inline-block',
                            background: '#06C755',
                            color: 'white',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            padding: '15px 40px',
                            borderRadius: '50px',
                            boxShadow: '0 4px 10px rgba(6, 199, 85, 0.3)',
                            textDecoration: 'none'
                        }}>
                            LINE公式アカウントを友だち追加
                        </a>
                        <div style={{ marginTop: '30px', color: '#888' }}>
                            【ここにLINEのQRコード画像を配置】
                        </div>
                    </div>

                    <div className="card" style={{ marginBottom: '40px' }}>
                        <h3 style={{ marginBottom: '20px' }}>お電話でのご予約</h3>
                        <p style={{ marginBottom: '20px', fontSize: '2rem', fontWeight: 'bold', color: '#5A5A5A' }}>
                            080-5620-8275
                        </p>
                        <p style={{ color: '#666' }}>
                            「はい、整体院やまもとです」と出ますので、<br />
                            「ホームページを見て予約したい」とお伝えください。<br />
                            施術中は電話に出られないことがございます。ご了承ください。
                        </p>
                    </div>

                    <h3 style={{ marginBottom: '20px' }}>メールでのお問い合わせ</h3>
                    <p style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#666' }}>
                        ※お急ぎの方はLINEをご利用ください。
                    </p>
                    <div className="card" style={{ textAlign: 'left' }}>
                        {/* Dummy Form */}
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>お名前 <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} placeholder="例：山田 花子" />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>メールアドレス <span style={{ color: 'red' }}>*</span></label>
                            <input type="email" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} placeholder="例：hanako@example.com" />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>お問い合わせ内容 <span style={{ color: 'red' }}>*</span></label>
                            <textarea style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', minHeight: '150px' }} placeholder="ご質問やご希望の日時などをご記入ください"></textarea>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button className="btn" style={{ border: 'none', cursor: 'pointer' }}>送信する（ダミー）</button>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
