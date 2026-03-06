import Section from '../../components/Section';

export const metadata = {
    title: 'よくある質問 | 整体院やまもと',
};

export default function FaqPage() {
    const faqs = [
        { q: '駐車場はありますか？', a: 'はい、2台完備しています。' },
        { q: '子供連れでも大丈夫ですか？', a: 'もちろんです。キッズスペースもございますので、安心してお越しください。ご予約時にお伝えいただけるとスムーズです。' },
        { q: 'どのような服装で行けばいいですか？', a: '動きやすいジャージやスウェットなどがおすすめです。お着替えも【あり/なし】です。' },
        { q: '予約は必要ですか？', a: 'はい、当院は完全予約制となっております。LINEまたはお電話でご予約をお願いします。' },
        { q: '保険は使えますか？', a: '当院の整体は自費診療（実費）となり、健康保険はご利用いただけません。その分、保険の枠にとらわれない質の高い施術を提供しています。' },
        { q: 'クレジットカードは使えますか？', a: '現金のみ／PayPay／各種カードに対応しています【要確認】。' },
        { q: '産後はいつから受けられますか？', a: '産後1ヶ月検診で問題がなければ受けていただけます。帝王切開の場合は2ヶ月程度あけていただくことが多いですが、まずはご相談ください。' },
    ];

    return (
        <Section title={{ sub: 'FAQ', main: 'よくある質問' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <dl style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {faqs.map((item, index) => (
                        <div key={index} className="card" style={{ padding: '30px' }}>
                            <dt style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px', color: '#8EB8B8', display: 'flex', alignItems: 'center' }}>
                                <span style={{ background: '#8EB8B8', color: 'white', padding: '2px 8px', borderRadius: '4px', marginRight: '10px', fontSize: '0.8rem' }}>Q</span>
                                {item.q}
                            </dt>
                            <dd style={{ lineHeight: '1.8', marginLeft: '35px' }}>
                                {item.a}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </Section>
    );
}
