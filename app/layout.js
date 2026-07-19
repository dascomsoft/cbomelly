import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

// ============================================
// MÉTADONNÉES SEO PREMIUM POUR MELLY GROUPE
// ============================================
export const metadata = {
  title: {
    default: 'Melly Groupe | Cbomelly - Immobilier, Market & Emploi au Cameroun',
    template: '%s | Melly Groupe - Cbomelly Cameroun',
  },
  description: 'Melly Groupe via Cbomelly : Leader de l\'immobilier au Cameroun. Achetez des terrains sécurisés à Yaoundé, SOA, Nkometou, Barrière et Mbankomo. Découvrez aussi Melly Market pour vos achats et Melly Emploi pour votre carrière.',
  keywords: [
    'Melly Groupe', 'Cbomelly', 'Cbomelly Immobilier', 'immobilier Cameroun',
    'terrains Yaoundé', 'achat terrain Cameroun', 'Melly Market', 'Melly Emploi',
    'SOA terrain', 'Nkometou terrain', 'Mbankomo terrain', 'Barrière Yaoundé terrain',
  ].join(', '),
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
    siteName: 'Melly Groupe - Melly',
    title: 'Melly Groupe | Melly - Immobilier, Market & Emploi au Cameroun',
    description: 'Leader de l\'immobilier au Cameroun. Terrains sécurisés, Market et Emploi.',
    images: [{ url: '/images/melly-logo.png', width: 800, height: 600, alt: 'Melly Groupe Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melly Groupe | Melly',
    description: 'Leader de l\'immobilier au Cameroun.',
    images: ['/images/melly-logo.png'],
  },
  icons: {
    icon: '/images/melly-logo.png',
    apple: '/images/melly-logo.png',
  },
  metadataBase: new URL('https://cbomelly.cm'),
}

// Structured Data
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

// ============================================
// LAYOUT PRINCIPAL
// ============================================
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#D4AF37" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-nunito antialiased">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#D4AF37] focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Aller au contenu principal
        </a>
        
        <Navbar />
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        <Footer />
        
        <BackToTop />
      </body>
    </html>
  )
}