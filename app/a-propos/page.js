'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link'

export default function AProposPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const stats = [
    { value: '500+', label: 'Terrains vendus' },
    { value: '15+', label: 'Annees d\'experience' },
    { value: '98%', label: 'Clients satisfaits' },
    { value: '4', label: 'Zones couvertes' },
  ]

  const valeurs = [
    {
      titre: 'Transparence',
      description: 'Nous croyons en une communication claire et honnete avec tous nos clients. Chaque transaction est menee en toute transparence.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
    {
      titre: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque aspect de notre travail, de la selection des terrains au service client.',
      icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    },
    {
      titre: 'Integrite',
      description: 'L\'integrite est au coeur de notre demarche. Nous respectons nos engagements et garantissons la qualite de nos services.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    },
    {
      titre: 'Innovation',
      description: 'Nous utilisons les technologies modernes pour simplifier l\'acces a la propriete fonciere et offrir une experience client optimale.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    },
  ]

  const equipe = [
    {
      nom: 'Directeur General',
      description: 'Plus de 15 ans d\'experience dans l\'immobilier au Cameroun',
    },
    {
      nom: 'Responsable Juridique',
      description: 'Expert en droit foncier et procedures administratives',
    },
    {
      nom: 'Responsable Commercial',
      description: 'Specialiste en relation client et negociation',
    },
    {
      nom: 'Geometre Expert',
      description: 'Professionnel du bornage et des releves topographiques',
    },
  ]

  const zones = [
    {
      nom: 'SOA',
      description: 'Zone residentielle en pleine expansion, ideale pour l\'habitation et l\'investissement',
      image: '/images/terrain1.jpg',
    },
    {
      nom: 'Nkometou',
      description: 'Quartier paisible avec un fort potentiel agricole et residentiel',
      image: '/images/terrain2.jpg',
    },
    {
      nom: 'Barriere',
      description: 'Proche du centre-ville, parfait pour les residences principales',
      image: '/images/terrain4.png',
    },
    {
      nom: 'Mbankomo',
      description: 'Cadre naturel exceptionnel pour residences secondaires et projets haut de gamme',
      image: '/images/terrain3.jpg',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/terrain-background.jpg"
            alt="A propos de Cbomelly"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/95"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6" data-aos="fade-up">
            A <span className="text-accent-light">Propos</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
            Decouvrez l'histoire et les valeurs qui font de Cbomelly votre partenaire de confiance
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold mb-6">
                Notre <span className="text-accent-light">Histoire</span>
              </h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Cbomelly est ne d'une vision simple : rendre l'acces a la propriete fonciere plus sur et plus accessible pour tous les Camerounais.
                </p>
                <p>
                  Depuis plus de 15 ans, nous accompagnons nos clients dans leurs projets immobiliers avec professionnalisme et integrite. Notre expertise du marche foncier camerounais nous permet d'offrir des terrains soigneusement selectionnes dans les zones les plus prometteuses.
                </p>
                <p>
                  Aujourd'hui, Cbomelly est devenu un groupe diversifie avec Melly Market pour le commerce en ligne et Melly Emploi pour les opportunites professionnelles. Notre mission reste la meme : creer de la valeur pour nos clients et contribuer au developpement economique du Cameroun.
                </p>
              </div>
            </div>
            <div data-aos="fade-left">
              <img
                src="/images/terrain10.jpeg"
                alt="Notre histoire"
                className="rounded-2xl w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="section-padding bg-primary-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl font-bold text-accent-light mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Nos <span className="text-accent-light">Valeurs</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((valeur, index) => (
              <div
                key={valeur.titre}
                className="bg-primary-dark/30 rounded-2xl p-8 border border-primary/30 card-hover text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={valeur.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{valeur.titre}</h3>
                <p className="text-gray-400">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Equipe */}
      <section className="section-padding bg-primary-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Notre <span className="text-accent-light">Equipe</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des professionnels passionnes a votre service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipe.map((membre, index) => (
              <div
                key={membre.nom}
                className="bg-primary-dark/30 rounded-2xl p-8 border border-primary/30 card-hover text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{membre.nom}</h3>
                <p className="text-gray-400">{membre.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Zones d'Expertise */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Nos Zones <span className="text-accent-light">d'Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nous operons dans les zones les plus prometteuses de Yaounde et ses environs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {zones.map((zone, index) => (
              <div
                key={zone.nom}
                className="bg-primary-dark/30 rounded-2xl overflow-hidden border border-primary/30 card-hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48">
                  <img
                    src={zone.image}
                    alt={zone.nom}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{zone.nom}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400">{zone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-dark/50">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pret a <span className="text-accent-light">Investir</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactez-nous des aujourd'hui et beneficiez de notre expertise pour votre projet immobilier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Nous Contacter
            </Link>
            <Link href="/terrains" className="btn-outline">
              Voir nos Terrains
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}