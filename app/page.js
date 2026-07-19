'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  // ============================================
  // DONNÉES
  // ============================================
  
  // Statistiques
  const stats = [
    { value: '500+', label: 'Terrains vendus' },
    { value: '15+', label: 'Années d\'expérience' },
    { value: '98%', label: 'Clients satisfaits' },
  ]

  // Avantages Cbomelly
  const features = [
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Sécurité Juridique',
      description: 'Tous nos terrains disposent de titres fonciers vérifiés et garantis. Nous vous accompagnons dans toutes les procédures légales pour une acquisition sans risque.'
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Emplacements Premium',
      description: 'Des terrains stratégiquement situés dans les zones à fort potentiel : SOA, Nkometou, Barrière et Mbankomo. Proximité des axes routiers et commodités.'
    },
    {
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      title: 'Accompagnement Personnalisé',
      description: 'Une équipe d\'experts à votre écoute pour vous guider dans le choix du terrain idéal selon vos besoins : habitation, investissement ou agriculture.'
    },
  ]

  // Services
  const services = [
    {
      title: 'Melly Immobilier',
      description: 'Terrains sécurisés et bien situés pour votre projet de construction',
      href: '/terrains',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      badge: 'Premium',
      badgeColor: 'bg-[#D4AF37] text-slate-900'
    },
    {
      title: 'Melly Market',
      description: 'Produits divers : électronique, mode, maison et plus encore',
      href: '/melly-market',
      icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
      badge: 'Nouveau',
      badgeColor: 'bg-green-500 text-white'
    },
    {
      title: 'Melly Emploi',
      description: 'Trouvez les meilleures opportunités professionnelles au Cameroun',
      href: '/melly-emploi',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      badge: 'Top',
      badgeColor: 'bg-blue-500 text-white'
    },
  ]

  // Témoignages
  const testimonials = [
    {
      name: 'Marie D.',
      role: 'Propriétaire à SOA',
      text: 'J\'ai acheté mon terrain avec Cbomelly. Le processus était transparent et sécurisé. Je recommande vivement !',
      initials: 'MD'
    },
    {
      name: 'Paul T.',
      role: 'Investisseur',
      text: 'Équipe professionnelle et à l\'écoute. Ils m\'ont accompagné de A à Z pour mon investissement à Mbankomo.',
      initials: 'PT'
    },
    {
      name: 'Sophie F.',
      role: 'Résidente',
      text: 'Service exceptionnel ! J\'ai trouvé le terrain parfait pour ma résidence à Nkometou. Merci Cbomelly !',
      initials: 'SF'
    },
  ]

  // Étapes d'achat
  const steps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'Discutons de votre projet et de vos besoins spécifiques.'
    },
    {
      number: '2',
      title: 'Visite',
      description: 'Visitez les terrains qui correspondent à vos critères.'
    },
    {
      number: '3',
      title: 'Vérification',
      description: 'Nous vérifions tous les documents juridiques pour vous.'
    },
    {
      number: '4',
      title: 'Acquisition',
      description: 'Signez et devenez propriétaire en toute sécurité.'
    },
  ]

  // Partenaires
  const partners = [
    { 
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', 
      label: 'Ministère du Domaine' 
    },
    { 
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', 
      label: 'Banques Partenaires' 
    },
    { 
      icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z', 
      label: 'Notaires Agréés' 
    },
    { 
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', 
      label: 'Promoteurs Immobiliers' 
    },
  ]

  // ============================================
  // RENDU
  // ============================================
  return (
    <>
      {/* ============================================ */}
      {/* STYLES GLOBAUX AVEC NUNITO */}
      {/* ============================================ */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
        
        *, *::before, *::after {
          font-family: 'Nunito', sans-serif !important;
        }
        
        body {
          font-family: 'Nunito', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
        }
        
        p, span, a, button, input, textarea, select, div, li {
          font-family: 'Nunito', sans-serif;
        }
        
        /* Animations */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-200%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes pulse-gold {
          0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
          70% { box-shadow: 0 0 0 20px rgba(212, 175, 55, 0); }
          100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float 3s ease-in-out 1s infinite; }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .pulse-gold { animation: pulse-gold 2s infinite; }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #D4AF37, #FFD700);
          color: #0f172a;
          font-weight: 700;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          display: inline-block;
          font-family: 'Nunito', sans-serif;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
        }
        
        .btn-primary:hover {
          background: linear-gradient(135deg, #FFD700, #D4AF37);
          transform: translateY(-2px);
          box-shadow: 0 20px 50px rgba(212, 175, 55, 0.4);
        }
        
        .btn-outline {
          border: 2px solid #D4AF37;
          color: #D4AF37;
          font-weight: 700;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          display: inline-block;
          font-family: 'Nunito', sans-serif;
          text-decoration: none;
        }
        
        .btn-outline:hover {
          background: #D4AF37;
          color: #0f172a;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
        }
        
        .section-padding {
          padding: 5rem 1rem;
        }
        
        @media (min-width: 768px) {
          .section-padding {
            padding: 6rem 2rem;
          }
        }
        
        .gold-gradient {
          background: linear-gradient(135deg, #D4AF37, #FFD700, #D4AF37);
        }
        
        .text-gradient-gold {
          background: linear-gradient(135deg, #D4AF37, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/terrain-background.jpg"
            alt="Melly Groupe - Cbomelly Immobilier Cameroun - Terrains premium à Yaoundé"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/95"></div>
        </div>

        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          {/* Logo Melly */}
          <div className="mb-8" data-aos="fade-down" data-aos-duration="1000">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-2xl animate-pulse"></div>
              <Image
                src="/images/melly-logo.png"
                alt="Melly Groupe Logo - Cbomelly Immobilier"
                width={220}
                height={220}
                className="relative rounded-full z-10 mx-auto drop-shadow-2xl hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Badge */}
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="inline-flex items-center bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] px-6 py-2.5 rounded-full font-bold text-sm mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Leader de l'immobilier au Cameroun
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            Investissez dans la
            <span className="text-[#D4AF37] block md:inline"> Terre de vos Rêves</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            Des terrains sécurisés et bien situés à Yaoundé et ses environs. Construisez votre avenir avec <strong className="text-[#D4AF37]">Melly Groupe</strong>.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <Link href="/terrains" className="btn-primary group">
              <svg className="w-5 h-5 inline-block mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Voir nos terrains
            </Link>
            <Link href="/conseils" className="btn-outline group">
              <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Guide d'achat gratuit
            </Link>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
            {stats.map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <div className="text-4xl font-extrabold text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICES SECTION */}
      {/* ============================================ */}
      <section className="section-padding bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Nos <span className="text-[#D4AF37]">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Découvrez tous les services de <strong className="text-[#D4AF37]">Melly Groupe</strong> pour répondre à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 card-hover group relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                {/* Badge */}
                {service.badge && (
                  <div className={`absolute top-4 right-4 ${service.badgeColor} px-3 py-1 rounded-full text-xs font-bold`}>
                    {service.badge}
                  </div>
                )}
                
                <div className="relative">
                  <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
                    <svg className="w-8 h-8 text-[#D4AF37] group-hover:text-slate-900 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  <div className="mt-6 flex items-center text-[#D4AF37] font-bold">
                    <span>En savoir plus</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* POURQUOI CHOISIR MELLY */}
      {/* ============================================ */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Logo Section */}
          <div className="text-center mb-20">
            {/* Logo Circulaire Animé avec melly-logo.png */}
            <div className="relative inline-block mb-8" data-aos="zoom-in" data-aos-duration="1000">
              {/* Cercle extérieur animé */}
              <div className="absolute inset-0 w-40 h-40 mx-auto animate-spin-slow">
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#D4AF37]/30"></div>
              </div>
              
              {/* Cercle de pulsation */}
              <div className="absolute inset-0 w-40 h-40 mx-auto">
                <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 animate-ping-slow"></div>
              </div>
              
              {/* Logo principal dans un cercle */}
              <div className="relative w-40 h-40 mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border-4 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 group hover:scale-110 transition-transform duration-500 overflow-hidden">
                <Image
                  src="/images/melly-logo.png"
                  alt="Melly Groupe Logo - melly Immobilier"
                  width={100}
                  height={100}
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Points orbitaux décoratifs */}
                <div className="absolute w-5 h-5 bg-[#D4AF37] rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float shadow-lg shadow-[#D4AF37]/50"></div>
                <div className="absolute w-4 h-4 bg-[#FFD700] rounded-full bottom-3 right-0 transform translate-x-1/2 animate-float-delayed shadow-lg shadow-[#FFD700]/50"></div>
                <div className="absolute w-4 h-4 bg-[#D4AF37] rounded-full bottom-3 left-0 transform -translate-x-1/2 animate-float shadow-lg shadow-[#D4AF37]/50" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            {/* Nom de la structure */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-5xl md:text-6xl font-extrabold text-[#D4AF37] tracking-wide">
                Melly
              </h3>
              <p className="text-xl text-gray-300 font-light tracking-widest uppercase mt-2">
                Immobilier Premium
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mt-4"></div>
            </div>
            
            {/* Sous-titre */}
            <p className="text-xl text-gray-400 mt-8 max-w-3xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="400">
              Votre partenaire de confiance pour des investissements fonciers sécurisés au Cameroun
            </p>
          </div>
          
          {/* Titre de la section */}
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="600">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Pourquoi Choisir <span className="text-[#D4AF37]">Melly</span> ?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Notre engagement envers l'excellence et la satisfaction client fait de nous le partenaire idéal pour votre investissement immobilier.
            </p>
          </div>
          
          {/* Cartes des avantages */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 card-hover group relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-[#D4AF37]/20">
                    <svg className="w-10 h-10 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-[#D4AF37] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROCESSUS D'ACHAT */}
      {/* ============================================ */}
      <section className="section-padding bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Comment <span className="text-[#D4AF37]">Acheter</span> ?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Un processus simple et transparent pour devenir propriétaire en toute sérénité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center relative" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900 text-3xl font-bold shadow-lg shadow-[#D4AF37]/20 hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                
                {/* Connecteur entre les étapes */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg className="w-8 h-8 text-[#D4AF37]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TÉMOIGNAGES */}
      {/* ============================================ */}
      <section className="section-padding bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Ce Que Disent <span className="text-[#D4AF37]">Nos Clients</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 card-hover"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Étoiles */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Texte */}
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                {/* Auteur */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center text-slate-900 font-bold shadow-lg shadow-[#D4AF37]/20">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/terrain-background2.jpg"
            alt="Contactez Melly Groupe - Cbomelly Immobilier"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>

        {/* Particules */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4" data-aos="zoom-in" data-aos-duration="1000">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Prêt à <span className="text-[#D4AF37]">Investir</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-medium">
            Contactez <strong className="text-[#D4AF37]">Melly Groupe</strong> dès aujourd'hui pour une consultation gratuite et découvrez les meilleures opportunités foncières au Cameroun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary group pulse-gold">
              <svg className="w-5 h-5 inline-block mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Nous Contacter
            </Link>
            <a href="tel:+237699999999" className="btn-outline group">
              <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +237 699 999 999
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PARTENAIRES */}
      {/* ============================================ */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-8">Ils Nous Font Confiance</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
            {partners.map((partner, index) => (
              <div key={partner.label} className="text-center group cursor-default" data-aos="fade-up" data-aos-delay={index * 100}>
                <svg className="w-12 h-12 text-[#D4AF37] mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={partner.icon} />
                </svg>
                <p className="text-sm text-gray-400 font-medium">{partner.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}