'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile au changement de page
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/terrains', label: 'Nos Terrains' },
    { href: '/melly-market', label: 'Melly Market' },
    { href: '/melly-emploi', label: 'Melly Emploi' },
    { href: '/a-propos', label: 'À Propos' },
    { href: '/conseils', label: 'Conseils' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2.5 md:space-x-3 group flex-shrink-0">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/images/melly-logo.png"
                  alt="Melly Groupe - Cbomelly"
                  width={48}
                  height={48}
                  className="object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl md:text-2xl font-extrabold text-[#D4AF37] leading-tight">Melly</span>
                <p className="text-[10px] md:text-xs text-gray-400 font-medium leading-tight">Melly Groupe</p>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-semibold transition duration-300 text-sm xl:text-base py-1 ${
                    pathname === link.href
                      ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                      : 'text-gray-200 hover:text-[#D4AF37]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 px-5 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Contactez-nous
              </Link>
            </div>

            {/* Bouton Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors duration-300 z-50"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Overlay mobile */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-40 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Mobile - Panneau latéral */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-slate-900 shadow-2xl shadow-black/50 transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* En-tête du menu mobile */}
          <div className="flex items-center justify-between p-5 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <Image src="/images/melly-logo.png" alt="Melly" width={36} height={36} className="object-contain" />
              <span className="text-lg font-extrabold text-[#D4AF37]">Melly</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="Fermer le menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Liens du menu mobile */}
          <div className="p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl font-semibold text-base transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-[#D4AF37]/15 text-[#D4AF37] border-l-3 border-[#D4AF37]'
                    : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {/* Icône selon la page */}
                <span className="mr-3 text-lg">
                  {link.label === 'Accueil' && ''}
                  {link.label === 'Nos Terrains' && ''}
                  {link.label === 'Melly Market' && ''}
                  {link.label === 'Melly Emploi' && ''}
                  {link.label === 'À Propos' && ''}
                  {link.label === 'Conseils' && ''}
                  {link.label === 'Contact' && ''}
                </span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Bouton Contact en bas du menu */}
          <div className="p-4 border-t border-gray-800 mt-4">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 py-3.5 rounded-xl font-bold text-base hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contactez-nous
            </Link>

            {/* Info contact rapide */}
            <div className="mt-4 text-center text-xs text-gray-500">
              <p>Melly Groupe © {new Date().getFullYear()}</p>
              <a href="tel:+237673620096" className="text-[#D4AF37] hover:underline">+237 673 620 096</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Espaceur pour compenser la navbar fixe */}
      <div className="h-16 md:h-20"></div>
    </>
  )
}