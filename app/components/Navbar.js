'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Effet pour détecter le scroll et changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile quand on change de page
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/98 backdrop-blur-lg shadow-2xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-full">
              <Image
                src="/images/melly-logo.png"
                alt="Melly Groupe - Cbomelly Logo"
                width={48}
                height={48}
                className="object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#D4AF37]">Melly</span>
              <p className="text-xs text-gray-300 font-medium">Melly Groupe</p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold transition duration-300 text-sm ${
                  pathname === link.href
                    ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                    : 'text-white hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 hover:scale-105"
            >
              Contactez-nous
            </Link>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-[#D4AF37] transition-colors duration-300"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-slate-900/98 backdrop-blur-lg border-t border-gray-800 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                pathname === link.href
                  ? 'bg-[#D4AF37]/20 text-[#D4AF37] border-l-4 border-[#D4AF37]'
                  : 'text-white hover:bg-slate-800 hover:text-[#D4AF37]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block text-center bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-slate-900 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </nav>
  )
}