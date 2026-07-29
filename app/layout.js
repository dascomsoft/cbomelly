import './globals.css'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Clarity from './components/Clarity'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['300', '400', '600', '700', '800'],
})

export const metadata = {
  metadataBase: new URL('https://melly.cm'),

  title: {
    default: 'Melly Groupe | melly — Immobilier, Market & Emploi au Cameroun',
    template: '%s | Melly Groupe - melly Cameroun',
  },

  description:
    "Melly Groupe via melly : leader de l'immobilier au Cameroun. Achetez des terrains sécurisés à Yaoundé, SOA, Nkometou, Barrière et Mbankomo. Découvrez Melly Market et Melly Emploi.",

  keywords: [
    'Melly Groupe', 'melly', 'melly Immobilier', 'immobilier Cameroun',
    'terrains Yaoundé', 'achat terrain Cameroun', 'Melly Market', 'Melly Emploi',
    'SOA terrain', 'Nkometou terrain', 'Mbankomo terrain', 'Barrière Yaoundé terrain',
  ],

  authors: [{ name: 'Melly Groupe', url: 'https://melly.cm' }],
  creator: 'Melly Groupe',
  publisher: 'Melly Groupe',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://melly.cm',
    siteName: 'Melly Groupe - melly',
    title: 'Melly Groupe | melly — Immobilier, Market & Emploi au Cameroun',
    description: 'Leader de l\'immobilier au Cameroun. Terrains sécurisés, Market et Emploi.',
    images: [
      {
        url: '/images/melly-logo.png',
        width: 800,
        height: 600,
        alt: 'Melly Groupe Logo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Melly Groupe | Melly',
    description: 'Leader de l\'immobilier au Cameroun.',
    images: ['/images/melly-logo.png'],
  },

  icons: {
    icon: [
      { url: '/images/melly-logo.png', type: 'image/png', sizes: '32x32' },
      { url: '/images/melly-logo.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/images/melly-logo.png',
    apple: [
      { url: '/images/melly-logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  other: {
    'theme-color': '#D4AF37',
    'msapplication-TileColor': '#D4AF37',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Melly Groupe - Cbomelly',
  url: 'https://melly.cm',
  logo: 'https://melly.cm/images/melly-logo.png',
  description: 'Leader de l\'immobilier au Cameroun.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+237-699-999-999',
    contactType: 'Service Client',
    areaServed: 'CM',
    availableLanguage: ['French', 'English'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={nunito.variable}>
      <body className={`${nunito.className} antialiased`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#D4AF37] focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]"
        >
          Aller au contenu principal
        </a>

        <Navbar />

        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <Footer />

        <BackToTop />

        {/* ===== MICROSOFT CLARITY (composant client robuste) ===== */}
        <Clarity />

        {/* ===== GOOGLE ANALYTICS (déplacé à l'intérieur du body) ===== */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  )
}