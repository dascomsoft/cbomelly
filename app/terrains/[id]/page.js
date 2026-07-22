'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

// ============================================
// DONNÉES RÉELLES DES TERRAINS CBOMELLY
// ============================================
const terrains = [
  // LOTS POUR PROJETS
  {
    id: 'cbo-pro-001',
    code: 'Kometou Ngalli 2',
    name: 'Lot pour Projet - Kometou Ngalli 2',
    category: 'Projet',
    surface: 50000,
    prixM2: 5000,
    prix: 250000000,
    localisation: 'Kometou Ngalli 2',
    zone: 'Nkometou',
    statut: 'Disponible',
    type: 'Projet',
    image: '/images/terrain1.jpg',
    images: ['/images/terrain1.jpg', '/images/terrain-background.jpg', '/images/terrain-background2.jpg'],
    description: 'Vaste terrain de 5 hectares idéal pour projets immobiliers, agricoles ou industriels. Terrain titré et loti, situé dans une zone en plein développement. Excellent potentiel de plus-value.',
    caracteristiques: [
      'Titre foncier original disponible',
      'Terrain entièrement loti et borné',
      'Zone en pleine expansion',
      'Accès route praticable',
      'Idéal pour grand projet immobilier',
      'Possibilité de morcellement',
      'Proximité des axes routiers',
      'Cadre paisible et sécurisé',
    ],
    documents: [
      'Titre foncier original',
      'Plan de situation cadastral',
      'Certificat de non-hypothèque',
      'Quitus fiscal à jour',
      'Attestation de bornage',
    ],
    credit: true,
    badge: 'Projet',
    badgeColor: 'bg-blue-500',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },
  {
    id: 'cbo-pro-002',
    code: 'Kometou Nkol Obili',
    name: 'Lot pour Projet - Kometou Nkol Obili',
    category: 'Projet',
    surface: 4000,
    prixM2: 3000,
    prix: 12000000,
    localisation: 'Kometou Nkol Obili',
    zone: 'Nkometou',
    statut: 'Disponible',
    type: 'Bon Plan',
    image: '/images/terrain2.jpg',
    images: ['/images/terrain2.jpg', '/images/terrain7.jpeg', '/images/terrain-background3.jpeg'],
    description: 'Terrain de 4000 m² parfait pour projet de construction ou investissement locatif. Zone calme et accessible. Excellent rapport qualité/prix pour un investissement sécurisé.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti et borné',
      'Zone calme et résidentielle',
      'Bon rapport qualité/prix',
      'Accès facile',
      'Eau et électricité à proximité',
    ],
    documents: [
      'Titre foncier',
      'Plan cadastral',
      'Certificat de propriété',
      'Quitus fiscal',
    ],
    credit: true,
    badge: 'Bon Plan',
    badgeColor: 'bg-green-500',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },
  {
    id: 'cbo-pro-003',
    code: 'Kometou Essong Mintsang',
    name: 'Lot pour Projet - Kometou Essong Mintsang',
    category: 'Projet',
    surface: 5000,
    prixM2: 5000,
    prix: 25000000,
    localisation: 'Kometou Essong Mintsang',
    zone: 'Nkometou',
    statut: 'Disponible',
    type: 'Premium',
    image: '/images/terrain3.jpg',
    images: ['/images/terrain3.jpg', '/images/terrain10.jpeg', '/images/terrain.webp'],
    description: 'Superbe terrain de 5000 m² dans un quartier prisé de Nkometou. Proximité des commodités et axes routiers. Un investissement sûr dans une zone à fort potentiel.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain entièrement loti',
      'Quartier prisé et sécurisé',
      'Proche des commodités',
      'Zone constructible',
      'Viabilisé',
    ],
    documents: [
      'Titre foncier original',
      'Plan de situation',
      'Certificat de non-hypothèque',
      'Attestation de viabilisation',
    ],
    credit: true,
    badge: 'Premium',
    badgeColor: 'bg-[#D4AF37]',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },

  // LOTS POUR HABITATION
  {
    id: 'cbo-hab-001',
    code: 'SOA/Banda',
    name: 'Lot d\'Habitation - SOA/Banda',
    category: 'Habitation',
    surface: 10000,
    prixM2: 12000,
    prix: 120000000,
    localisation: 'SOA/Banda',
    zone: 'SOA',
    statut: 'Disponible',
    type: 'Coup de Cœur',
    image: '/images/terrain4.png',
    images: ['/images/terrain4.png', '/images/terrain5.jpg', '/images/terrain7.jpg'],
    description: 'Magnifique terrain d\'un hectare à SOA/Banda. Cadre idéal pour résidence principale ou résidence secondaire. Environnement paisible et sécurisé avec une vue dégagée.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti et borné',
      'Cadre paisible et verdoyant',
      'Quartier sécurisé',
      'Vue dégagée',
      'Idéal résidence de standing',
    ],
    documents: [
      'Titre foncier original',
      'Plan cadastral',
      'Certificat de non-hypothèque',
      'Quitus fiscal',
    ],
    credit: true,
    badge: 'Coup de Cœur',
    badgeColor: 'bg-red-500',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },
  {
    id: 'cbo-hab-002',
    code: 'SOA/Avant Sous-Préfecture',
    name: 'Lot d\'Habitation - SOA Centre',
    category: 'Habitation',
    surface: 2000,
    prixM2: 15000,
    prix: 30000000,
    localisation: 'SOA, avant la Sous-Préfecture',
    zone: 'SOA',
    statut: 'Disponible',
    type: 'Emplacement Or',
    image: '/images/terrain5.jpg',
    images: ['/images/terrain5.jpg', '/images/terrain8.jpeg', '/images/terrain-background.jpg'],
    description: 'Terrain de 2000 m² idéalement situé avant la Sous-Préfecture de SOA. Proximité immédiate des services administratifs, écoles et commerces. Emplacement stratégique.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Proche centre administratif',
      'Commerces à proximité',
      'Écoles à proximité',
      'Accès route goudronnée',
    ],
    documents: [
      'Titre foncier original',
      'Plan de situation',
      'Certificat de non-hypothèque',
      'Quitus fiscal',
    ],
    credit: true,
    badge: 'Emplacement Or',
    badgeColor: 'bg-[#D4AF37]',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },
  {
    id: 'cbo-hab-003',
    code: 'SOA/Après CES de Baaba',
    name: 'Lot d\'Habitation - SOA Baaba',
    category: 'Habitation',
    surface: 1000,
    prixM2: 5000,
    prix: 5000000,
    localisation: 'SOA, après le CES de Baaba',
    zone: 'SOA',
    statut: 'Disponible',
    type: 'Accessible',
    image: '/images/terrain7.jpg',
    images: ['/images/terrain7.jpg', '/images/terrain1.jpg', '/images/terrain2.jpg'],
    description: 'Terrain accessible de 1000 m² après le CES de Baaba. Parfait pour une première acquisition ou un investissement locatif. Prix très compétitif.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Prix très accessible',
      'Idéal primo-accédant',
      'Zone en développement',
      'Bon potentiel de plus-value',
    ],
    documents: [
      'Titre foncier',
      'Plan de situation',
      'Certificat de propriété',
    ],
    credit: true,
    badge: 'Accessible',
    badgeColor: 'bg-green-500',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },
  {
    id: 'cbo-hab-004',
    code: 'Kozoa Entrée Ministre',
    name: 'Lot d\'Habitation - Kozoa Entrée Ministre',
    category: 'Habitation',
    surface: 1000,
    prixM2: 25000,
    prix: 25000000,
    localisation: 'Kozoa, Entrée Ministre',
    zone: 'Yaoundé',
    statut: 'Disponible',
    type: 'Premium',
    image: '/images/terrain8.jpeg',
    images: ['/images/terrain8.jpeg', '/images/terrain10.jpeg', '/images/terrain-background2.jpg'],
    description: 'Terrain premium de 1000 m² à Kozoa, Entrée Ministre. Quartier huppé de Yaoundé, idéal pour résidence de standing. Environnement sécurisé et prestigieux.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Quartier huppé et sécurisé',
      'Résidence de standing',
      'Proche ambassades',
      'Cadre prestigieux',
    ],
    documents: [
      'Titre foncier original',
      'Plan cadastral',
      'Certificat de non-hypothèque',
      'Quitus fiscal',
    ],
    credit: true,
    badge: 'Premium',
    badgeColor: 'bg-[#D4AF37]',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },
  {
    id: 'cbo-hab-005',
    code: 'Kozoa Derrière Lycée',
    name: 'Lot d\'Habitation - Kozoa Derrière Lycée',
    category: 'Habitation',
    surface: 1000,
    prixM2: 27500,
    prix: 27500000,
    localisation: 'Kozoa, derrière le Lycée',
    zone: 'Yaoundé',
    statut: 'Disponible',
    type: 'Familial',
    image: '/images/terrain10.jpeg',
    images: ['/images/terrain10.jpeg', '/images/terrain-background3.jpeg', '/images/terrain.webp'],
    description: 'Terrain de 1000 m² derrière le Lycée de Kozoa. Emplacement stratégique proche des établissements scolaires. Idéal pour une famille.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Proche établissements scolaires',
      'Quartier familial',
      'Environnement calme',
      'Sécurisé',
    ],
    documents: [
      'Titre foncier',
      'Plan de situation',
      'Certificat de non-hypothèque',
    ],
    credit: true,
    badge: 'Familial',
    badgeColor: 'bg-blue-500',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },

  // NOUVELLES OFFRES CBOROU
  {
    id: 'cborou-001',
    code: 'CBOROU1',
    name: 'Lot d\'Habitation - Mendong Route de Mfou',
    category: 'Habitation',
    surface: 2000,
    prixM2: 13000,
    prix: 26000000,
    localisation: 'Mendong, sur la route de Mfou',
    zone: 'Yaoundé',
    statut: 'Disponible',
    type: 'Nouveau',
    image: '/images/terrain1.jpg',
    images: ['/images/terrain1.jpg', '/images/terrain-background.jpg', '/images/terrain5.jpg'],
    description: 'Beau terrain de 2000 m² sur la route de Mfou à Mendong. Zone en plein développement, excellent investissement avec un fort potentiel de plus-value.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Zone en plein développement',
      'Excellent investissement',
      'Accès route principale',
      'Proximité transports',
    ],
    documents: [
      'Titre foncier',
      'Plan de situation',
      'Certificat de propriété',
      'Quitus fiscal',
    ],
    credit: true,
    badge: 'Nouveau',
    badgeColor: 'bg-green-500',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },
  {
    id: 'cborou-002',
    code: 'CBOROU2',
    name: 'Lot d\'Habitation - Nkoabang',
    category: 'Habitation',
    surface: 10000,
    prixM2: 15000,
    prix: 150000000,
    localisation: 'Nkoabang',
    zone: 'Yaoundé',
    statut: 'Disponible',
    type: 'Grand Lot',
    image: '/images/terrain2.jpg',
    images: ['/images/terrain2.jpg', '/images/terrain7.jpeg', '/images/terrain8.jpeg'],
    description: 'Grand terrain d\'un hectare à Nkoabang. Idéal pour résidence spacieuse ou projet de lotissement. Superficie rare dans cette zone.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Grande superficie rare',
      'Polyvalent (résidentiel/lotissement)',
      'Zone d\'avenir',
      'Cadre agréable',
    ],
    documents: [
      'Titre foncier original',
      'Plan cadastral',
      'Certificat de non-hypothèque',
      'Quitus fiscal',
    ],
    credit: true,
    badge: 'Grand Lot',
    badgeColor: 'bg-purple-500',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },
  {
    id: 'cborou-003',
    code: 'CBOROU3',
    name: 'Lot d\'Habitation - Nkolnda',
    category: 'Habitation',
    surface: 1500,
    prixM2: 10000,
    prix: 15000000,
    localisation: 'Nkolnda',
    zone: 'Yaoundé',
    statut: 'Disponible',
    type: 'Bon Plan',
    image: '/images/terrain3.jpg',
    images: ['/images/terrain3.jpg', '/images/terrain4.png', '/images/terrain-background3.jpeg'],
    description: 'Terrain de 1500 m² à Nkolnda. Bon rapport qualité/prix dans une zone résidentielle agréable et en développement.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Bon rapport qualité/prix',
      'Zone résidentielle agréable',
      'Quartier calme',
      'Accès facile',
    ],
    documents: [
      'Titre foncier',
      'Plan de situation',
      'Certificat de propriété',
    ],
    credit: true,
    badge: 'Bon Plan',
    badgeColor: 'bg-green-500',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },
  {
    id: 'cborou-004',
    code: 'CBOROU4',
    name: 'Lot d\'Habitation - Mekoumbou',
    category: 'Habitation',
    surface: 500,
    prixM2: 10000,
    prix: 5000000,
    localisation: 'Mekoumbou',
    zone: 'Yaoundé',
    statut: 'Disponible',
    type: 'Familial',
    image: '/images/terrain5.jpg',
    images: ['/images/terrain5.jpg', '/images/terrain7.jpg', '/images/terrain10.jpeg'],
    description: 'Terrain de 500 m² à Mekoumbou. Parfait pour une maison familiale dans un cadre paisible. Idéal pour un premier achat.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Cadre paisible',
      'Idéal maison familiale',
      'Premier achat accessible',
      'Quartier résidentiel',
    ],
    documents: [
      'Titre foncier',
      'Plan de situation',
      'Certificat de non-hypothèque',
    ],
    credit: true,
    badge: 'Familial',
    badgeColor: 'bg-blue-500',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },
]

// ============================================
// COMPOSANT PRINCIPAL
// ============================================
export default function TerrainDetailPage() {
  const params = useParams()
  const { id } = params

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  const terrain = terrains.find(t => t.id === id)

  // Formatage
  const formatPrice = (prix) => {
    if (prix >= 1000000) {
      return (prix / 1000000).toFixed(0) + ' 000 000 FCFA'
    }
    return new Intl.NumberFormat('fr-FR').format(prix) + ' FCFA'
  }

  const formatSurface = (surface) => {
    if (surface >= 10000) {
      return (surface / 10000).toFixed(1) + ' hectares'
    }
    return new Intl.NumberFormat('fr-FR').format(surface) + ' m²'
  }

  // WhatsApp
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Bonjour Cbomelly,\n\n` +
      `Je suis intéressé(e) par le terrain suivant :\n\n` +
      `*Référence : ${terrain.code}*\n` +
      `*Localisation :* ${terrain.localisation}\n` +
      `*Surface :* ${formatSurface(terrain.surface)}\n` +
      `*Prix/m² :* ${new Intl.NumberFormat('fr-FR').format(terrain.prixM2)} FCFA\n` +
      `*Prix total :* ${formatPrice(terrain.prix)}\n\n` +
      `Pouvez-vous me donner plus d'informations et organiser une visite ?\n` +
      `J'aimerais consulter les documents disponibles.\n\n` +
      `Merci !`
    )
    window.open(`https://wa.me/${terrain.whatsapp}?text=${message}`, '_blank')
  }

  // Page 404 si terrain non trouvé
  if (!terrain) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-slate-900">
        <div className="text-center px-4">
          <svg className="w-24 h-24 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          <h1 className="text-4xl font-extrabold text-white mb-4">Terrain non trouvé</h1>
          <p className="text-gray-400 mb-8">Ce terrain n'existe pas ou a été retiré.</p>
          <Link
            href="/terrains"
            className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 inline-block"
          >
            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voir tous les terrains
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={terrain.image}
            alt={terrain.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/95"></div>
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto pt-20 text-center">
          {/* Fil d'Ariane */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6" data-aos="fade-up">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Accueil</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/terrains" className="hover:text-[#D4AF37] transition-colors">Terrains</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#D4AF37]">{terrain.code}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 justify-center mb-4" data-aos="fade-up" data-aos-delay="100">
            <span className={`${terrain.badgeColor} text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg`}>
              {terrain.badge}
            </span>
            <span className="bg-green-900/50 text-green-400 px-4 py-1.5 rounded-full text-sm font-bold border border-green-500/30">
              {terrain.statut}
            </span>
            {terrain.credit && (
              <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-1.5 rounded-full text-sm font-bold border border-[#D4AF37]/30">
                Crédit Possible
              </span>
            )}
            <span className="bg-slate-800/80 backdrop-blur-sm text-gray-300 px-4 py-1.5 rounded-full text-sm font-bold border border-gray-600">
              Prix Taxé
            </span>
          </div>

          {/* Titre */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4" data-aos="fade-up" data-aos-delay="200">
            {terrain.name}
          </h1>

          {/* Localisation */}
          <p className="text-xl text-gray-300 mb-6" data-aos="fade-up" data-aos-delay="300">
            <svg className="w-5 h-5 inline-block mr-2 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {terrain.localisation} • {terrain.zone}
          </p>

          {/* Prix */}
          <div className="text-5xl font-extrabold text-[#D4AF37] mb-2" data-aos="fade-up" data-aos-delay="400">
            {formatPrice(terrain.prix)}
          </div>
          <p className="text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="500">
            Soit {new Intl.NumberFormat('fr-FR').format(terrain.prixM2)} FCFA / m²
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="600">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Acheter via WhatsApp
            </button>
            <a
              href={`tel:${terrain.telephone}`}
              className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler : {terrain.telephone.replace('237', '')}
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONTENU PRINCIPAL */}
      {/* ============================================ */}
      <section className="section-padding bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50" data-aos="fade-up">
                <h2 className="text-3xl font-extrabold mb-6 flex items-center">
                  <svg className="w-8 h-8 text-[#D4AF37] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  Description
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">{terrain.description}</p>
              </div>

              {/* Galerie */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50" data-aos="fade-up">
                <h2 className="text-3xl font-extrabold mb-6 flex items-center">
                  <svg className="w-8 h-8 text-[#D4AF37] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Galerie Photos
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {terrain.images.map((img, index) => (
                    <div key={index} className="relative h-48 rounded-xl overflow-hidden group cursor-pointer">
                      <Image
                        src={img}
                        alt={`${terrain.name} - Photo ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50" data-aos="fade-up">
                <h2 className="text-3xl font-extrabold mb-6 flex items-center">
                  <svg className="w-8 h-8 text-[#D4AF37] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Documents Disponibles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {terrain.documents.map((doc, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-slate-900/50 p-4 rounded-xl border border-gray-700/30 hover:border-[#D4AF37]/50 transition-colors duration-300">
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-gray-300 font-medium">{doc}</span>
                        <p className="text-xs text-green-400 mt-1">✓ Vérifié</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Résumé */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 sticky top-24" data-aos="fade-left">
                <h3 className="text-2xl font-extrabold mb-6 text-center">Résumé du Terrain</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                    <span className="text-gray-400">Référence</span>
                    <span className="font-bold text-[#D4AF37]">{terrain.code}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                    <span className="text-gray-400">Surface</span>
                    <span className="font-bold text-white">{formatSurface(terrain.surface)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                    <span className="text-gray-400">Prix / m²</span>
                    <span className="font-bold text-white">{new Intl.NumberFormat('fr-FR').format(terrain.prixM2)} FCFA</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                    <span className="text-gray-400">Prix Total</span>
                    <span className="font-bold text-[#D4AF37] text-xl">{formatPrice(terrain.prix)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                    <span className="text-gray-400">Localisation</span>
                    <span className="font-bold text-white text-right">{terrain.localisation}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                    <span className="text-gray-400">Zone</span>
                    <span className="font-bold text-white">{terrain.zone}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                    <span className="text-gray-400">Statut</span>
                    <span className="text-green-400 font-bold">{terrain.statut}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">Catégorie</span>
                    <span className="font-bold text-[#D4AF37]">{terrain.category}</span>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 mb-3 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  Contacter via WhatsApp
                </button>
                <a
                  href={`tel:${terrain.telephone}`}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/30 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Appeler
                </a>
              </div>

              {/* Caractéristiques */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50" data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-xl font-extrabold mb-6 flex items-center">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Caractéristiques
                </h3>
                <ul className="space-y-3">
                  {terrain.caracteristiques.map((carac, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{carac}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info importante */}
              <div className="bg-[#D4AF37]/10 rounded-2xl p-6 border border-[#D4AF37]/30" data-aos="fade-left" data-aos-delay="400">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#D4AF37] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-[#D4AF37] mb-2">Information Importante</h4>
                    <p className="text-gray-300 text-sm">
                      Vous visitez le terrain, si cela vous intéresse, on vous montre les documents originaux. Tous nos terrains sont titrés et lotis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA FINAL */}
      {/* ============================================ */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center px-4" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Intéressé par ce <span className="text-[#D4AF37]">Terrain</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactez-nous pour organiser une visite et consulter les documents sur place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/terrains"
              className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-slate-900 px-8 py-4 rounded-lg font-bold transition-all duration-300"
            >
              Voir d'autres terrains
            </Link>
            <Link
              href="/conseils"
              className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 px-8 py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
            >
              Guide d'achat
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}