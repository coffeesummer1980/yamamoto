import Section from '../../components/Section';

export const metadata = {
    title: 'プライバシーポリシー | 整体院やまもと',
};

export default function PrivacyPage() {
    return (
        <Section title={{ sub: 'PRIVACY', main: 'プライバシーポリシー' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="card">
                    <p style={{ marginBottom: '20px' }}>
                        整体院やまもと（以下「当院」）は、お客様の個人情報保護の重要性を認識し、以下の方針に基づき個人情報の保護に努めます。
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px' }}>1. 個人情報の取得</h3>
                    <p style={{ marginBottom: '10px' }}>
                        当院は、適法かつ公正な手段によって、個人情報を取得致します。
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px' }}>2. 個人情報の利用</h3>
                    <p style={{ marginBottom: '10px' }}>
                        当院は、個人情報を、取得の際に示した利用目的の範囲内で、業務の遂行上必要な限りにおいて利用します。
                    </p>

                    <h3 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px' }}>3. 個人情報の管理</h3>
                    <p style={{ marginBottom: '10px' }}>
                        当院は、個人情報の正確性を保ち、これを安全に管理致します。
                    </p>

                    <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                        <p>
                            【お問い合わせ窓口】<br />
                            整体院やまもと<br />
                            住所：〒682-0018 鳥取県倉吉市福庭町1丁目101 伊藤ビル1F<br />
                            電話：080-5620-8275
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
