import Link from 'next/link';
import Section from '../components/Section';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        color: '#fff',
        textAlign: 'center'
      }}>
        {/* Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}>
          <img
            src="/images/top_hero.jpg"
            alt="整体院やまもと 施術風景"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.4)' // darken overlay for text readability
          }}></div>
        </div>

        <div className="container" style={{ zIndex: 1, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#fff', fontWeight: 'bold' }}>
            <span style={{ display: 'block', fontSize: '1.2rem', marginBottom: '15px', fontWeight: 'normal' }}>鳥取県中部・倉吉市の「中部の骨盤先生」</span>
            産後の体と心に、<br />安心できる整体を。
          </h1>
          <p style={{ marginBottom: '30px', fontSize: '1.1rem', fontWeight: '500' }}>
            痛みを取るだけじゃなく、<br />楽に動けて、笑って過ごせる体を一緒に作りましょう。
          </p>
          <Link href="/contact" className="btn" style={{ border: 'none', fontSize: '1.1rem', padding: '15px 40px' }}>LINEで予約・相談する</Link>
        </div>
      </div>

      {/* Intro */}
      <Section id="intro">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>不安ゼロで通える整体を目指して</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            「整体って痛そう…」「ボキボキされるのが怖い」<br />
            そんな不安をお持ちの妊婦さんや産後ママさんも、どうぞご安心ください。
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            整体院やまもとは、今年で施術歴16年。<br />
            強い押しや無理な施術は一切行いません。<br />
            あなたの体の声に耳を傾け、やさしく、でもしっかりと整えていきます。
          </p>
          <p>
            「中部の骨盤先生」として、<br />
            地域のママたちが笑顔で子育てできるお手伝いをさせていただきます。
          </p>
        </div>
      </Section>

      {/* 3 Points */}
      <Section title={{ sub: 'FEATURE', main: '整体院やまもと 3つの安心' }} className="bg-white">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          <div className="card text-center">
            <div style={{ width: '60px', height: '60px', background: '#E8C1C1', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>1</div>
            <h3>強い施術はしません</h3>
            <p>バキバキしたり、痛いほど強く押したりすることはありません。産前産後のデリケートな時期でも安心して受けていただける、ソフトな施術です。</p>
          </div>
          <div className="card text-center">
            <div style={{ width: '60px', height: '60px', background: '#8EB8B8', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>2</div>
            <h3>キッズスペース・バウンサー完備</h3>
            <p>小さなお子様連れでも大歓迎です。キッズスペースやバウンサーをご用意しておりますので、ママも安心して施術を受けていただけます。</p>
          </div>
          <div className="card text-center">
            <div style={{ width: '60px', height: '60px', background: '#E8C1C1', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>3</div>
            <h3>丁寧な説明とアフターケア</h3>
            <p>今の体がどうなっているのか、分かりやすく説明します。お家でできる簡単なセルフケアもお伝えして「楽な体」を維持できるようにします。</p>
          </div>
        </div>
      </Section>

      {/* Menu Highlight */}
      <Section title={{ sub: 'MENU', main: '施術メニュー' }}>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
            <h3 style={{ color: '#8EB8B8' }}>全身施術・初回</h3>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>カウンセリングから施術まで、お身体の状態に合わせて行います。</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span>通常料金</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>5,500円（税込）</span>
            </div>
          </div>
          <div style={{ background: '#FFF5F5', padding: '15px', borderRadius: '8px', border: '1px solid #F2C4C4' }}>
            <h4 style={{ color: '#D16D6D', marginBottom: '5px' }}>👶 産後ママ応援特典</h4>
            <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>産後6ヶ月までのお子様をお持ちのママは、アフターケアコースが <span style={{ fontSize: '1.1rem', color: 'red' }}>6,000円引き</span>！</p>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>※こつばん調整受け放題コース等の月定額プランが対象です。</p>
          </div>
          <div className="text-center" style={{ marginTop: '20px' }}>
            <Link href="/services" className="btn-secondary" style={{ padding: '10px 30px', borderRadius: '50px', textDecoration: 'none', display: 'inline-block' }}>メニュー・料金一覧を見る</Link>
          </div>
        </div>
      </Section>

      {/* Call To Action */}
      <Section className="text-center" style={{ background: '#f9f9f9' }}>
        <h2 style={{ marginBottom: '20px' }}>ご予約・お問い合わせ</h2>
        <p style={{ marginBottom: '30px' }}>
          LINEから24時間受け付けております。<br />
          お体の悩み、些細なことでもお気軽にご相談ください。
        </p>
        <Link href="/contact" className="btn">LINEで予約する</Link>
      </Section>
    </>
  );
}
