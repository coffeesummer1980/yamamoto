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
                            LINEで友だち追加する
                        </a>
                        <div style={{ marginTop: '30px' }}>
                            <img src="/images/line.jpg" alt="LINE QRコード" style={{ display: 'block', margin: '0 auto', maxWidth: '200px', width: '100%', height: 'auto', borderRadius: '8px' }} />
                        </div>
                    </div>

                    <div className="card" style={{ marginBottom: '40px' }}>
                        <h3 style={{ marginBottom: '20px' }}>InstagramのDMでのお問い合わせ</h3>
                        <p style={{ color: '#666', marginBottom: '30px' }}>
                            Instagramのダイレクトメッセージ（DM）からもご予約・ご相談を受け付けております。<br />
                            「ホームページを見て予約したい」とお伝えください。
                        </p>
                        <a href="https://www.instagram.com/chiro_takahiro/" target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-block',
                            background: '#E1306C',
                            color: 'white',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            padding: '15px 40px',
                            borderRadius: '50px',
                            boxShadow: '0 4px 10px rgba(225, 48, 108, 0.3)',
                            textDecoration: 'none'
                        }}>
                            Instagramを開いてDMする
                        </a>
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
                </div>
            </Section>
        </>
    );
}
