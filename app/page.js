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
  const stats = [
    { value: '500+', label: 'Terrains vendus' },
    { value: '15+', label: 'Années d\'expérience' },
    { value: '98%', label: 'Clients satisfaits' },
  ]

  const features = [
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Sécurité Juridique',
      description: 'Titres fonciers vérifiés et garantis. Accompagnement dans toutes les procédures légales.'
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Emplacements Premium',
      description: 'Zones à fort potentiel : SOA, Nkometou, Barrière, Mbankomo. Proximité axes routiers.'
    },
    {
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      title: 'Accompagnement',
      description: 'Experts à votre écoute pour le choix du terrain idéal selon vos besoins.'
    },
  ]

  const services = [
    {
      title: 'Melly Immobilier',
      description: 'Terrains sécurisés pour votre projet de construction',
      href: '/terrains',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      badge: 'Premium',
      badgeColor: 'bg-[#D4AF37] text-slate-900'
    },
    {
      title: 'Melly Market',
      description: 'Électronique, mode, maison et plus encore',
      href: '/melly-market',
      icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
      badge: 'Nouveau',
      badgeColor: 'bg-green-500 text-white'
    },
    {
      title: 'Melly Emploi',
      description: 'Opportunités professionnelles au Cameroun',
      href: '/melly-emploi',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      badge: 'Top',
      badgeColor: 'bg-blue-500 text-white'
    },
  ]

  const testimonials = [
    {
      name: 'Marie D.',
      role: 'Propriétaire à SOA',
      text: 'J\'ai acheté mon terrain avec Melly. Processus transparent et sécurisé. Je recommande !',
      initials: 'MD'
    },
    {
      name: 'Paul T.',
      role: 'Investisseur',
      text: 'Équipe professionnelle. Ils m\'ont accompagné de A à Z pour mon investissement.',
      initials: 'PT'
    },
    {
      name: 'Sophie F.',
      role: 'Résidente',
      text: 'Service exceptionnel ! J\'ai trouvé le terrain parfait pour ma résidence.',
      initials: 'SF'
    },
  ]

  const steps = [
    { number: '1', title: 'Consultation', description: 'Discutons de votre projet et besoins.' },
    { number: '2', title: 'Visite', description: 'Visitez les terrains correspondants.' },
    { number: '3', title: 'Vérification', description: 'Vérification des documents juridiques.' },
    { number: '4', title: 'Acquisition', description: 'Signez, devenez propriétaire.' },
  ]

  const partners = [
    { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Ministère du Domaine' },
    { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Banques Partenaires' },
    { icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z', label: 'Notaires Agréés' },
    { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', label: 'Promoteurs' },
  ]

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap');
        *,*::before,*::after{font-family:'Nunito',sans-serif!important}
        body{font-family:'Nunito',sans-serif;-webkit-font-smoothing:antialiased}
        @keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes float{0%,100%{transform:translate(-50%,-50%) translateY(0)}50%{transform:translate(-50%,-50%) translateY(-8px)}}
        @keyframes ping-slow{0%{transform:scale(1);opacity:.5}100%{transform:scale(2);opacity:0}}
        @keyframes shimmer{0%{transform:translateX(-200%)}100%{transform:translateX(200%)}}
        @keyframes pulse-gold{0%{box-shadow:0 0 0 0 rgba(212,175,55,.7)}70%{box-shadow:0 0 0 20px rgba(212,175,55,0)}100%{box-shadow:0 0 0 0 rgba(212,175,55,0)}}
        .animate-spin-slow{animation:spin-slow 20s linear infinite}
        .animate-float{animation:float 3s ease-in-out infinite}
        .animate-float-delayed{animation:float 3s ease-in-out 1s infinite}
        .animate-ping-slow{animation:ping-slow 2s cubic-bezier(0,0,.2,1) infinite}
        .pulse-gold{animation:pulse-gold 2s infinite}
        .card-hover{transition:all .4s cubic-bezier(.165,.84,.44,1)}
        .card-hover:hover{transform:translateY(-8px);box-shadow:0 20px 40px rgba(0,0,0,.3)}
        .btn-primary{background:linear-gradient(135deg,#D4AF37,#FFD700);color:#0f172a;font-weight:700;padding:.75rem 1.5rem;border-radius:.75rem;transition:all .3s;display:inline-block;text-decoration:none;box-shadow:0 10px 30px rgba(212,175,55,.3);font-size:.875rem}
        .btn-primary:hover{background:linear-gradient(135deg,#FFD700,#D4AF37);transform:translateY(-2px);box-shadow:0 20px 50px rgba(212,175,55,.4)}
        .btn-outline{border:2px solid #D4AF37;color:#D4AF37;font-weight:700;padding:.75rem 1.5rem;border-radius:.75rem;transition:all .3s;display:inline-block;text-decoration:none;font-size:.875rem}
        .btn-outline:hover{background:#D4AF37;color:#0f172a}
        @media(min-width:640px){.btn-primary,.btn-outline{padding:1rem 2rem;font-size:1rem}}
        .section-padding{padding:3rem 1rem}
        @media(min-width:768px){.section-padding{padding:5rem 2rem}}
        @media(min-width:1024px){.section-padding{padding:6rem 2rem}}
      `}</style>

      {/* ============================================ */}
      {/* HERO - RESPONSIVE */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/terrain-background.jpg" alt="Melly Groupe - Terrains Cameroun" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/95"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16 md:pt-20 w-full">
          {/* Logo */}
          <div className="mb-4 md:mb-8" data-aos="fade-down" data-aos-duration="1000">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-2xl animate-pulse"></div>
              <Image src="/images/melly-logo.png" alt="Melly Groupe" width={200} height={200} className="relative rounded-full z-10 mx-auto drop-shadow-2xl hover:scale-110 transition-transform duration-500 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px]" priority />
            </div>
          </div>

          {/* Badge */}
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="inline-flex items-center bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1.5 md:px-6 md:py-2.5 rounded-full font-bold text-[10px] md:text-sm mb-3 md:mb-6">
              Leader de l'immobilier au Cameroun
            </div>
          </div>

          {/* Titre */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-3 md:mb-6 leading-tight" data-aos="fade-up" data-aos-delay="200">
            Investissez dans la<br/>
            <span className="text-[#D4AF37]">Terre de vos Rêves</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-10 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            Terrains sécurisés à Yaoundé et environs. Construisez votre avenir avec <strong className="text-[#D4AF37]">Melly Groupe</strong>.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto" data-aos="fade-up" data-aos-delay="600">
            <Link href="/terrains" className="btn-primary text-center">Voir nos terrains</Link>
            <Link href="/conseils" className="btn-outline text-center">Guide d'achat gratuit</Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="800">
            {stats.map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICES - RESPONSIVE */}
      {/* ============================================ */}
      <section className="section-padding bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">Nos <span className="text-[#D4AF37]">Services</span></h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-4 md:mb-6"></div>
            <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto">Découvrez tous les services de <strong className="text-[#D4AF37]">Melly Groupe</strong></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <Link key={service.title} href={service.href} className="bg-slate-900/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-700/50 card-hover group relative overflow-hidden" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                {service.badge && <div className={`absolute top-3 right-3 md:top-4 md:right-4 ${service.badgeColor} px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold`}>{service.badge}</div>}
                <div className="relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-800 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#D4AF37] transition-colors">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37] group-hover:text-slate-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} /></svg>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-white group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                  <p className="text-xs md:text-base text-gray-400 leading-relaxed">{service.description}</p>
                  <div className="mt-4 md:mt-6 flex items-center text-[#D4AF37] font-bold text-xs md:text-base">
                    <span>En savoir plus</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* POURQUOI MELLY - RESPONSIVE */}
      {/* ============================================ */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Logo animé */}
          <div className="text-center mb-12 md:mb-20">
            <div className="relative inline-block mb-4 md:mb-8" data-aos="zoom-in" data-aos-duration="1000">
              <div className="absolute inset-0 w-24 h-24 md:w-40 md:h-40 mx-auto animate-spin-slow"><div className="absolute inset-0 rounded-full border-3 md:border-4 border-dashed border-[#D4AF37]/30"></div></div>
              <div className="absolute inset-0 w-24 h-24 md:w-40 md:h-40 mx-auto"><div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 animate-ping-slow"></div></div>
              <div className="relative w-24 h-24 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border-3 md:border-4 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 group hover:scale-110 transition-transform duration-500 overflow-hidden">
                <Image src="/images/melly-logo.png" alt="Melly Groupe" width={60} height={60} className="object-contain group-hover:scale-110 transition-transform duration-500 md:w-[100px] md:h-[100px]" />
                <div className="absolute w-3 h-3 md:w-5 md:h-5 bg-[#D4AF37] rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float shadow-lg shadow-[#D4AF37]/50"></div>
                <div className="absolute w-2.5 h-2.5 md:w-4 md:h-4 bg-[#FFD700] rounded-full bottom-2 md:bottom-3 right-0 transform translate-x-1/2 animate-float-delayed shadow-lg"></div>
                <div className="absolute w-2.5 h-2.5 md:w-4 md:h-4 bg-[#D4AF37] rounded-full bottom-2 md:bottom-3 left-0 transform -translate-x-1/2 animate-float shadow-lg" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#D4AF37] tracking-wide">Melly</h3>
              <p className="text-sm md:text-xl text-gray-300 font-light tracking-widest uppercase mt-1 md:mt-2">Immobilier Premium</p>
              <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mt-3 md:mt-4"></div>
            </div>
            
            <p className="text-sm md:text-xl text-gray-400 mt-4 md:mt-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">Votre partenaire de confiance pour des investissements fonciers sécurisés au Cameroun</p>
          </div>
          
          <div className="text-center mb-8 md:mb-16" data-aos="fade-up" data-aos-delay="600">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">Pourquoi <span className="text-[#D4AF37]">Melly</span> ?</h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-4 md:mb-6"></div>
            <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto">Notre engagement envers l'excellence fait de nous le partenaire idéal pour votre investissement.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-700/50 card-hover group relative overflow-hidden" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="relative">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:rotate-12 transition-transform shadow-lg shadow-[#D4AF37]/20">
                    <svg className="w-7 h-7 md:w-10 md:h-10 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} /></svg>
                  </div>
                  <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 text-center group-hover:text-[#D4AF37] transition-colors">{feature.title}</h3>
                  <p className="text-xs md:text-base text-gray-400 leading-relaxed text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROCESSUS - RESPONSIVE */}
      {/* ============================================ */}
      <section className="section-padding bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">Comment <span className="text-[#D4AF37]">Acheter</span> ?</h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-4 md:mb-6"></div>
            <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto">Un processus simple et transparent pour devenir propriétaire.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center relative" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6 text-slate-900 text-xl md:text-3xl font-bold shadow-lg shadow-[#D4AF37]/20 hover:scale-110 transition-transform">{step.number}</div>
                <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-3">{step.title}</h3>
                <p className="text-[10px] md:text-sm text-gray-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TÉMOIGNAGES - RESPONSIVE */}
      {/* ============================================ */}
      <section className="section-padding bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">Ce Que Disent <span className="text-[#D4AF37]">Nos Clients</span></h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-4 md:mb-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-slate-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-700/50 card-hover" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="flex mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-xs md:text-base text-gray-300 mb-4 md:mb-6 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center text-slate-900 font-bold text-sm md:text-base shadow-lg">{testimonial.initials}</div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="font-bold text-white text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-[10px] md:text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA - RESPONSIVE */}
      {/* ============================================ */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/terrain-background2.jpg" alt="Contactez Melly Groupe" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4" data-aos="zoom-in" data-aos-duration="1000">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 md:mb-6">Prêt à <span className="text-[#D4AF37]">Investir</span> ?</h2>
          <p className="text-sm md:text-xl text-gray-300 mb-6 md:mb-10">Contactez <strong className="text-[#D4AF37]">Melly Groupe</strong> pour une consultation gratuite.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto">
            <Link href="/contact" className="btn-primary pulse-gold text-center">Nous Contacter</Link>
            <a href="tel:+237673620096" className="btn-outline text-center">+237 673 620 096</a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PARTENAIRES - RESPONSIVE */}
      {/* ============================================ */}
      <section className="py-8 md:py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
            <h3 className="text-lg md:text-2xl font-bold text-[#D4AF37] mb-6 md:mb-8">Ils Nous Font Confiance</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center opacity-50">
            {partners.map((partner, index) => (
              <div key={partner.label} className="text-center group cursor-default" data-aos="fade-up" data-aos-delay={index * 100}>
                <svg className="w-8 h-8 md:w-12 md:h-12 text-[#D4AF37] mb-1 md:mb-2 mx-auto group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={partner.icon} /></svg>
                <p className="text-[10px] md:text-sm text-gray-400 font-medium">{partner.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}