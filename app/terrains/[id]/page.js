'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function TerrainDetailPage() {
  const params = useParams()
  const { id } = params

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
      images: ['/images/terrain1.jpg', '/images/terrain-background.jpg', '/images/terrain-background2.jpg'],
      statut: 'Disponible',
      type: 'Premium',
      description: 'Magnifique terrain residentiel dans un quartier calme et securise de SOA. Proche des commodites et des axes routiers. Ce terrain offre un cadre de vie ideal pour votre future residence.',
      caracteristiques: [
        'Titre foncier disponible',
        'Acces a l\'eau et electricite',
        'Quartier securise',
        'Proche ecoles et commerces',
        'Zone constructible',
        'Viabilise',
      ],
      documents: [
        'Titre foncier original',
        'Plan de situation',
        'Certificat de non-hypotheque',
        'Quitus fiscal',
      ],
    },
    {
      id: 2,
      title: 'Lotissement Nkometou',
      location: 'Nkometou, Yaoundé',
      surface: 400,
      prix: 8500000,
      prixM2: 21250,
      image: '/images/terrain2.jpg',
      images: ['/images/terrain2.jpg', '/images/terrain7.jpeg', '/images/terrain-background3.jpeg'],
      statut: 'Disponible',
      type: 'Standard',
      description: 'Terrain dans un lotissement en plein developpement. Ideal pour construction residentielle ou investissement locatif.',
      caracteristiques: [
        'Lotissement prive',
        'Eau et electricite a proximite',
        'Zone en developpement',
        'Bon potentiel de plus-value',
        'Acces route goudronnee',
      ],
      documents: [
        'Titre foncier',
        'Plan cadastral',
        'Certificat de propriete',
      ],
    },
    {
      id: 3,
      title: 'Domaine Mbankomo',
      location: 'Mbankomo, Yaoundé',
      surface: 600,
      prix: 12000000,
      prixM2: 20000,
      image: '/images/terrain3.jpg',
      images: ['/images/terrain3.jpg', '/images/terrain10.jpeg', '/images/terrain.webp'],
      statut: 'Dernieres unites',
      type: 'Urgent',
      description: 'Grand terrain dans un domaine prive et securise. Vue imprenable sur la nature environnante.',
      caracteristiques: [
        'Domaine securise',
        'Vue panoramique',
        'Calme et paisible',
        'Grande superficie',
        'Ideal residence secondaire',
      ],
      documents: [
        'Titre foncier',
        'Plan du domaine',
        'Reglement de copropriete',
      ],
    },
    {
      id: 4,
      title: 'Parcelle Barriere',
      location: 'Barriere, Yaoundé',
      surface: 350,
      prix: 10000000,
      prixM2: 28571,
      image: '/images/terrain4.png',
      images: ['/images/terrain4.png', '/images/terrain5.jpg', '/images/terrain7.jpg'],
      statut: 'Disponible',
      type: 'Standard',
      description: 'Terrain bien situe a proximite du centre-ville. Tous les documents sont en regle.',
      caracteristiques: [
        'Proche centre-ville',
        'Documents en regle',
        'Quartier residentiel',
        'Commerces a proximite',
      ],
      documents: [
        'Titre foncier',
        'Plan de situation',
        'Certificat de non-hypotheque',
      ],
    },
    {
      id: 5,
      title: 'Grand Domaine SOA',
      location: 'SOA, Yaoundé',
      surface: 1000,
      prix: 25000000,
      prixM2: 25000,
      image: '/images/terrain5.jpg',
      images: ['/images/terrain5.jpg', '/images/terrain8.jpeg', '/images/terrain-background.jpg'],
      statut: 'Disponible',
      type: 'Premium',
      description: 'Vaste terrain ideal pour grand projet residentiel ou agricole. Titre foncier disponible.',
      caracteristiques: [
        'Grande superficie',
        'Titre foncier disponible',
        'Polyvalent',
        'Bon investissement',
        'Zone d\'avenir',
      ],
      documents: [
        'Titre foncier original',
        'Plan cadastral',
        'Etude de sol disponible',
      ],
    },
    {
      id: 6,
      title: 'Terrain Agricole Nkometou',
      location: 'Nkometou, Yaoundé',
      surface: 2000,
      prix: 30000000,
      prixM2: 15000,
      image: '/images/terrain7.jpg',
      images: ['/images/terrain7.jpg', '/images/terrain1.jpg', '/images/terrain2.jpg'],
      statut: 'Disponible',
      type: 'Nouveau',
      description: 'Terrain agricole avec acces a l\'eau. Parfait pour l\'agriculture ou l\'elevage.',
      caracteristiques: [
        'Acces a l\'eau',
        'Terrain fertile',
        'Grande superficie',
        'Ideal agriculture',
        'Possibilite elevage',
      ],
      documents: [
        'Titre foncier',
        'Plan de situation',
        'Analyse du sol',
      ],
    },
  ]

  const terrain = terrains.find(t => t.id === parseInt(id))

  if (!terrain) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Terrain non trouve</h1>
          <Link href="/terrains" className="btn-primary">
            Retour aux terrains
          </Link>
        </div>
      </div>
    )
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Bonjour, je suis interesse par le terrain : *${terrain.title}*\n\n` +
      `Localisation : ${terrain.location}\n` +
      `Surface : ${terrain.surface} m2\n` +
      `Prix : ${terrain.prix.toLocaleString()} FCFA\n` +
      `Prix/m2 : ${terrain.prixM2.toLocaleString()} FCFA\n\n` +
      `Pouvez-vous me donner plus d'informations et organiser une visite ?`
    )
    window.open(`https://wa.me/237673620096?text=${message}`, '_blank')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={terrain.image} alt={terrain.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/70 to-primary-dark/95"></div>
        </div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto pt-20">
          <div className="flex flex-wrap gap-2 mb-4" data-aos="fade-up">
            <span className="bg-accent text-primary-dark px-4 py-1 rounded-full text-sm font-bold">{terrain.type}</span>
            <span className="bg-green-900/50 text-green-400 px-4 py-1 rounded-full text-sm">{terrain.statut}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4" data-aos="fade-up" data-aos-delay="200">
            {terrain.title}
          </h1>
          <p className="text-xl text-gray-300 mb-6" data-aos="fade-up" data-aos-delay="400">
            <svg className="w-5 h-5 inline-block mr-2 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {terrain.location}
          </p>
          <div className="text-4xl font-bold text-accent-light mb-8" data-aos="fade-up" data-aos-delay="600">
            {terrain.prix.toLocaleString()} FCFA
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-primary-dark/30 rounded-2xl p-8 border border-primary/30" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-6">Description</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{terrain.description}</p>
              </div>

              {/* Galerie */}
              <div className="bg-primary-dark/30 rounded-2xl p-8 border border-primary/30" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-6">Galerie</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {terrain.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${terrain.title} - Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="bg-primary-dark/30 rounded-2xl p-8 border border-primary/30" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-6">Documents Disponibles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {terrain.documents.map((doc, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-primary-dark/50 p-4 rounded-lg">
                      <svg className="w-6 h-6 text-accent-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-gray-300">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Prix */}
              <div className="bg-primary-dark/30 rounded-2xl p-8 border border-primary/30 sticky top-24" data-aos="fade-left">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-accent-light mb-2">{terrain.prix.toLocaleString()} FCFA</div>
                  <div className="text-gray-400">{terrain.prixM2.toLocaleString()} FCFA / m2</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-primary/20">
                    <span className="text-gray-400">Surface</span>
                    <span className="font-bold">{terrain.surface} m2</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-primary/20">
                    <span className="text-gray-400">Localisation</span>
                    <span className="font-bold">{terrain.location}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-primary/20">
                    <span className="text-gray-400">Statut</span>
                    <span className="text-green-400 font-bold">{terrain.statut}</span>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="btn-whatsapp w-full justify-center mb-4"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  Acheter via WhatsApp
                </button>

                <a href="tel:+237673620096" className="btn-primary w-full justify-center flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Appeler : 673 620 096
                </a>
              </div>

              {/* Caracteristiques */}
              <div className="bg-primary-dark/30 rounded-2xl p-8 border border-primary/30" data-aos="fade-left">
                <h3 className="text-xl font-bold mb-4">Caracteristiques</h3>
                <ul className="space-y-3">
                  {terrain.caracteristiques.map((carac, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-accent-light mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{carac}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}