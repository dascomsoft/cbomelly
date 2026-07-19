'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function MellyEmploiPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const jobTypes = [
    { id: 'all', name: 'Tous les types' },
    { id: 'cdi', name: 'CDI' },
    { id: 'cdd', name: 'CDD' },
    { id: 'freelance', name: 'Freelance' },
    { id: 'stage', name: 'Stage' },
    { id: 'temps-partiel', name: 'Temps partiel' },
  ]

  const locations = [
    { id: 'all', name: 'Toutes les villes' },
    { id: 'yaounde', name: 'Yaoundé' },
    { id: 'douala', name: 'Douala' },
    { id: 'bafoussam', name: 'Bafoussam' },
    { id: 'garoua', name: 'Garoua' },
    { id: 'maroua', name: 'Maroua' },
  ]

  const jobs = [
    {
      id: 1,
      title: 'Développeur Full-Stack Senior',
      company: 'TechAfrica Solutions',
      location: 'Yaoundé',
      type: 'cdi',
      salary: '500 000 - 800 000 FCFA',
      description: 'Nous recherchons un développeur Full-Stack expérimenté pour rejoindre notre équipe dynamique. Vous serez responsable du développement et de la maintenance de nos applications web et mobiles.',
      requirements: [
        'Minimum 5 ans d\'expérience en développement web',
        'Maîtrise de React, Node.js, et PostgreSQL',
        'Expérience avec AWS ou Google Cloud',
        'Capacité à travailler en équipe',
      ],
      benefits: [
        'Salaire compétitif',
        'Assurance santé',
        'Formation continue',
        'Télétravail possible',
      ],
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Comptable Senior',
      company: 'Groupe Financier Africain',
      location: 'Douala',
      type: 'cdi',
      salary: '350 000 - 500 000 FCFA',
      description: 'Le Groupe Financier Africain recherche un comptable senior pour gérer la comptabilité de plusieurs filiales. Vous superviserez une équipe de 3 comptables juniors.',
      requirements: [
        'Diplôme en comptabilité (DECF, DSCG ou équivalent)',
        'Minimum 7 ans d\'expérience',
        'Maîtrise des normes comptables OHADA',
        'Expérience avec les logiciels de comptabilité',
      ],
      benefits: [
        'Salaire attractif',
        'Prime de performance',
        'Véhicule de fonction',
        'Mutuelle familiale',
      ],
      date: '2024-01-10',
    },
    {
      id: 3,
      title: 'Responsable Marketing Digital',
      company: 'DigitalCom Agency',
      location: 'Yaoundé',
      type: 'cdi',
      salary: '300 000 - 450 000 FCFA',
      description: 'DigitalCom Agency, agence de marketing digital leader au Cameroun, recherche un responsable marketing digital pour piloter les stratégies digitales de nos clients.',
      requirements: [
        'Bac+4/5 en marketing ou communication',
        '3 ans d\'expérience en marketing digital',
        'Maîtrise des outils Google Ads, Facebook Ads, Analytics',
        'Excellentes capacités rédactionnelles',
      ],
      benefits: [
        'Salaire motivant',
        'Commissions sur résultats',
        'Ordinateur portable fourni',
        'Abonnement internet',
      ],
      date: '2024-01-12',
    },
    {
      id: 4,
      title: 'Infirmier(ère) Diplômé(e) d\'État',
      company: 'Clinique Sainte Marie',
      location: 'Bafoussam',
      type: 'cdd',
      salary: '200 000 - 280 000 FCFA',
      description: 'La Clinique Sainte Marie recrute des infirmiers(ères) pour renforcer ses équipes. Postes en CDD de 12 mois renouvelables avec possibilité de CDI.',
      requirements: [
        'Diplôme d\'État d\'infirmier',
        'Inscription à l\'Ordre des Infirmiers',
        'Minimum 2 ans d\'expérience',
        'Disponibilité pour travail de nuit',
      ],
      benefits: [
        'Salaire selon convention',
        'Prime de garde',
        'Logement possible',
        'Formation continue',
      ],
      date: '2024-01-08',
    },
    {
      id: 5,
      title: 'Graphiste Designer Freelance',
      company: 'Plusieurs clients',
      location: 'Yaoundé',
      type: 'freelance',
      salary: 'Selon projets',
      description: 'Nous mettons en relation des graphistes talentueux avec des entreprises cherchant des services de design. Travail à distance possible.',
      requirements: [
        'Portfolio solide',
        'Maîtrise de la suite Adobe',
        'Créativité et réactivité',
        'Autonomie',
      ],
      benefits: [
        'Horaires flexibles',
        'Travail à distance',
        'Projets variés',
        'Paiement sécurisé',
      ],
      date: '2024-01-05',
    },
    {
      id: 6,
      title: 'Chef de Projet Construction',
      company: 'BTP Excellence',
      location: 'Douala',
      type: 'cdi',
      salary: '600 000 - 900 000 FCFA',
      description: 'BTP Excellence, leader de la construction au Cameroun, recherche un chef de projet expérimenté pour superviser nos grands chantiers.',
      requirements: [
        'Diplôme d\'ingénieur en génie civil',
        '10 ans d\'expérience en gestion de projets',
        'Maîtrise des normes de construction',
        'Leadership et gestion d\'équipe',
      ],
      benefits: [
        'Salaire très compétitif',
        'Véhicule de fonction',
        'Logement',
        'Prime de chantier',
      ],
      date: '2024-01-01',
    },
  ]

  const filteredJobs = jobs.filter(job => {
    const matchesType = selectedType === 'all' || job.type === selectedType
    const matchesLocation = selectedLocation === 'all' || job.location.toLowerCase() === selectedLocation
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesLocation && matchesSearch
  })

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('fr-FR', options)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/terrain-background3.jpeg"
            alt="Melly Emploi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/95"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6" data-aos="fade-up">
            Melly <span className="text-accent-light">Emploi</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
            Trouvez les meilleures opportunités professionnelles au Cameroun
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-primary-dark/50 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4" data-aos="fade-up">
            <div className="flex-1 relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher un emploi, une entreprise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-primary-dark/30 border border-primary/30 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 bg-primary-dark/30 border border-primary/30 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
            >
              {jobTypes.map((type) => (
                <option key={type.id} value={type.id} className="bg-primary-dark">
                  {type.name}
                </option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 bg-primary-dark/30 border border-primary/30 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
            >
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id} className="bg-primary-dark">
                  {loc.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold">
              <span className="text-accent-light">{filteredJobs.length}</span> Offres d'Emploi
            </h2>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className="bg-primary-dark/30 rounded-2xl p-8 border border-primary/30 card-hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        <p className="text-accent-light font-semibold">{job.company}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6">{job.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-white mb-3">Profil Recherché</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start text-gray-400">
                              <svg className="w-5 h-5 text-accent-light mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-3">Avantages</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start text-gray-400">
                              <svg className="w-5 h-5 text-accent-light mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="lg:ml-8 mt-6 lg:mt-0 flex flex-col items-start lg:items-end space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-accent/20 text-accent-light rounded-full text-sm font-semibold">
                        {job.type.toUpperCase()}
                      </span>
                      <span className="px-3 py-1 bg-primary/30 text-gray-300 rounded-full text-sm">
                        {job.location}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-accent-light">{job.salary}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Publié le {formatDate(job.date)}
                      </p>
                    </div>
                    <button className="btn-primary">
                      Postuler
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-20">
              <svg className="w-24 h-24 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-400 mb-2">Aucune offre trouvée</h3>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Post Job CTA */}
      <section className="section-padding bg-primary-dark/50">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vous <span className="text-accent-light">Recrutez</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Publiez votre offre d'emploi sur Melly Emploi et trouvez les meilleurs talents.
          </p>
          <a
            href="https://wa.me/237699999999?text=Bonjour,%20je%20souhaite%20publier%20une%20offre%20d'emploi%20sur%20Melly%20Emploi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            <svg className="w-5 h-5 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
            Publier une offre
          </a>
        </div>
      </section>
    </>
  )
}