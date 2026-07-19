'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link'

// ============================================
// DONNÉES DES PRODUITS AVEC IMAGES RÉELLES
// ============================================
const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    description: 'iPhone 15 Pro Max 256Go - Titanium Naturel. Débloqué tous opérateurs, état neuf sous blister.',
    price: 850000,
    originalPrice: 950000,
    category: 'Électronique',
    image: '/images/iphone.png',
    badge: 'Promo',
    badgeColor: 'bg-red-500',
    rating: 5,
    reviews: 24,
    seller: 'TechStore Cameroun',
    location: 'Yaoundé',
  },
  {
    id: 2,
    name: 'Canapé Italien de Luxe',
    description: 'Canapé italien design moderne, revêtement cuir véritable. Idéal pour salon haut de gamme.',
    price: 450000,
    originalPrice: 650000,
    category: 'Maison & Décoration',
    image: '/images/canape-italien.jpeg',
    badge: 'Coup de cœur',
    badgeColor: 'bg-[#D4AF37]',
    rating: 4,
    reviews: 18,
    seller: 'ItalDesign Cameroun',
    location: 'Douala',
  },
  {
    id: 3,
    name: 'Robe de Mariage Princesse',
    description: 'Robe de mariage style princesse avec dentelle française. Sur-mesure disponible.',
    price: 180000,
    originalPrice: 250000,
    category: 'Mode & Beauté',
    image: '/images/robe-mariage.jpeg',
    badge: 'Nouveau',
    badgeColor: 'bg-green-500',
    rating: 5,
    reviews: 32,
    seller: 'Mariage Prestige',
    location: 'Yaoundé',
  },
  {
    id: 4,
    name: 'Matelas Orthopédique Premium',
    description: 'Matelas orthopédique 180x200 avec mémoire de forme. Garantie 10 ans.',
    price: 220000,
    category: 'Maison & Décoration',
    image: '/images/matelas.jpeg',
    rating: 4,
    reviews: 15,
    seller: 'Sommeil d\'Or',
    location: 'Yaoundé',
  },
  {
    id: 5,
    name: 'Laptop Dell XPS 15',
    description: 'Dell XPS 15 - Intel Core i7 13e génération, 16Go RAM, 512Go SSD. Écran OLED 4K.',
    price: 780000,
    originalPrice: 920000,
    category: 'Électronique',
    image: '/images/laptop-dell.jpg',
    badge: 'Promo',
    badgeColor: 'bg-red-500',
    rating: 5,
    reviews: 42,
    seller: 'PC Expert Cameroun',
    location: 'Douala',
  },
  {
    id: 6,
    name: 'Toyota Corolla 2024',
    description: 'Toyota Corolla LE 2024 - 0 km, garantie constructeur 3 ans. Climatisation, caméra de recul.',
    price: 18500000,
    category: 'Véhicules',
    image: '/images/toyota-corolla.jpeg',
    badge: 'Premium',
    badgeColor: 'bg-[#D4AF37]',
    rating: 5,
    reviews: 8,
    seller: 'Auto Premium Cameroun',
    location: 'Yaoundé',
  },
  {
    id: 7,
    name: 'Moto Yamaha MT-07',
    description: 'Yamaha MT-07 2024 - 689cc, ABS, idéale pour la ville et les sorties. Importation neuve.',
    price: 4200000,
    category: 'Véhicules',
    image: '/images/yamaha.jpg',
    badge: 'Rare',
    badgeColor: 'bg-purple-500',
    rating: 5,
    reviews: 12,
    seller: 'MotoSport Cameroun',
    location: 'Douala',
  },
  {
    id: 8,
    name: 'Appartement Meublé Yaoundé',
    description: 'Appartement 3 chambres entièrement meublé à Bastos. Cuisine équipée, climatisation, parking.',
    price: 85000000,
    category: 'Immobilier',
    image: '/images/appartement.jpg',
    badge: 'Exclusif',
    badgeColor: 'bg-[#D4AF37]',
    rating: 5,
    reviews: 6,
    seller: 'Cbomelly Immobilier',
    location: 'Yaoundé',
  },
  {
    id: 9,
    name: 'Photographe Professionnel',
    description: 'Service de photographie professionnelle pour mariages, événements, portraits. Matériel haut de gamme.',
    price: 50000,
    category: 'Services',
    image: '/images/photographe.jpeg',
    rating: 4,
    reviews: 28,
    seller: 'PhotoArt Studio',
    location: 'Yaoundé',
  },
]

// ============================================
// CATÉGORIES ET OPTIONS DE FILTRE
// ============================================
const categories = [
  { id: 'all', name: 'Toutes les catégories', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
  { id: 'Électronique', name: 'Électronique', icon: 'M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { id: 'Maison & Décoration', name: 'Maison & Décoration', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'Mode & Beauté', name: 'Mode & Beauté', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
  { id: 'Véhicules', name: 'Véhicules', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 'Immobilier', name: 'Immobilier', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5' },
  { id: 'Services', name: 'Services', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
]

// ============================================
// COMPOSANT PRINCIPAL
// ============================================
export default function MellyMarketPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  // Filtrage des produits
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesPrice = priceRange === 'all' ||
        (priceRange === '0-50000' && product.price <= 50000) ||
        (priceRange === '50000-200000' && product.price > 50000 && product.price <= 200000) ||
        (priceRange === '200000-500000' && product.price > 200000 && product.price <= 500000) ||
        (priceRange === '500000-1000000' && product.price > 500000 && product.price <= 1000000) ||
        (priceRange === '1000000+' && product.price > 1000000)
      return matchesCategory && matchesSearch && matchesPrice
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return b.id - a.id // newest first
    })

  // Formatage du prix
  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
  }

  // Ajout au panier
  const addToCart = (productName) => {
    setCartCount(prev => prev + 1)
    // Animation ou notification ici
  }

  // Étoiles de notation
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-[#D4AF37]' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <>
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/terrain-background3.jpeg"
            alt="Melly Market - Votre marketplace au Cameroun"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/95"></div>
        </div>

        {/* Particules */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          {/* Logo Melly */}
          <div className="mb-6" data-aos="fade-down" data-aos-duration="1000">
            <Image
              src="/images/melly-logo.png"
              alt="Melly Groupe Logo"
              width={100}
              height={100}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6" data-aos="fade-up">
            Melly <span className="text-[#D4AF37]">Market</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
            Achetez et vendez tout au Cameroun : électronique, mode, maison, véhicules et plus encore
          </p>

          {/* Barre de recherche Hero */}
          <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Que recherchez-vous ?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-slate-800/80 backdrop-blur-sm border border-gray-600 rounded-xl text-white text-lg focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CATÉGORIES SECTION */}
      {/* ============================================ */}
      <section className="py-12 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4" data-aos="fade-up">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#D4AF37] text-slate-900 shadow-lg shadow-[#D4AF37]/30 scale-105'
                    : 'bg-slate-900/50 text-gray-300 hover:bg-slate-800 hover:text-[#D4AF37] border border-gray-700/50'
                }`}
              >
                <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                </svg>
                <span className="text-xs font-semibold block truncate">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FILTRES ET TRI */}
      {/* ============================================ */}
      <section className="py-6 bg-slate-900 sticky top-20 z-30 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <p className="text-gray-400 font-medium">
              <span className="text-[#D4AF37] font-bold">{filteredProducts.length}</span> produits trouvés
            </p>
            <div className="flex gap-4">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 bg-slate-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="all">Tous les prix</option>
                <option value="0-50000">Moins de 50 000 FCFA</option>
                <option value="50000-200000">50 000 - 200 000 FCFA</option>
                <option value="200000-500000">200 000 - 500 000 FCFA</option>
                <option value="500000-1000000">500 000 - 1 000 000 FCFA</option>
                <option value="1000000+">Plus de 1 000 000 FCFA</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-slate-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="newest">Plus récents</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="rating">Meilleures notes</option>
                <option value="name">Nom A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GRILLE DE PRODUITS */}
      {/* ============================================ */}
      <section className="section-padding bg-slate-900">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 card-hover group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Image du produit */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                        {product.badge}
                      </div>
                    )}

                    {/* Réduction */}
                    {product.originalPrice && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </div>
                    )}

                    {/* Overlay au survol */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <button
                        onClick={() => addToCart(product.name)}
                        className="bg-[#D4AF37] text-slate-900 px-6 py-2 rounded-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#FFD700]"
                      >
                        <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                        </svg>
                        Ajouter au panier
                      </button>
                    </div>
                  </div>

                  {/* Détails du produit */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                        <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        {product.originalPrice && (
                          <span className="text-gray-500 line-through text-sm mr-2">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                        <span className="text-2xl font-extrabold text-[#D4AF37]">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                      <div className="flex items-center text-sm text-gray-400">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {product.location}
                      </div>
                      <span className="text-xs text-gray-500">
                        {product.seller}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // État vide
            <div className="text-center py-20">
              <svg className="w-24 h-24 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">Aucun produit trouvé</h3>
              <p className="text-gray-500 mb-6">Essayez de modifier vos critères de recherche</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                  setPriceRange('all')
                  setSortBy('newest')
                }}
                className="btn-primary"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section className="section-padding bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Vous souhaitez <span className="text-[#D4AF37]">Vendre</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez <strong className="text-[#D4AF37]">Melly Market</strong> et proposez vos produits à des milliers d'acheteurs au Cameroun.
          </p>
          <a
            href="https://wa.me/237699999999?text=Bonjour,%20je%20souhaite%20vendre%20sur%20Melly%20Market"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block pulse-gold"
          >
            <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
            Publier une annonce
          </a>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATISTIQUES */}
      {/* ============================================ */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10 000+', label: 'Produits disponibles' },
              { value: '5 000+', label: 'Vendeurs actifs' },
              { value: '50 000+', label: 'Acheteurs satisfaits' },
              { value: '24/7', label: 'Support client' },
            ].map((stat, index) => (
              <div key={stat.label} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-3xl md:text-4xl font-extrabold text-[#D4AF37] mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}