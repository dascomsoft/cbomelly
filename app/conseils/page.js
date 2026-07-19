'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

export default function ConseilsPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const etapes = [
    {
      numero: 1,
      titre: 'Verifiez le Titre Foncier',
      description: 'Le titre foncier est le document le plus important. Exigez l\'original et verifiez son authenticite aupres des services du cadastre.',
      conseil: 'Faites-vous accompagner par un notaire ou un expert foncier pour la verification des documents.',
    },
    {
      numero: 2,
      titre: 'Consultez le Plan Cadastral',
      description: 'Le plan cadastral vous permet de verifier les limites exactes du terrain, sa superficie reelle et sa situation geographique precise.',
      conseil: 'Effectuez une visite sur place avec un geometre pour borner le terrain.',
    },
    {
      numero: 3,
      titre: 'Verifiez l\'Identite du Vendeur',
      description: 'Assurez-vous que le vendeur est bien le proprietaire legitime du terrain. Verifiez sa piece d\'identite.',
      conseil: 'Mefiez-vous des intermediaires qui ne peuvent pas prouver leur mandat.',
    },
    {
      numero: 4,
      titre: 'Verifiez les Charges et Hypotheques',
      description: 'Un terrain peut etre greve d\'hypotheques ou de servitudes. Consultez le registre foncier.',
      conseil: 'Demandez un certificat de non-hypotheque datant de moins de 3 mois.',
    },
    {
      numero: 5,
      titre: 'Redigez un Contrat de Vente',
      description: 'Le contrat de vente doit etre redige par un notaire et preciser toutes les conditions de la transaction.',
      conseil: 'Ne signez jamais un contrat sans l\'avoir fait verifier par votre propre conseil juridique.',
    },
    {
      numero: 6,
      titre: 'Payez par Voie Bancaire',
      description: 'Evitez les paiements en especes. Privilegiez les virements bancaires ou les cheques certifies.',
      conseil: 'Conservez tous les recus et justificatifs de paiement.',
    },
    {
      numero: 7,
      titre: 'Faites la Mutation du Titre Foncier',
      description: 'La mutation est l\'etape finale qui transfere officiellement la propriete a votre nom.',
      conseil: 'C\'est l\'etape la plus importante. Assurez-vous qu\'elle est correctement effectuee.',
    },
  ]

  const arnaques = [
    {
      titre: 'Double Vente',
      description: 'Un meme terrain est vendu a plusieurs personnes simultanement.',
      solution: 'Verifiez systematiquement le titre foncier et effectuez la mutation immediatement apres l\'achat.',
    },
    {
      titre: 'Faux Titres Fonciers',
      description: 'Des escrocs creent de faux documents ressemblant a des titres fonciers authentiques.',
      solution: 'Faites authentifier tous les documents par les services du cadastre avant tout paiement.',
    },
    {
      titre: 'Terrain en Zone Non Constructible',
      description: 'Le terrain est situe dans une zone ou la construction est interdite.',
      solution: 'Consultez le plan d\'urbanisme local et verifiez la destination du terrain avant l\'achat.',
    },
    {
      titre: 'Vente par un Faux Proprietaire',
      description: 'Une personne se fait passer pour le proprietaire avec de faux documents.',
      solution: 'Verifiez l\'identite du vendeur et exigez une rencontre chez le notaire.',
    },
  ]

  const documents = [
    { titre: 'Titre Foncier Original', description: 'Document officiel etablissant la propriete du terrain.' },
    { titre: 'Plan de Situation', description: 'Plan montrant l\'emplacement exact du terrain.' },
    { titre: 'Certificat de Non-Hypotheque', description: 'Prouve que le terrain n\'est pas greve d\'hypotheques.' },
    { titre: 'Piece d\'Identite du Vendeur', description: 'CNI ou passeport du vendeur.' },
    { titre: 'Contrat de Vente Notarie', description: 'Acte de vente redige par un notaire.' },
    { titre: 'Quitus Fiscal', description: 'Prouve que tous les impots fonciers ont ete payes.' },
  ]

  const faq = [
    {
      question: 'Quel est le delai pour obtenir un titre foncier ?',
      reponse: 'La procedure peut prendre entre 3 et 12 mois selon la complexite du dossier. Nous recommandons d\'acheter des terrains deja titres.',
    },
    {
      question: 'Quels sont les frais annexes a prevoir ?',
      reponse: 'Prevoyez les frais de notaire (environ 5-10%), les droits de mutation, les frais de bornage et de viabilisation.',
    },
    {
      question: 'Puis-je acheter un terrain sans titre foncier ?',
      reponse: 'Nous le deconseillons fortement. Un terrain sans titre foncier presente des risques juridiques importants.',
    },
    {
      question: 'Comment Cbomelly securise-t-elle mes transactions ?',
      reponse: 'Tous nos terrains sont verifies juridiquement. Nous travaillons avec des notaires agrees.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/terrain-background2.jpg" alt="Conseils immobiliers" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/95"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6" data-aos="fade-up">
            Guide <span className="text-accent-light">d'Achat</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
            Tout ce que vous devez savoir pour acheter un terrain au Cameroun en toute securite
          </p>
          <div className="bg-red-900/20 border border-red-900/50 p-6 rounded-2xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            <p className="text-lg">
              <svg className="w-6 h-6 inline-block mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="font-bold text-red-400">Attention :</span> L'achat d'un terrain est un investissement important. Informez-vous avant toute decision.
            </p>
          </div>
        </div>
      </section>

      {/* Etapes */}
      <section className="section-padding bg-primary-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Les <span className="text-accent-light">7 Etapes</span> pour un Achat Securise
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="space-y-8">
            {etapes.map((etape, index) => (
              <div
                key={etape.numero}
                className="bg-primary-dark/30 rounded-2xl p-8 border border-primary/30"
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-dark font-bold text-xl mr-6 flex-shrink-0">
                    {etape.numero}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{etape.titre}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{etape.description}</p>
                    <div className="bg-primary-dark/50 p-4 rounded-lg border-l-4 border-accent">
                      <p className="text-sm text-gray-300">
                        <svg className="w-5 h-5 inline-block mr-2 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span className="font-bold text-accent-light">Conseil Cbomelly :</span> {etape.conseil}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arnaques */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Les <span className="text-red-400">Arnaques</span> a Eviter
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {arnaques.map((arnaque, index) => (
              <div
                key={arnaque.titre}
                className="bg-red-900/10 rounded-2xl p-8 border border-red-900/30"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <h3 className="text-2xl font-bold text-red-400">{arnaque.titre}</h3>
                </div>
                <p className="text-gray-300 mb-4">{arnaque.description}</p>
                <div className="bg-primary-dark/50 p-4 rounded-lg">
                  <p className="text-sm">
                    <span className="font-bold text-accent-light">Solution :</span> {arnaque.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding bg-primary-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Documents <span className="text-accent-light">Essentiels</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div
                key={doc.titre}
                className="bg-primary-dark/30 rounded-2xl p-6 border border-primary/30 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <svg className="w-12 h-12 text-accent-light mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-bold mb-2">{doc.titre}</h3>
                <p className="text-gray-400 text-sm">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Questions <span className="text-accent-light">Frequentes</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div
                key={item.question}
                className="bg-primary-dark/30 rounded-xl p-6 border border-primary/30"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-3">
                  <svg className="w-6 h-6 inline-block mr-2 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.question}
                </h3>
                <p className="text-gray-400">{item.reponse}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-dark/50">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'un <span className="text-accent-light">Accompagnement</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nos experts sont a votre disposition pour vous guider dans votre projet d'achat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contactez-nous
            </Link>
            <a
              href="https://wa.me/237673620096"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              WhatsApp : 673 620 096
            </a>
          </div>
        </div>
      </section>
    </>
  )
}