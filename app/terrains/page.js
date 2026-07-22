'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link'

// ============================================
// DONNÉES RÉELLES DES TERRAINS CBOMELLY
// ============================================
const terrains = [
  // LOTS POUR PROJETS
  {
    id: 'cbo-pro-001',
    code: 'Kometou Ngalli 2',
    name: 'Lot Projet - Kometou Ngalli 2',
    category: 'Projet',
    surface: 50000,
    prixM2: 5000,
    prixTotal: 250000000,
    localisation: 'Kometou Ngalli 2',
    zone: 'Nkometou',
    description: 'Vaste terrain de 5 hectares idéal pour projets immobiliers, agricoles ou industriels. Morcellement possible par lots de 200 m² minimum.',
    avantages: ['Titre foncier', 'Terrain loti', 'Zone en expansion', 'Morcelable 200m²'],
    statut: 'Disponible',
    badge: 'Projet',
    badgeColor: 'bg-blue-500',
    image: '/images/terrain1.jpg',
    credit: true,
    morcelable: true,
  },
  {
    id: 'cbo-pro-002',
    code: 'Kometou Nkol Obili',
    name: 'Lot Projet - Nkol Obili',
    category: 'Projet',
    surface: 4000,
    prixM2: 3000,
    prixTotal: 12000000,
    localisation: 'Kometou Nkol Obili',
    zone: 'Nkometou',
    description: 'Terrain de 4000 m² pour projet de construction ou investissement locatif. Morcellement possible par lots de 200 m² minimum.',
    avantages: ['Titre foncier', 'Terrain loti', 'Zone calme', 'Morcelable 200m²'],
    statut: 'Disponible',
    badge: 'Bon Plan',
    badgeColor: 'bg-green-500',
    image: '/images/terrain2.jpg',
    credit: true,
    morcelable: true,
  },
  {
    id: 'cbo-pro-003',
    code: 'Kometou Essong Mintsang',
    name: 'Lot Projet - Essong Mintsang',
    category: 'Projet',
    surface: 5000,
    prixM2: 5000,
    prixTotal: 25000000,
    localisation: 'Kometou Essong Mintsang',
    zone: 'Nkometou',
    description: 'Superbe terrain de 5000 m² dans un quartier prisé. Morcellement possible par lots de 200 m² minimum.',
    avantages: ['Titre foncier', 'Terrain loti', 'Quartier prisé', 'Morcelable 200m²'],
    statut: 'Disponible',
    badge: 'Premium',
    badgeColor: 'bg-[#D4AF37]',
    image: '/images/terrain3.jpg',
    credit: true,
    morcelable: true,
  },
  {
    id: 'cbo-hab-001',
    code: 'SOA/Banda',
    name: 'Lot Habitation - SOA/Banda',
    category: 'Habitation',
    surface: 10000,
    prixM2: 12000,
    prixTotal: 120000000,
    localisation: 'SOA/Banda',
    zone: 'SOA',
    description: 'Magnifique terrain d\'un hectare à SOA/Banda. Cadre idéal pour résidence. Morcellement possible par lots de 200 m² minimum.',
    avantages: ['Titre foncier', 'Terrain loti', 'Cadre paisible', 'Morcelable 200m²'],
    statut: 'Disponible',
    badge: 'Coup de Cœur',
    badgeColor: 'bg-red-500',
    image: '/images/terrain4.png',
    credit: true,
    morcelable: true,
  },
  {
    id: 'cbo-hab-002',
    code: 'SOA/Avant Sous-Préf.',
    name: 'Lot Habitation - SOA Centre',
    category: 'Habitation',
    surface: 2000,
    prixM2: 15000,
    prixTotal: 30000000,
    localisation: 'SOA, avant Sous-Préfecture',
    zone: 'SOA',
    description: 'Terrain de 2000 m² proche centre administratif. Morcellement possible par lots de 200 m² minimum.',
    avantages: ['Titre foncier', 'Terrain loti', 'Proche centre', 'Morcelable 200m²'],
    statut: 'Disponible',
    badge: 'Emplacement Or',
    badgeColor: 'bg-[#D4AF37]',
    image: '/images/terrain5.jpg',
    credit: true,
    morcelable: true,
  },
  {
    id: 'cbo-hab-003',
    code: 'SOA/Après CES Baaba',
    name: 'Lot Habitation - SOA Baaba',
    category: 'Habitation',
    surface: 1000,
    prixM2: 5000,
    prixTotal: 5000000,
    localisation: 'SOA, après CES de Baaba',
    zone: 'SOA',
    description: 'Terrain accessible de 1000 m². Parfait pour première acquisition. Prix très compétitif.',
    avantages: ['Titre foncier', 'Terrain loti', 'Prix accessible', 'Primo-accédant'],
    statut: 'Disponible',
    badge: 'Accessible',
    badgeColor: 'bg-green-500',
    image: '/images/terrain7.jpg',
    credit: true,
    morcelable: true,
  },
  {
    id: 'cbo-hab-004',
    code: 'Kozoa Entrée Ministre',
    name: 'Lot Habitation - Kozoa Ministre',
    category: 'Habitation',
    surface: 1000,
    prixM2: 25000,
    prixTotal: 25000000,
    localisation: 'Kozoa, Entrée Ministre',
    zone: 'Yaoundé',
    description: 'Terrain premium à Kozoa, quartier huppé. Morcellement possible par lots de 200 m² minimum.',
    avantages: ['Titre foncier', 'Terrain loti', 'Quartier huppé', 'Morcelable 200m²'],
    statut: 'Disponible',
    badge: 'Premium',
    badgeColor: 'bg-[#D4AF37]',
    image: '/images/terrain8.jpeg',
    credit: true,
    morcelable: true,
  },
  {
    id: 'cbo-hab-005',
    code: 'Kozoa Derrière Lycée',
    name: 'Lot Habitation - Kozoa Lycée',
    category: 'Habitation',
    surface: 1000,
    prixM2: 27500,
    prixTotal: 27500000,
    localisation: 'Kozoa, derrière le Lycée',
    zone: 'Yaoundé',
    description: 'Terrain proche établissements scolaires. Idéal pour famille.',
    avantages: ['Titre foncier', 'Terrain loti', 'Proche écoles', 'Quartier familial'],
    statut: 'Disponible',
    badge: 'Familial',
    badgeColor: 'bg-blue-500',
    image: '/images/terrain10.jpeg',
    credit: true,
    morcelable: true,
  },
  {
    id: 'cborou-001',
    code: 'CBOROU1',
    name: 'Lot Habitation - Mendong Mfou',
    category: 'Habitation',
    surface: 2000,
    prixM2: 13000,
    prixTotal: 26000000,
    localisation: 'Mendong, route de Mfou',
    zone: 'Yaoundé',
    description: 'Beau terrain de 2000 m² sur la route de Mfou. Zone en plein développement.',
    avantages: ['Titre foncier', 'Terrain loti', 'Zone développement', 'Bon investissement'],
    statut: 'Disponible',
    badge: 'Nouveau',
    badgeColor: 'bg-green-500',
    image: '/images/terrain1.jpg',
    credit: true,
    morcelable: true,
  },
  {
    id: 'cborou-002',
    code: 'CBOROU2',
    name: 'Lot Habitation - Nkoabang',
    category: 'Habitation',
    surface: 10000,
    prixM2: 15000,
    prixTotal: 150000000,
    localisation: 'Nkoabang',
    zone: 'Yaoundé',
    description: 'Grand terrain d\'un hectare à Nkoabang. Idéal résidence ou lotissement.',
    avantages: ['Titre foncier', 'Terrain loti', 'Grande superficie', 'Polyvalent'],
    statut: 'Disponible',
    badge: 'Grand Lot',
    badgeColor: 'bg-purple-500',
    image: '/images/terrain2.jpg',
    credit: true,
    morcelable: true,
  },
  {
    id: 'cborou-003',
    code: 'CBOROU3',
    name: 'Lot Habitation - Nkolnda',
    category: 'Habitation',
    surface: 1500,
    prixM2: 10000,
    prixTotal: 15000000,
    localisation: 'Nkolnda',
    zone: 'Yaoundé',
    description: 'Terrain de 1500 m² à Nkolnda. Bon rapport qualité/prix.',
    avantages: ['Titre foncier', 'Terrain loti', 'Bon rapport Q/P', 'Zone résidentielle'],
    statut: 'Disponible',
    badge: 'Bon Plan',
    badgeColor: 'bg-green-500',
    image: '/images/terrain3.jpg',
    credit: true,
    morcelable: true,
  },
  {
    id: 'cborou-004',
    code: 'CBOROU4',
    name: 'Lot Habitation - Mekoumbou',
    category: 'Habitation',
    surface: 500,
    prixM2: 10000,
    prixTotal: 5000000,
    localisation: 'Mekoumbou',
    zone: 'Yaoundé',
    description: 'Terrain de 500 m² à Mekoumbou. Parfait pour maison familiale.',
    avantages: ['Titre foncier', 'Terrain loti', 'Cadre paisible', 'Idéal famille'],
    statut: 'Disponible',
    badge: 'Familial',
    badgeColor: 'bg-blue-500',
    image: '/images/terrain5.jpg',
    credit: true,
    morcelable: false,
  },
]

// ============================================
// OPTIONS DE FILTRE
// ============================================
const zones = [
  { id: 'all', name: 'Toutes zones' },
  { id: 'SOA', name: 'SOA' },
  { id: 'Nkometou', name: 'Nkometou' },
  { id: 'Yaoundé', name: 'Yaoundé' },
]

const categories = [
  { id: 'all', name: 'Toutes catégories' },
  { id: 'Habitation', name: 'Habitation' },
  { id: 'Projet', name: 'Projet' },
]

const budgetRanges = [
  { id: 'all', name: 'Tous budgets' },
  { id: '0-10M', name: '- de 10M' },
  { id: '10M-25M', name: '10M - 25M' },
  { id: '25M-50M', name: '25M - 50M' },
  { id: '50M-150M', name: '50M - 150M' },
  { id: '150M+', name: '+ de 150M' },
]

// ============================================
// FONCTIONS UTILITAIRES
// ============================================
const formatPrice = (prix) => {
  if (prix >= 1000000) {
    return (prix / 1000000).toFixed(0) + ' 000 000 F'
  }
  return new Intl.NumberFormat('fr-FR').format(prix) + ' F'
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
export default function TerrainsPage() {
  const [selectedZone, setSelectedZone] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedBudget, setSelectedBudget] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('default')

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' })
  }, [])

  const filteredTerrains = terrains
    .filter(terrain => {
      const matchesZone = selectedZone === 'all' || terrain.zone === selectedZone
      const matchesCategory = selectedCategory === 'all' || terrain.category === selectedCategory
      const matchesBudget = selectedBudget === 'all' ||
        (selectedBudget === '0-10M' && terrain.prixTotal <= 10000000) ||
        (selectedBudget === '10M-25M' && terrain.prixTotal > 10000000 && terrain.prixTotal <= 25000000) ||
        (selectedBudget === '25M-50M' && terrain.prixTotal > 25000000 && terrain.prixTotal <= 50000000) ||
        (selectedBudget === '50M-150M' && terrain.prixTotal > 50000000 && terrain.prixTotal <= 150000000) ||
        (selectedBudget === '150M+' && terrain.prixTotal > 150000000)
      const matchesSearch = terrain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           terrain.localisation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           terrain.code.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesZone && matchesCategory && matchesBudget && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.prixTotal - b.prixTotal
      if (sortBy === 'price-desc') return b.prixTotal - a.prixTotal
      if (sortBy === 'surface-asc') return a.surface - b.surface
      if (sortBy === 'surface-desc') return b.surface - a.surface
      if (sortBy === 'prix-m2-asc') return a.prixM2 - b.prixM2
      if (sortBy === 'prix-m2-desc') return b.prixM2 - a.prixM2
      return 0
    })

  return (
    <>
      {/* ============================================ */}
      {/* HERO - RESPONSIVE */}
      {/* ============================================ */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/terrain-background.jpg" alt="Terrains Cbomelly" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/95"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16 md:pt-20 w-full">
          {/* Logo */}
          {/* <Image src="/images/melly-logo.png" alt="Melly Groupe" width={60} height={60} className="mx-auto mb-3 md:mb-6 drop-shadow-2xl w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]" data-aos="fade-down" /> */}
          
          {/* Titre */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-3 md:mb-6" data-aos="fade-up">
            Nos <span className="text-[#D4AF37]">Terrains</span>
          </h1>
          
          {/* Sous-titre */}
          <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-4 md:mb-6" data-aos="fade-up" data-aos-delay="200">
            Terrains titrés et lotis à Yaoundé et environs
          </p>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 md:gap-3 justify-center" data-aos="fade-up" data-aos-delay="400">
            <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-bold border border-[#D4AF37]/30">
              Titres Fonciers Garantis
            </span>
            <span className="bg-green-500/20 text-green-400 px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-bold border border-green-500/30">
              Crédit Possible
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-bold border border-blue-500/30">
              Terrains Lotis
            </span>
            <span className="bg-purple-500/20 text-purple-400 px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-bold border border-purple-500/30">
              Morcelable 200m²
            </span>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BANDEAU INFO MORCELLEMENT */}
      {/* ============================================ */}
      <section className="py-2.5 md:py-3 bg-purple-900/20 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[11px] md:text-sm text-purple-300 flex items-center justify-center gap-1.5 md:gap-2">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>Tous nos grands terrains sont <strong className="text-white">morcelables</strong> par lots minimum de <strong className="text-white">200 m²</strong></span>
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION INFO */}
      {/* ============================================ */}
      <section className="py-3 md:py-4 bg-[#D4AF37]/10 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 text-center" data-aos="fade-up">
            <div className="flex items-center text-[#D4AF37] font-bold text-xs md:text-sm">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Visitez, puis consultez les documents
            </div>
            <div className="flex items-center text-white font-bold text-xs md:text-sm">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Terrains titrés et lotis
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FILTRES - RESPONSIVE */}
      {/* ============================================ */}
      <section className="py-3 md:py-4 bg-slate-800/50 sticky top-[72px] md:top-20 z-30 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-3 md:px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3" data-aos="fade-up">
            {/* Recherche - pleine largeur sur mobile */}
            <div className="col-span-2 md:col-span-1 relative">
              <svg className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-3 py-2 md:py-3 bg-slate-900/80 border border-gray-700 rounded-lg text-white text-xs md:text-sm focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <select value={selectedZone} onChange={(e) => setSelectedZone(e.target.value)} className="px-2 md:px-3 py-2 md:py-3 bg-slate-900/80 border border-gray-700 rounded-lg text-white text-[11px] md:text-sm focus:outline-none focus:border-[#D4AF37] truncate">
              {zones.map(zone => <option key={zone.id} value={zone.id} className="bg-slate-900">{zone.name}</option>)}
            </select>

            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-2 md:px-3 py-2 md:py-3 bg-slate-900/80 border border-gray-700 rounded-lg text-white text-[11px] md:text-sm focus:outline-none focus:border-[#D4AF37] truncate">
              {categories.map(cat => <option key={cat.id} value={cat.id} className="bg-slate-900">{cat.name}</option>)}
            </select>

            <select value={selectedBudget} onChange={(e) => setSelectedBudget(e.target.value)} className="px-2 md:px-3 py-2 md:py-3 bg-slate-900/80 border border-gray-700 rounded-lg text-white text-[11px] md:text-sm focus:outline-none focus:border-[#D4AF37] truncate">
              {budgetRanges.map(range => <option key={range.id} value={range.id} className="bg-slate-900">{range.name}</option>)}
            </select>

            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-2 md:px-3 py-2 md:py-3 bg-slate-900/80 border border-gray-700 rounded-lg text-white text-[11px] md:text-sm focus:outline-none focus:border-[#D4AF37] truncate">
              <option value="default">Tri</option>
              <option value="price-asc">Prix ↑</option>
              <option value="price-desc">Prix ↓</option>
              <option value="surface-asc">Surface ↑</option>
              <option value="surface-desc">Surface ↓</option>
            </select>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GRILLE DES TERRAINS - RESPONSIVE */}
      {/* ============================================ */}
      <section className="py-6 md:py-10 lg:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-3 md:px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 md:mb-8" data-aos="fade-up">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">
              <span className="text-[#D4AF37]">{filteredTerrains.length}</span> terrains
            </h2>
            <p className="text-[10px] md:text-sm text-gray-400">
              Prix taxés • Crédit possible • Morcelable 200m²
            </p>
          </div>

          {filteredTerrains.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {filteredTerrains.map((terrain, index) => (
                <div key={terrain.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-700/50 card-hover group" data-aos="fade-up" data-aos-delay={index * 50}>
                  
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                    <Image src={terrain.image} alt={terrain.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    
                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      <span className={`${terrain.badgeColor} text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-xs font-bold`}>{terrain.badge}</span>
                      {terrain.credit && <span className="bg-green-500 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-xs font-bold">Crédit</span>}
                      {terrain.morcelable && <span className="bg-purple-500 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-xs font-bold">200m²</span>}
                    </div>
                    <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-sm text-[#D4AF37] px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-xs font-bold">{terrain.code}</div>
                  </div>

                  {/* Contenu */}
                  <div className="p-3 md:p-5 lg:p-6">
                    <div className="flex items-center justify-between mb-1 md:mb-2">
                      <span className="text-[10px] md:text-xs text-[#D4AF37] font-semibold uppercase">{terrain.category}</span>
                      <span className="text-[10px] md:text-xs text-gray-400">{terrain.statut}</span>
                    </div>

                    <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-2 md:mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                      {terrain.localisation}
                    </h3>

                    {/* Détails */}
                    <div className="grid grid-cols-3 gap-1.5 md:gap-2 lg:gap-3 mb-3 md:mb-4">
                      <div className="bg-slate-900/50 rounded-lg p-1.5 md:p-2 lg:p-3 text-center">
                        <span className="block text-[9px] md:text-xs text-gray-400 mb-0.5">Surface</span>
                        <span className="font-bold text-white text-[10px] md:text-sm">{formatSurface(terrain.surface)}</span>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-1.5 md:p-2 lg:p-3 text-center">
                        <span className="block text-[9px] md:text-xs text-gray-400 mb-0.5">Prix/m²</span>
                        <span className="font-bold text-[#D4AF37] text-[10px] md:text-sm">{new Intl.NumberFormat('fr-FR').format(terrain.prixM2)} F</span>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-1.5 md:p-2 lg:p-3 text-center">
                        <span className="block text-[9px] md:text-xs text-gray-400 mb-0.5">Total</span>
                        <span className="font-bold text-[#D4AF37] text-[10px] md:text-sm">{formatPrice(terrain.prixTotal)}</span>
                      </div>
                    </div>

                    {/* Avantages */}
                    <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                      {terrain.avantages.slice(0, 3).map((avantage, i) => (
                        <span key={i} className="text-[9px] md:text-xs bg-[#D4AF37]/10 text-[#D4AF37] px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">{avantage}</span>
                      ))}
                    </div>

                    {/* Bouton */}
                    <Link href={`/terrains/${terrain.id}`} className="block w-full text-center bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 py-2 md:py-3 rounded-lg font-bold text-xs md:text-sm hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all">
                      Voir les détails
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 md:py-20">
              <svg className="w-16 h-16 md:w-24 md:h-24 text-gray-600 mx-auto mb-4 md:mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <h3 className="text-lg md:text-2xl font-bold text-gray-400 mb-2">Aucun terrain trouvé</h3>
              <p className="text-xs md:text-base text-gray-500">Modifiez vos critères</p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================ */}
      {/* POURQUOI NOS TERRAINS - RESPONSIVE */}
      {/* ============================================ */}
      <section className="py-8 md:py-12 lg:py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8 md:mb-12" data-aos="fade-up">
            Pourquoi Nos <span className="text-[#D4AF37]">Terrains</span> ?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Titres Fonciers', desc: 'Documents vérifiés' },
              { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Crédit Possible', desc: 'Paiement facilité' },
              { icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4', title: 'Morcelable 200m²', desc: 'Lots minimum 200m²' },
              { icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', title: 'Prix Taxés', desc: 'Transparence totale' },
            ].map((item, index) => (
              <div key={item.title} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <svg className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-xs md:text-sm lg:text-base mb-1">{item.title}</h3>
                <p className="text-gray-400 text-[10px] md:text-xs lg:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA - RESPONSIVE */}
      {/* ============================================ */}
      <section className="py-10 md:py-16 bg-[#D4AF37]/5">
        <div className="max-w-4xl mx-auto text-center px-4" data-aos="zoom-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-6">
            Intéressé par un <span className="text-[#D4AF37]">Terrain</span> ?
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8">
            Visitez nos terrains et consultez les documents sur place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto">
            <a href="tel:+237673620096" className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-base hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all flex items-center justify-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler
            </a>
            <Link href="/contact" className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-slate-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-base transition-all flex items-center justify-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Demander une visite
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}