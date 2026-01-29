import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CtaButton from '../components/CtaButton';

export const metadata = {
  metadataBase: new URL('https://yamamoto-hp.vercel.app'),
  title: '整体院やまもと | 鳥取県中部の産後骨盤矯正・妊婦整体',
  description: '鳥取県倉吉市の整体院やまもと。妊婦さん、産後ママ専門の「中部の骨盤先生」。腰痛、肩こり、体型戻しでお悩みの方へ。安心のソフトな施術。',
  openGraph: {
    title: '整体院やまもと | 鳥取県中部の産後骨盤矯正・妊婦整体',
    description: '鳥取県倉吉市の整体院やまもと。妊婦さん、産後ママ専門の「中部の骨盤先生」。',
    url: 'https://yamamoto-hp.vercel.app',
    siteName: '整体院やまもと',
    images: [
      {
        url: '/images/top_hero.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '整体院やまもと',
    image: '/images/top_hero.jpg',
    description: '鳥取県倉吉市の整体院やまもと。妊婦さん、産後ママ専門の「中部の骨盤先生」。',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '倉吉市',
      addressRegion: '鳥取県',
      addressCountry: 'JP'
    },
    priceRange: '¥5,500'
  };

  return (
    <html lang="ja">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <CtaButton />
      </body>
    </html>
  );
}
