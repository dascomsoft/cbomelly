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
    name: 'Lot pour Projet - Kometou Ngalli 2',
    category: 'Projet',
    surface: 50000, // 5 hectares = 50000 m²
    prixM2: 5000,
    prixTotal: 250000000,
    localisation: 'Kometou Ngalli 2',
    zone: 'Nkometou',
    description: 'Vaste terrain de 5 hectares idéal pour projets immobiliers, agricoles ou industriels. Terrain titré et loti, situé dans une zone en plein développement.',
    avantages: ['Titre foncier disponible', 'Terrain loti', 'Zone en expansion', 'Idéal pour grand projet'],
    statut: 'Disponible',
    badge: 'Projet',
    badgeColor: 'bg-blue-500',
    image: '/images/terrain1.jpg',
    credit: true,
  },
  {
    id: 'cbo-pro-002',
    code: 'Kometou Nkol Obili',
    name: 'Lot pour Projet - Kometou Nkol Obili',
    category: 'Projet',
    surface: 4000,
    prixM2: 3000,
    prixTotal: 12000000,
    localisation: 'Kometou Nkol Obili',
    zone: 'Nkometou',
    description: 'Terrain de 4000 m² parfait pour projet de construction ou investissement locatif. Zone calme et accessible.',
    avantages: ['Titre foncier disponible', 'Terrain loti', 'Zone calme', 'Bon rapport qualité/prix'],
    statut: 'Disponible',
    badge: 'Bon Plan',
    badgeColor: 'bg-green-500',
    image: '/images/terrain2.jpg',
    credit: true,
  },
  {
    id: 'cbo-pro-003',
    code: 'Kometou Essong Mintsang',
    name: 'Lot pour Projet - Kometou Essong Mintsang',
    category: 'Projet',
    surface: 5000,
    prixM2: 5000,
    prixTotal: 25000000,
    localisation: 'Kometou Essong Mintsang',
    zone: 'Nkometou',
    description: 'Superbe terrain de 5000 m² dans un quartier prisé de Nkometou. Proximité des commodités et axes routiers.',
    avantages: ['Titre foncier disponible', 'Terrain loti', 'Proche des commodités', 'Quartier prisé'],
    statut: 'Disponible',
    badge: 'Premium',
    badgeColor: 'bg-[#D4AF37]',
    image: '/images/terrain3.jpg',
    credit: true,
  },

  // LOTS POUR HABITATION
  {
    id: 'cbo-hab-001',
    code: 'SOA/Banda',
    name: 'Lot d\'Habitation - SOA/Banda',
    category: 'Habitation',
    surface: 10000, // 1 hectare
    prixM2: 12000,
    prixTotal: 120000000,
    localisation: 'SOA/Banda',
    zone: 'SOA',
    description: 'Magnifique terrain d\'un hectare à SOA/Banda. Cadre idéal pour résidence principale ou résidence secondaire. Environnement paisible et sécurisé.',
    avantages: ['Titre foncier disponible', 'Terrain loti', 'Cadre paisible', 'Sécurisé'],
    statut: 'Disponible',
    badge: 'Coup de Cœur',
    badgeColor: 'bg-red-500',
    image: '/images/terrain4.png',
    credit: true,
  },
  {
    id: 'cbo-hab-002',
    code: 'SOA/Avant Sous-Préfecture',
    name: 'Lot d\'Habitation - SOA Centre',
    category: 'Habitation',
    surface: 2000,
    prixM2: 15000,
    prixTotal: 30000000,
    localisation: 'SOA, avant la Sous-Préfecture',
    zone: 'SOA',
    description: 'Terrain de 2000 m² idéalement situé avant la Sous-Préfecture de SOA. Proximité immédiate des services administratifs et commerces.',
    avantages: ['Titre foncier disponible', 'Terrain loti', 'Proche centre administratif', 'Commerces à proximité'],
    statut: 'Disponible',
    badge: 'Emplacement Or',
    badgeColor: 'bg-[#D4AF37]',
    image: '/images/terrain5.jpg',
    credit: true,
  },
  {
    id: 'cbo-hab-003',
    code: 'SOA/Après CES de Baaba',
    name: 'Lot d\'Habitation - SOA Baaba',
    category: 'Habitation',
    surface: 1000,
    prixM2: 5000,
    prixTotal: 5000000,
    localisation: 'SOA, après le CES de Baaba',
    zone: 'SOA',
    description: 'Terrain accessible de 1000 m² après le CES de Baaba. Parfait pour une première acquisition ou un investissement locatif.',
    avantages: ['Titre foncier disponible', 'Terrain loti', 'Prix accessible', 'Idéal primo-accédant'],
    statut: 'Disponible',
    badge: 'Accessible',
    badgeColor: 'bg-green-500',
    image: '/images/terrain7.jpg',
    credit: true,
  },
  {
    id: 'cbo-hab-004',
    code: 'Kozoa Entrée Ministre',
    name: 'Lot d\'Habitation - Kozoa Entrée Ministre',
    category: 'Habitation',
    surface: 1000,
    prixM2: 25000,
    prixTotal: 25000000,
    localisation: 'Kozoa, Entrée Ministre',
    zone: 'Yaoundé',
    description: 'Terrain premium de 1000 m² à Kozoa, Entrée Ministre. Quartier huppé, idéal pour résidence de standing.',
    avantages: ['Titre foncier disponible', 'Terrain loti', 'Quartier huppé', 'Résidence de standing'],
    statut: 'Disponible',
    badge: 'Premium',
    badgeColor: 'bg-[#D4AF37]',
    image: '/images/terrain8.jpeg',
    credit: true,
  },
  {
    id: 'cbo-hab-005',
    code: 'Kozoa Derrière Lycée',
    name: 'Lot d\'Habitation - Kozoa Derrière Lycée',
    category: 'Habitation',
    surface: 1000,
    prixM2: 27500,
    prixTotal: 27500000,
    localisation: 'Kozoa, derrière le Lycée',
    zone: 'Yaoundé',
    description: 'Terrain de 1000 m² derrière le Lycée de Kozoa. Emplacement stratégique proche des établissements scolaires.',
    avantages: ['Titre foncier disponible', 'Terrain loti', 'Proche établissements scolaires', 'Quartier familial'],
    statut: 'Disponible',
    badge: 'Familial',
    badgeColor: 'bg-blue-500',
    image: '/images/terrain10.jpeg',
    credit: true,
  },

  // NOUVELLES OFFRES (codes CBOROU)
  {
    id: 'cborou-001',
    code: 'CBOROU1',
    name: 'Lot d\'Habitation - Mendong Route de Mfou',
    category: 'Habitation',
    surface: 2000,
    prixM2: 13000,
    prixTotal: 26000000,
    localisation: 'Mendong, sur la route de Mfou',
    zone: 'Yaoundé',
    description: 'Beau terrain de 2000 m² sur la route de Mfou à Mendong. Zone en plein développement, excellent investissement.',
    avantages: ['Titre foncier disponible', 'Terrain loti', 'Zone en développement', 'Excellent investissement'],
    statut: 'Disponible',
    badge: 'Nouveau',
    badgeColor: 'bg-green-500',
    image: '/images/terrain1.jpg',
    credit: true,
  },
  {
    id: 'cborou-002',
    code: 'CBOROU2',
    name: 'Lot d\'Habitation - Nkoabang',
    category: 'Habitation',
    surface: 10000, // 1 hectare
    prixM2: 15000,
    prixTotal: 150000000,
    localisation: 'Nkoabang',
    zone: 'Yaoundé',
    description: 'Grand terrain d\'un hectare à Nkoabang. Idéal pour résidence spacieuse ou projet de lotissement.',
    avantages: ['Titre foncier disponible', 'Terrain loti', 'Grande superficie', 'Polyvalent'],
    statut: 'Disponible',
    badge: 'Grand Lot',
    badgeColor: 'bg-purple-500',
    image: '/images/terrain2.jpg',
    credit: true,
  },
  {
    id: 'cborou-003',
    code: 'CBOROU3',
    name: 'Lot d\'Habitation - Nkolnda',
    category: 'Habitation',
    surface: 1500,
    prixM2: 10000,
    prixTotal: 15000000,
    localisation: 'Nkolnda',
    zone: 'Yaoundé',
    description: 'Terrain de 1500 m² à Nkolnda. Bon rapport qualité/prix dans une zone résidentielle agréable.',
    avantages: ['Titre foncier disponible', 'Terrain loti', 'Bon rapport qualité/prix', 'Zone résidentielle'],
    statut: 'Disponible',
    badge: 'Bon Plan',
    badgeColor: 'bg-green-500',
    image: '/images/terrain3.jpg',
    credit: true,
  },
  {
    id: 'cborou-004',
    code: 'CBOROU4',
    name: 'Lot d\'Habitation - Mekoumbou',
    category: 'Habitation',
    surface: 500,
    prixM2: 10000,
    prixTotal: 5000000,
    localisation: 'Mekoumbou',
    zone: 'Yaoundé',
    description: 'Terrain de 500 m² à Mekoumbou. Parfait pour une maison familiale dans un cadre paisible.',
    avantages: ['Titre foncier disponible', 'Terrain loti', 'Cadre paisible', 'Idéal maison familiale'],
    statut: 'Disponible',
    badge: 'Familial',
    badgeColor: 'bg-blue-500',
    image: '/images/terrain5.jpg',
    credit: true,
  },
]

// ============================================
// OPTIONS DE FILTRE
// ============================================
const zones = [
  { id: 'all', name: 'Toutes les zones' },
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
  { id: 'all', name: 'Tous les budgets' },
  { id: '0-10M', name: 'Moins de 10M FCFA' },
  { id: '10M-25M', name: '10M - 25M FCFA' },
  { id: '25M-50M', name: '25M - 50M FCFA' },
  { id: '50M-150M', name: '50M - 150M FCFA' },
  { id: '150M+', name: 'Plus de 150M FCFA' },
]

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
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  // Formatage du prix
  const formatPrice = (prix) => {
    if (prix >= 1000000) {
      return (prix / 1000000).toFixed(0) + ' 000 000 FCFA'
    }
    return new Intl.NumberFormat('fr-FR').format(prix) + ' FCFA'
  }

  // Formatage surface
  const formatSurface = (surface) => {
    if (surface >= 10000) {
      return (surface / 10000).toFixed(1) + ' ha'
    }
    return new Intl.NumberFormat('fr-FR').format(surface) + ' m²'
  }

  // Filtrage des terrains
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
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/terrain-background.jpg"
            alt="Terrains Cbomelly - Melly Groupe"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/95"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <Image
            src="/images/melly-logo.png"
            alt="Melly Groupe Logo"
            width={100}
            height={100}
            className="mx-auto mb-6 drop-shadow-2xl"
            data-aos="fade-down"
          />
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6" data-aos="fade-up">
            Nos <span className="text-[#D4AF37]">Terrains</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4" data-aos="fade-up" data-aos-delay="200">
            Terrains titrés et lotis à Yaoundé et ses environs
          </p>
          <div className="flex flex-wrap gap-3 justify-center" data-aos="fade-up" data-aos-delay="400">
            <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-bold border border-[#D4AF37]/30">
              <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Titres Fonciers Garantis
            </span>
            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold border border-green-500/30">
              <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Vente à Crédit Possible
            </span>
            <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-bold border border-blue-500/30">
              <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Terrains Lotis
            </span>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION INFORMATION IMPORTANTE */}
      {/* ============================================ */}
      <section className="py-8 bg-[#D4AF37]/10 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center" data-aos="fade-up">
            <div className="flex items-center text-[#D4AF37] font-bold">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Vous visitez, si ça vous intéresse, on vous montre les documents.
            </div>
            <div className="flex items-center text-white font-bold">
              <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tous nos terrains sont titrés et lotis
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FILTRES */}
      {/* ============================================ */}
      <section className="py-8 bg-slate-800/50 sticky top-20 z-30 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4" data-aos="fade-up">
            {/* Recherche */}
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Zone */}
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="px-4 py-3 bg-slate-900/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
            >
              {zones.map(zone => (
                <option key={zone.id} value={zone.id} className="bg-slate-900">{zone.name}</option>
              ))}
            </select>

            {/* Catégorie */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-slate-900/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id} className="bg-slate-900">{cat.name}</option>
              ))}
            </select>

            {/* Budget */}
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="px-4 py-3 bg-slate-900/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
            >
              {budgetRanges.map(range => (
                <option key={range.id} value={range.id} className="bg-slate-900">{range.name}</option>
              ))}
            </select>

            {/* Tri */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-900/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="default">Tri par défaut</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="surface-asc">Surface croissante</option>
              <option value="surface-desc">Surface décroissante</option>
              <option value="prix-m2-asc">Prix/m² croissant</option>
              <option value="prix-m2-desc">Prix/m² décroissant</option>
            </select>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GRILLE DES TERRAINS */}
      {/* ============================================ */}
      <section className="section-padding bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold">
              <span className="text-[#D4AF37]">{filteredTerrains.length}</span> Terrains Disponibles
            </h2>
            <p className="text-gray-400 text-sm">
              Prix taxés • Vente à crédit possible
            </p>
          </div>

          {filteredTerrains.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTerrains.map((terrain, index) => (
                <div
                  key={terrain.id}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 card-hover group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={terrain.image}
                      alt={terrain.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`${terrain.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                        {terrain.badge}
                      </span>
                      {terrain.credit && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          Crédit
                        </span>
                      )}
                    </div>
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold">
                      {terrain.code}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#D4AF37] font-semibold uppercase">
                        {terrain.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {terrain.statut}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {terrain.localisation}
                    </h3>

                    {/* Détails */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                        <span className="block text-xs text-gray-400 mb-1">Surface</span>
                        <span className="font-bold text-white text-sm">{formatSurface(terrain.surface)}</span>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                        <span className="block text-xs text-gray-400 mb-1">Prix/m²</span>
                        <span className="font-bold text-[#D4AF37] text-sm">{new Intl.NumberFormat('fr-FR').format(terrain.prixM2)} F</span>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                        <span className="block text-xs text-gray-400 mb-1">Total</span>
                        <span className="font-bold text-[#D4AF37] text-sm">{formatPrice(terrain.prixTotal)}</span>
                      </div>
                    </div>

                    {/* Avantages */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {terrain.avantages.slice(0, 3).map((avantage, i) => (
                        <span key={i} className="text-xs bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded-full">
                          {avantage}
                        </span>
                      ))}
                    </div>

                    {/* Bouton */}
                    <Link
                      href={`/terrains/${terrain.id}`}
                      className="block w-full text-center bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Voir les détails
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg className="w-24 h-24 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">Aucun terrain trouvé</h3>
              <p className="text-gray-500">Modifiez vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================ */}
      {/* POURQUOI NOS TERRAINS */}
      {/* ============================================ */}
      <section className="section-padding bg-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12" data-aos="fade-up">
            Pourquoi Nos <span className="text-[#D4AF37]">Terrains</span> ?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Titres Fonciers', desc: 'Documents légaux vérifiés et garantis' },
              { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Crédit Possible', desc: 'Facilités de paiement adaptées' },
              { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', title: 'Terrains Lotis', desc: 'Bornage et viabilisation effectués' },
              { icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', title: 'Prix Taxés', desc: 'Transparence totale sur les prix' },
            ].map((item, index) => (
              <div key={item.title} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA */}
      {/* ============================================ */}
      <section className="py-16 bg-[#D4AF37]/5">
        <div className="max-w-4xl mx-auto text-center px-4" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Intéressé par un <span className="text-[#D4AF37]">Terrain</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Visitez nos terrains et consultez les documents sur place. Nos experts vous accompagnent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+237699999999" className="btn-primary pulse-gold">
              <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler maintenant
            </a>
            <Link href="/contact" className="btn-outline">
              <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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