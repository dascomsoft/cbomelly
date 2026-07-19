'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  })

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `Nouveau message de contact :\n\n` +
      `Nom : ${formData.nom}\n` +
      `Email : ${formData.email}\n` +
      `Telephone : ${formData.telephone}\n` +
      `Sujet : ${formData.sujet}\n\n` +
      `Message : ${formData.message}`
    )
    window.open(`https://wa.me/237673620096?text=${message}`, '_blank')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const faq = [
    {
      question: 'Comment puis-je visiter un terrain ?',
      reponse: 'Contactez-nous par telephone ou WhatsApp au 673 620 096 pour organiser une visite sur place.',
    },
    {
      question: 'Quels sont vos horaires d\'ouverture ?',
      reponse: 'Nous sommes disponibles du lundi au samedi de 8h a 18h. Vous pouvez nous contacter 24h/24 via WhatsApp.',
    },
    {
      question: 'Proposez-vous des facilites de paiement ?',
      reponse: 'Oui, nous proposons des plans de paiement flexibles. Contactez-nous pour en discuter.',
    },
    {
      question: 'Les terrains sont-ils tous titres ?',
      reponse: 'Oui, tous nos terrains disposent de titres fonciers verifies et garantis.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/terrain-background3.jpeg" alt="Contact Cbomelly" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/95"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6" data-aos="fade-up">
            <span className="text-accent-light">Contactez</span>-nous
          </h1>
          <p className="text-xl text-gray-300" data-aos="fade-up" data-aos-delay="200">
            Notre equipe est a votre disposition pour repondre a toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-8">Envoyez-nous un <span className="text-accent-light">Message</span></h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nom complet</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-dark/30 border border-primary/30 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-dark/30 border border-primary/30 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Telephone</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-dark/30 border border-primary/30 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="+237 6XX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sujet</label>
                  <select
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-dark/30 border border-primary/30 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Selectionnez un sujet</option>
                    <option value="achat-terrain">Achat de terrain</option>
                    <option value="visite">Demande de visite</option>
                    <option value="information">Demande d'information</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-primary-dark/30 border border-primary/30 rounded-lg text-white focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Infos Contact */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-8">Nos <span className="text-accent-light">Coordonnees</span></h2>

              <div className="space-y-6 mb-12">
                <div className="bg-primary-dark/30 rounded-2xl p-6 border border-primary/30 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Adresse</h3>
                    <p className="text-gray-400">Yaounde, Cameroun</p>
                  </div>
                </div>

                <div className="bg-primary-dark/30 rounded-2xl p-6 border border-primary/30 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telephone</h3>
                    <a href="tel:+237673620096" className="text-accent-light hover:text-accent transition-colors block">+237 673 620 096</a>
                    <a href="tel:+237699520030" className="text-accent-light hover:text-accent transition-colors block">+237 699 520 030</a>
                  </div>
                </div>

                <div className="bg-primary-dark/30 rounded-2xl p-6 border border-primary/30 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-400">contact@cbomelly.cm</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-900/20 rounded-2xl p-8 border border-green-900/30 text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                <h3 className="text-2xl font-bold mb-4">Contact Rapide WhatsApp</h3>
                <p className="text-gray-300 mb-6">
                  Pour toute question urgente ou achat direct, contactez-nous sur WhatsApp.
                </p>
                <a
                  href="https://wa.me/237673620096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-lg"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  673 620 096
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-primary-dark/50">
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
    </>
  )
}