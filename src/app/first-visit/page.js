import Section from '../../components/Section';

export const metadata = {
    title: '初めての方へ | 整体院やまもと',
};

export default function FirstVisitPage() {
    return (
        <>
            <Section title={{ sub: 'FIRST VISIT', main: '初めての方へ' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="card" style={{ padding: '40px', marginBottom: '40px' }}>
                        <h3 style={{ color: '#8EB8B8', marginBottom: '20px', textAlign: 'center' }}>院長からのご挨拶</h3>
                        <div style={{ width: '100%', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="/images/director.jpg"
                                alt="院長 山本たかひろ"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '12px',
                                    maxHeight: '400px',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <p style={{ marginBottom: '20px' }}>
                            はじめまして。「整体院やまもと」の山本です。<br />
                            当院のホームページをご覧いただきありがとうございます。
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            私はカイロプラクターとして、地域の皆様の健康をサポートさせていただいております。<br />
                            その中で多くの産後ママさんが、ご自身の体のケアを後回しにして頑張りすぎている姿を見てきました。
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            「ママが笑顔なら、家族も笑顔になる」<br />
                            そんな想いで、痛みのケアだけでなく、心もホッと休まる場所を作りたいと思っています。
                        </p>
                        <p>
                            どうぞ、お友達の家に遊びに行くような感覚で、気軽にお越しください。<br />
                            あなたにお会いできるのを楽しみにしております。
                        </p>
                        <p style={{ textAlign: 'right', marginTop: '20px', fontWeight: 'bold' }}>
                            整体院やまもと 院長<br />
                            山本 たかひろ
                        </p>
                    </div>
                    <h3 style={{ marginBottom: '20px', borderLeft: '4px solid #F2C4C4', paddingLeft: '10px' }}>よくあるご質問</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                        <div className="card">
                            <h4 style={{ marginBottom: '10px', color: '#4A4A4A' }}>Q. どのような服装で行けばいいですか？</h4>
                            <p style={{ color: '#666' }}>A. 動きやすい服装（ジャージやスウェットなど）がおすすめです。スカートや硬いデニムはお控えください。</p>
                        </div>
                        <div className="card">
                            <h4 style={{ marginBottom: '10px', color: '#4A4A4A' }}>Q. 子供を連れて行っても大丈夫ですか？</h4>
                            <p style={{ color: '#666' }}>A. はい、大丈夫です。キッズスペースやバウンサーを完備しておりますので、安心してお越しください。</p>
                        </div>
                        <div className="card">
                            <h4 style={{ marginBottom: '10px', color: '#4A4A4A' }}>Q. 駐車場はありますか？</h4>
                            <p style={{ color: '#666' }}>A. はい、院の前に駐車スペースがございます。</p>
                        </div>
                    </div>
                </div>
            </Section >
        </>
    );
}
