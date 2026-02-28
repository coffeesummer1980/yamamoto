import Section from '../../components/Section';

export const metadata = {
    title: '施術内容・料金 | 整体院やまもと',
};

export default function ServicesPage() {
    return (
        <>
            <Section title={{ sub: 'MENU', main: '施術メニュー・料金' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <p style={{ marginBottom: '40px', textAlign: 'center' }}>
                        当院は、一律の決まった施術をするのではなく、<br />
                        お一人お一人の体の状態に合わせたオーダーメイドの施術を行います。<br />
                        初回はカウンセリングと検査に時間をかけ、痛みの原因を探ります。
                    </p>

                    {/* Monthly Plan */}
                    <div className="card" style={{ marginBottom: '40px', border: '2px solid #E8C1C1' }}>
                        <div style={{ background: '#E8C1C1', color: 'white', padding: '5px 15px', display: 'inline-block', borderRadius: '20px', marginBottom: '10px', fontSize: '0.9rem', fontWeight: 'bold' }}>大人気</div>
                        <h3 style={{ color: '#5A5A5A', borderBottom: '2px solid #ddd', paddingBottom: '10px', marginBottom: '20px' }}>こつばん調整受け放題コース</h3>
                        <p style={{ marginBottom: '20px' }}>
                            継続的に通って体質改善したい方におすすめ。<br />
                            産後の骨盤矯正や、慢性的な痛みの改善に最適です。
                        </p>

                        <div style={{ background: '#FFF5F5', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                            <h4 style={{ color: '#D16D6D', marginBottom: '5px' }}>👶 産後ママ応援特典</h4>
                            <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>産後6ヶ月までのお子様をお持ちのママは<br /><span style={{ color: '#D16D6D' }}>アフターケアコースが</span> <span style={{ fontSize: '1.2rem', color: 'red' }}>6,000円引き</span>！</p>
                        </div>

                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <th style={{ textAlign: 'left', padding: '15px 0', color: '#666' }}>スタンダードコース</th>
                                    <td style={{ textAlign: 'right', padding: '15px 0', fontWeight: 'bold', fontSize: '1.2rem' }}>18,800円/月</td>
                                </tr>
                                <tr>
                                    <th style={{ textAlign: 'left', padding: '15px 0', color: '#666' }}>アフターケアコース<br /><span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>（骨盤サポートパンツ付）</span></th>
                                    <td style={{ textAlign: 'right', padding: '15px 0', fontWeight: 'bold', fontSize: '1.2rem' }}>32,600円/月</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Regular Menu */}
                    <div className="card" style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: '#8EB8B8', borderBottom: '2px solid #8EB8B8', paddingBottom: '10px', marginBottom: '20px' }}>カイロプラクティック（通常施術）</h3>
                        <p style={{ marginBottom: '20px' }}>
                            骨格の歪みから調整し、体の内側から改善します。<br />
                            単に症状を軽くするだけでなく、予防アドバイスも提供しています。
                        </p>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <th style={{ textAlign: 'left', padding: '15px 0', color: '#666' }}>全身施術・初回</th>
                                    <td style={{ textAlign: 'right', padding: '15px 0', fontWeight: 'bold', fontSize: '1.2rem' }}>5,500円</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <th style={{ textAlign: 'left', padding: '15px 0', color: '#666' }}>2回目以降</th>
                                    <td style={{ textAlign: 'right', padding: '15px 0', fontWeight: 'bold', fontSize: '1.2rem' }}>4,500円</td>
                                </tr>
                                <tr>
                                    <th style={{ textAlign: 'left', padding: '15px 0', color: '#666' }}>学生（全ての学生さん）</th>
                                    <td style={{ textAlign: 'right', padding: '15px 0', fontWeight: 'bold', fontSize: '1.2rem' }}>2,800円</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Beauty Menu */}
                    <div className="card">
                        <h3 style={{ color: '#D16D6D', borderBottom: '2px solid #D16D6D', paddingBottom: '10px', marginBottom: '20px' }}>美容メニュー（骨×肌エステ）</h3>
                        <p style={{ marginBottom: '20px' }}>
                            骨格調整とエステを組み合わせたトータルケア。<br />
                            全身施術とセットだと <span style={{ fontWeight: 'bold', color: '#D16D6D' }}>2,500円</span> で受けられます。
                        </p>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <th style={{ textAlign: 'left', padding: '15px 0', color: '#666' }}>ドライヘッドスパ</th>
                                    <td style={{ textAlign: 'right', padding: '15px 0', fontWeight: 'bold', fontSize: '1.1rem' }}>3,300円</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <th style={{ textAlign: 'left', padding: '15px 0', color: '#666' }}>ハンドリフレ</th>
                                    <td style={{ textAlign: 'right', padding: '15px 0', fontWeight: 'bold', fontSize: '1.1rem' }}>3,300円</td>
                                </tr>
                                <tr>
                                    <th style={{ textAlign: 'left', padding: '15px 0', color: '#666' }}>膝下リンパケア</th>
                                    <td style={{ textAlign: 'right', padding: '15px 0', fontWeight: 'bold', fontSize: '1.1rem' }}>3,300円</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>

            <Section title={{ sub: 'FLOW', main: '施術の流れ' }} className="bg-white">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <div key={num} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                <div style={{
                                    background: '#E8C1C1', color: 'white', width: '40px', height: '40px',
                                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 'bold', flexShrink: 0
                                }}>
                                    {num}
                                </div>
                                <div style={{ width: '100%' }}>
                                    <h4 style={{ marginBottom: '10px' }}>
                                        {num === 1 && 'カウンセリング・ヒアリング'}
                                        {num === 2 && '検査・状態チェック'}
                                        {num === 3 && '施術'}
                                        {num === 4 && 'アフター説明・確認'}
                                        {num === 5 && 'お会計・次回予約'}
                                    </h4>

                                    {/* Flow Images */}
                                    {num === 1 && (
                                        <div style={{ marginBottom: '15px', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
                                            <img src="/images/flow_counseling.jpg" alt="カウンセリングの様子" style={{ width: '100%' }} />
                                        </div>
                                    )}
                                    {num === 2 && (
                                        <div style={{ marginBottom: '15px', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
                                            <img src="/images/flow_inspection.jpg" alt="検査・状態チェックの様子" style={{ width: '100%' }} />
                                        </div>
                                    )}
                                    {num === 3 && (
                                        <div style={{ marginBottom: '15px', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
                                            <img src="/images/flow_treatment.jpg" alt="施術の様子" style={{ width: '100%' }} />
                                        </div>
                                    )}
                                    {num === 4 && (
                                        <div style={{ marginBottom: '15px', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
                                            <img src="/images/flow_after.jpg" alt="アフター説明の様子" style={{ width: '100%' }} />
                                        </div>
                                    )}

                                    <p style={{ fontSize: '0.9rem', color: '#666' }}>
                                        {num === 1 && 'まずはお話をじっくり伺います。痛い場所、いつから辛いか、どんな時に困るかなど、なんでもお話しください。'}
                                        {num === 2 && '体の動きや歪みを確認します。鏡を使ってご自身でも今の姿勢を見ていただきます。'}
                                        {num === 3 && 'バキバキしないソフトな手技で筋肉をほぐし、骨格を整えます。リラックスして受けていただけます。'}
                                        {num === 4 && '施術後の変化を確認します。また、日常生活で気をつけることや簡単なセルフケアをお伝えします。'}
                                        {num === 5 && '強引な勧誘は一切ありません。最適な通院ペースは提案しますが、ご自身のペースで決めていただけます。'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
