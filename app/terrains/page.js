'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

export default function TerrainsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [selectedBudget, setSelectedBudget] = useState('all')

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const terrains = [
    {
      id: 1,
      title: 'Terrain Residentiel SOA',
      location: 'SOA, Yaoundé',
      surface: 500,
      prix: 15000000,
      prixM2: 30000,
      image: '/images/terrain1.jpg',
      statut: 'Disponible',
      type: 'Premium',
      description: 'Magnifique terrain residentiel dans un quartier calme et securise de SOA. Proche des commodites et des axes routiers.',
    },
    {
      id: 2,
      title: 'Lotissement Nkometou',
      location: 'Nkometou, Yaoundé',
      surface: 400,
      prix: 8500000,
      prixM2: 21250,
      image: '/images/terrain2.jpg',
      statut: 'Disponible',
      type: 'Standard',
      description: 'Terrain dans un lotissement en plein developpement. Ideal pour construction residentielle ou investissement locatif.',
    },
    {
      id: 3,
      title: 'Domaine Mbankomo',
      location: 'Mbankomo, Yaoundé',
      surface: 600,
      prix: 12000000,
      prixM2: 20000,
      image: '/images/terrain3.jpg',
      statut: 'Dernieres unites',
      type: 'Urgent',
      description: 'Grand terrain dans un domaine prive et securise. Vue imprenable sur la nature environnante.',
    },
    {
      id: 4,
      title: 'Parcelle Barriere',
      location: 'Barriere, Yaoundé',
      surface: 350,
      prix: 10000000,
      prixM2: 28571,
      image: '/images/terrain4.png',
      statut: 'Disponible',
      type: 'Standard',
      description: 'Terrain bien situe a proximite du centre-ville. Tous les documents sont en regle.',
    },
    {
      id: 5,
      title: 'Grand Domaine SOA',
      location: 'SOA, Yaoundé',
      surface: 1000,
      prix: 25000000,
      prixM2: 25000,
      image: '/images/terrain5.jpg',
      statut: 'Disponible',
      type: 'Premium',
      description: 'Vaste terrain ideal pour grand projet residentiel ou agricole. Titre foncier disponible.',
    },
    {
      id: 6,
      title: 'Terrain Agricole Nkometou',
      location: 'Nkometou, Yaoundé',
      surface: 2000,
      prix: 30000000,
      prixM2: 15000,
      image: '/images/terrain7.jpg',
      statut: 'Disponible',
      type: 'Nouveau',
      description: 'Terrain agricole avec acces a l\'eau. Parfait pour l\'agriculture ou l\'elevage.',
    },
  ]

  const filteredTerrains = terrains.filter(terrain => {
    const matchesLocation = selectedLocation === 'all' || terrain.location.includes(selectedLocation)
    const matchesBudget = selectedBudget === 'all' || 
      (selectedBudget === '0-10M' && terrain.prix <= 10000000) ||
      (selectedBudget === '10M-20M' && terrain.prix > 10000000 && terrain.prix <= 20000000) ||
      (selectedBudget === '20M+' && terrain.prix > 20000000)
    const matchesSearch = terrain.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         terrain.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesLocation && matchesBudget && matchesSearch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/terrain-background.jpg" alt="Terrains Cameroun" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/95"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6" data-aos="fade-up">
            Nos <span className="text-accent-light">Terrains</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
            Decouvrez notre selection exclusive de terrains dans les meilleures zones de Yaounde et ses environs.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-primary-dark/50 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4" data-aos="fade-up">
            <div className="flex-1 relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher un terrain..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-primary-dark/30 border border-primary/30 rounded-lg text-white focus:outline-none focus:border-accent"
              />
            </div>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 bg-primary-dark/30 border border-primary/30 rounded-lg text-white"
            >
              <option value="all">Toutes les localites</option>
              <option value="SOA">SOA</option>
              <option value="Nkometou">Nkometou</option>
              <option value="Barriere">Barriere</option>
              <option value="Mbankomo">Mbankomo</option>
            </select>
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="px-4 py-3 bg-primary-dark/30 border border-primary/30 rounded-lg text-white"
            >
              <option value="all">Tous les budgets</option>
              <option value="0-10M">Moins de 10M FCFA</option>
              <option value="10M-20M">10M - 20M FCFA</option>
              <option value="20M+">Plus de 20M FCFA</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grille des Terrains */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold">
              <span className="text-accent-light">{filteredTerrains.length}</span> Terrains Trouves
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTerrains.map((terrain, index) => (
              <div key={terrain.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-primary-dark/50 rounded-2xl overflow-hidden border border-primary/30 card-hover group">
                  <div className="relative h-64 overflow-hidden">
                    <img src={terrain.image} alt={terrain.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    {terrain.type && (
                      <div className="absolute top-4 left-4 bg-accent text-primary-dark px-3 py-1 rounded-full text-sm font-bold">
                        {terrain.type}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{terrain.title}</h3>
                    <p className="text-gray-400 mb-4">
                      <svg className="w-4 h-4 inline-block mr-1 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {terrain.location}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="bg-primary-dark/30 p-3 rounded-lg text-center">
                        <span className="block text-gray-400">Surface</span>
                        <span className="font-bold">{terrain.surface} m2</span>
                      </div>
                      <div className="bg-primary-dark/30 p-3 rounded-lg text-center">
                        <span className="block text-gray-400">Prix/m2</span>
                        <span className="font-bold text-accent-light">{terrain.prixM2.toLocaleString()} FCFA</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-2xl font-bold text-accent-light">{terrain.prix.toLocaleString()} FCFA</span>
                      <span className="text-sm bg-green-900/50 text-green-400 px-3 py-1 rounded-full">{terrain.statut}</span>
                    </div>
                    <Link
                      href={`/terrains/${terrain.id}`}
                      className="btn-primary w-full text-center block"
                    >
                      Voir les details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}