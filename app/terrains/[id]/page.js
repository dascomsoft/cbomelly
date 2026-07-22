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
    description: 'Vaste terrain de 5 hectares idéal pour projets immobiliers, agricoles ou industriels. Terrain titré et loti, situé dans une zone en plein développement. Morcellement possible par lots de 200 m² minimum.',
    caracteristiques: [
      'Titre foncier original disponible',
      'Terrain entièrement loti et borné',
      'Zone en pleine expansion',
      'Accès route praticable',
      'Idéal pour grand projet immobilier',
      'Morcellement possible (200 m² min)',
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
    morcelable: true,
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
    description: 'Terrain de 4000 m² parfait pour projet de construction ou investissement locatif. Zone calme et accessible. Morcellement possible par lots de 200 m² minimum.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti et borné',
      'Zone calme et résidentielle',
      'Bon rapport qualité/prix',
      'Accès facile',
      'Morcellement possible (200 m² min)',
      'Eau et électricité à proximité',
    ],
    documents: [
      'Titre foncier',
      'Plan cadastral',
      'Certificat de propriété',
      'Quitus fiscal',
    ],
    credit: true,
    morcelable: true,
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
    description: 'Superbe terrain de 5000 m² dans un quartier prisé de Nkometou. Morcellement possible par lots de 200 m² minimum.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain entièrement loti',
      'Quartier prisé et sécurisé',
      'Proche des commodités',
      'Zone constructible',
      'Morcellement possible (200 m² min)',
      'Viabilisé',
    ],
    documents: [
      'Titre foncier original',
      'Plan de situation',
      'Certificat de non-hypothèque',
      'Attestation de viabilisation',
    ],
    credit: true,
    morcelable: true,
    badge: 'Premium',
    badgeColor: 'bg-[#D4AF37]',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },
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
    description: 'Magnifique terrain d\'un hectare à SOA/Banda. Cadre idéal pour résidence principale ou secondaire. Morcellement possible par lots de 200 m² minimum.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti et borné',
      'Cadre paisible et verdoyant',
      'Quartier sécurisé',
      'Vue dégagée',
      'Morcellement possible (200 m² min)',
      'Idéal résidence de standing',
    ],
    documents: [
      'Titre foncier original',
      'Plan cadastral',
      'Certificat de non-hypothèque',
      'Quitus fiscal',
    ],
    credit: true,
    morcelable: true,
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
    description: 'Terrain de 2000 m² idéalement situé avant la Sous-Préfecture de SOA. Proximité immédiate des services administratifs et commerces.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Proche centre administratif',
      'Commerces à proximité',
      'Écoles à proximité',
      'Morcellement possible (200 m² min)',
      'Accès route goudronnée',
    ],
    documents: [
      'Titre foncier original',
      'Plan de situation',
      'Certificat de non-hypothèque',
      'Quitus fiscal',
    ],
    credit: true,
    morcelable: true,
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
    description: 'Terrain accessible de 1000 m² après le CES de Baaba. Parfait pour une première acquisition. Prix très compétitif.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Prix très accessible',
      'Idéal primo-accédant',
      'Zone en développement',
      'Morcellement possible (200 m² min)',
      'Bon potentiel de plus-value',
    ],
    documents: [
      'Titre foncier',
      'Plan de situation',
      'Certificat de propriété',
    ],
    credit: true,
    morcelable: true,
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
    description: 'Terrain premium de 1000 m² à Kozoa, Entrée Ministre. Quartier huppé de Yaoundé, idéal pour résidence de standing.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Quartier huppé et sécurisé',
      'Résidence de standing',
      'Proche ambassades',
      'Morcellement possible (200 m² min)',
      'Cadre prestigieux',
    ],
    documents: [
      'Titre foncier original',
      'Plan cadastral',
      'Certificat de non-hypothèque',
      'Quitus fiscal',
    ],
    credit: true,
    morcelable: true,
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
      'Morcellement possible (200 m² min)',
      'Sécurisé',
    ],
    documents: [
      'Titre foncier',
      'Plan de situation',
      'Certificat de non-hypothèque',
    ],
    credit: true,
    morcelable: true,
    badge: 'Familial',
    badgeColor: 'bg-blue-500',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },
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
    description: 'Beau terrain de 2000 m² sur la route de Mfou à Mendong. Zone en plein développement, excellent investissement.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Zone en plein développement',
      'Excellent investissement',
      'Accès route principale',
      'Morcellement possible (200 m² min)',
      'Proximité transports',
    ],
    documents: [
      'Titre foncier',
      'Plan de situation',
      'Certificat de propriété',
      'Quitus fiscal',
    ],
    credit: true,
    morcelable: true,
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
    description: 'Grand terrain d\'un hectare à Nkoabang. Idéal pour résidence spacieuse ou projet de lotissement.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Grande superficie rare',
      'Polyvalent (résidentiel/lotissement)',
      'Zone d\'avenir',
      'Morcellement possible (200 m² min)',
      'Cadre agréable',
    ],
    documents: [
      'Titre foncier original',
      'Plan cadastral',
      'Certificat de non-hypothèque',
      'Quitus fiscal',
    ],
    credit: true,
    morcelable: true,
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
    description: 'Terrain de 1500 m² à Nkolnda. Bon rapport qualité/prix dans une zone résidentielle agréable.',
    caracteristiques: [
      'Titre foncier disponible',
      'Terrain loti',
      'Bon rapport qualité/prix',
      'Zone résidentielle agréable',
      'Quartier calme',
      'Morcellement possible (200 m² min)',
      'Accès facile',
    ],
    documents: [
      'Titre foncier',
      'Plan de situation',
      'Certificat de propriété',
    ],
    credit: true,
    morcelable: true,
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
    description: 'Terrain de 500 m² à Mekoumbou. Parfait pour une maison familiale dans un cadre paisible.',
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
    morcelable: false,
    badge: 'Familial',
    badgeColor: 'bg-blue-500',
    whatsapp: '237673620096',
    telephone: '237673620096',
  },
]

// ============================================
// FONCTIONS UTILITAIRES
// ============================================
const formatPrice = (prix) => {
  if (prix >= 1000000) {
    return (prix / 1000000).toFixed(0) + ' 000 000 FCFA'
  }
  return new Intl.NumberFormat('fr-FR').format(prix) + ' FCFA'
}

const formatSurface = (surface) => {
  if (surface >= 10000) {
    return (surface / 10000).toFixed(1) + ' ha'
  }
  return new Intl.NumberFormat('fr-FR').format(surface) + ' m²'
}

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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Bonjour Cbomelly,\n\n` +
      `Je suis intéressé(e) par le terrain : *${terrain.code}*\n` +
      `Localisation : ${terrain.localisation}\n` +
      `Surface : ${formatSurface(terrain.surface)}\n` +
      `Prix : ${formatPrice(terrain.prix)}\n\n` +
      `Pouvez-vous m'envoyer plus d'informations ?`
    )
    window.open(`https://wa.me/${terrain.whatsapp}?text=${message}`, '_blank')
  }

  // Page 404
  if (!terrain) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
        <div className="text-center max-w-md">
          <svg className="w-20 h-20 md:w-24 md:h-24 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-3">Terrain non trouvé</h1>
          <p className="text-sm md:text-base text-gray-400 mb-6">Ce terrain n'existe pas ou a été retiré.</p>
          <Link href="/terrains" className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-base hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all">
            Voir tous les terrains
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* ============================================ */}
      {/* HERO SECTION - RESPONSIVE */}
      {/* ============================================ */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={terrain.image} alt={terrain.name} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/95"></div>
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto pt-16 md:pt-20 text-center w-full">
          {/* Fil d'Ariane - Caché sur mobile très petit */}
          <div className="hidden sm:flex items-center justify-center gap-1.5 text-xs md:text-sm text-gray-400 mb-4 md:mb-6" data-aos="fade-up">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/terrains" className="hover:text-[#D4AF37] transition-colors">Terrains</Link>
            <span>/</span>
            <span className="text-[#D4AF37]">{terrain.code}</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center mb-3 md:mb-4" data-aos="fade-up" data-aos-delay="100">
            <span className={`${terrain.badgeColor} text-white px-2.5 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-bold shadow-lg`}>
              {terrain.badge}
            </span>
            <span className="bg-green-900/50 text-green-400 px-2.5 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-bold border border-green-500/30">
              {terrain.statut}
            </span>
            {terrain.credit && (
              <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-2.5 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-bold border border-[#D4AF37]/30">
                Crédit
              </span>
            )}
            {terrain.morcelable && (
              <span className="bg-purple-900/30 text-purple-400 px-2.5 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-sm font-bold border border-purple-500/30">
                Morcelable
              </span>
            )}
          </div>

          {/* Titre */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 px-2" data-aos="fade-up" data-aos-delay="200">
            {terrain.name}
          </h1>

          {/* Localisation */}
          <p className="text-sm md:text-lg lg:text-xl text-gray-300 mb-3 md:mb-6" data-aos="fade-up" data-aos-delay="300">
            <svg className="w-4 h-4 md:w-5 md:h-5 inline-block mr-1 md:mr-2 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {terrain.localisation}
          </p>

          {/* Prix */}
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#D4AF37] mb-1 md:mb-2" data-aos="fade-up" data-aos-delay="400">
            {formatPrice(terrain.prix)}
          </div>
          <p className="text-xs md:text-base text-gray-400 mb-6 md:mb-8" data-aos="fade-up" data-aos-delay="500">
            {new Intl.NumberFormat('fr-FR').format(terrain.prixM2)} FCFA/m²
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto" data-aos="fade-up" data-aos-delay="600">
            <button onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-base transition-all hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              WhatsApp
            </button>
            <a href={`tel:${terrain.telephone}`} className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-base transition-all hover:shadow-lg hover:shadow-[#D4AF37]/30 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* INFO MORCELLEMENT - BANDEAU */}
      {/* ============================================ */}
      {terrain.morcelable && (
        <section className="py-3 md:py-4 bg-purple-900/20 border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs md:text-sm text-purple-300 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span>Ce terrain est <strong className="text-white">morcelable</strong> par lots minimum de <strong className="text-white">200 m²</strong>. Idéal pour investissement groupé ou revente par parcelles.</span>
            </p>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* CONTENU PRINCIPAL */}
      {/* ============================================ */}
      <section className="py-8 md:py-12 lg:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              
              {/* Description */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-700/50" data-aos="fade-up">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 md:mb-6 flex items-center">
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-[#D4AF37] mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  Description
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">{terrain.description}</p>
              </div>

              {/* Galerie */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-700/50" data-aos="fade-up">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 md:mb-6 flex items-center">
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-[#D4AF37] mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Galerie
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {terrain.images.map((img, index) => (
                    <div key={index} className="relative h-32 sm:h-40 md:h-48 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer">
                      <Image src={img} alt={`${terrain.name} - ${index + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-700/50" data-aos="fade-up">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 md:mb-6 flex items-center">
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-[#D4AF37] mr-2 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Documents
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {terrain.documents.map((doc, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-slate-900/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-700/30">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs md:text-sm text-gray-300 font-medium block truncate">{doc}</span>
                        <span className="text-[10px] md:text-xs text-green-400">✓ Vérifié</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 md:space-y-6">
              
              {/* Résumé */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border border-gray-700/50 lg:sticky lg:top-24" data-aos="fade-left">
                <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold mb-4 md:mb-6 text-center">Résumé</h3>
                
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {[
                    { label: 'Référence', value: terrain.code, color: 'text-[#D4AF37]' },
                    { label: 'Surface', value: formatSurface(terrain.surface) },
                    { label: 'Prix/m²', value: `${new Intl.NumberFormat('fr-FR').format(terrain.prixM2)} FCFA` },
                    { label: 'Prix Total', value: formatPrice(terrain.prix), color: 'text-[#D4AF37] font-bold text-base md:text-lg' },
                    { label: 'Localisation', value: terrain.localisation },
                    { label: 'Zone', value: terrain.zone },
                    { label: 'Statut', value: terrain.statut, color: 'text-green-400' },
                    { label: 'Catégorie', value: terrain.category, color: 'text-[#D4AF37]' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 md:py-2.5 border-b border-gray-700/50 text-xs md:text-sm">
                      <span className="text-gray-400">{item.label}</span>
                      <span className={`font-semibold text-right ${item.color || 'text-white'}`}>{item.value}</span>
                    </div>
                  ))}
                  
                  {/* Info morcellement dans le résumé */}
                  {terrain.morcelable && (
                    <div className="flex justify-between items-center py-2 md:py-2.5 border-b border-gray-700/50 text-xs md:text-sm">
                      <span className="text-gray-400">Morcellement</span>
                      <span className="text-purple-400 font-semibold">200 m² min</span>
                    </div>
                  )}
                </div>

                <button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 md:py-3 lg:py-4 rounded-lg md:rounded-xl font-bold text-sm md:text-base transition-all hover:shadow-lg mb-2 md:mb-3 flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  WhatsApp
                </button>
                <a href={`tel:${terrain.telephone}`} className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 py-2.5 md:py-3 lg:py-4 rounded-lg md:rounded-xl font-bold text-sm md:text-base transition-all hover:shadow-lg flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Appeler
                </a>
              </div>

              {/* Caractéristiques */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border border-gray-700/50" data-aos="fade-left" data-aos-delay="200">
                <h3 className="text-lg md:text-xl font-extrabold mb-3 md:mb-4 flex items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Caractéristiques
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {terrain.caracteristiques.map((carac, index) => (
                    <li key={index} className="flex items-start text-xs md:text-sm">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2 md:mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{carac}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info importante */}
              <div className="bg-[#D4AF37]/10 rounded-xl md:rounded-2xl p-4 md:p-6 border border-[#D4AF37]/30" data-aos="fade-left" data-aos-delay="400">
                <div className="flex items-start">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] mr-2 md:mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-[#D4AF37] text-sm md:text-base mb-1 md:mb-2">À savoir</h4>
                    <p className="text-gray-300 text-xs md:text-sm">
                      Vous visitez le terrain. Si intéressé, nous vous montrons les documents originaux. Tous nos terrains sont titrés et lotis.
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
      <section className="py-10 md:py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center px-4" data-aos="zoom-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-6">
            Intéressé par ce <span className="text-[#D4AF37]">Terrain</span> ?
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8">
            Contactez-nous pour organiser une visite et consulter les documents.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/terrains" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-slate-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-base transition-all">
              Voir d'autres terrains
            </Link>
            <Link href="/conseils" className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-base hover:shadow-lg transition-all">
              Guide d'achat
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}