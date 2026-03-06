import Section from '../../components/Section';

export const metadata = {
    title: 'よくある質問 | 整体院やまもと',
};

export default function FaqPage() {
    const faqs = [
        { q: '駐車場はありますか？', a: 'はい、2台完備しています。' },
        { q: '子供連れでも大丈夫ですか？', a: 'もちろんです。キッズスペースもございますので、安心してお越しください。ご予約時にお伝えいただけるとスムーズです。' },
        { q: 'どのような服装で行けばいいですか？', a: '動きやすいジャージやスウェットなどがおすすめです。お着替えのご用意はございませんので、必要な場合はご持参ください（院内にある試着室でお着替えいただけます）。' },
        { q: '予約は必要ですか？', a: 'はい、当院は完全予約制となっております。LINEまたはお電話でご予約をお願いします。' },
        { q: '保険は使えますか？', a: '当院の整体は自費診療（実費）となり、健康保険はご利用いただけません。その分、保険の枠にとらわれない質の高い施術を提供しています。' },
        { q: 'クレジットカードは使えますか？', a: 'クレジットカード（タッチ決済対応のものに限ります）、現金、PayPay、au PAYがご利用いただけます。' },
        { q: '産後はいつから受けられますか？', a: 'ご自身の体調に合わせて、無理のない範囲であればご自身の判断でいつからでもご来院可能です。最近では、ご本人のご希望により産後3週間から骨盤調整コースを始められた方もいらっしゃいます。' },
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
