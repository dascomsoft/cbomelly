import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/melly-logo.png"
                alt="Cbomelly Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-accent-light">Melly</h3>
                <p className="text-xs text-gray-400">Groupe</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Votre partenaire de confiance pour l'immobilier, le market et l'emploi au Cameroun.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary-dark transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary-dark transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary-dark transition-all duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Liens Rapides</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-accent-light transition-all duration-300">Accueil</Link></li>
              <li><Link href="/terrains" className="text-gray-400 hover:text-accent-light transition-all duration-300">Immobilier</Link></li>
              <li><Link href="/melly-market" className="text-gray-400 hover:text-accent-light transition-all duration-300">Melly Market</Link></li>
              <li><Link href="/melly-emploi" className="text-gray-400 hover:text-accent-light transition-all duration-300">Melly Emploi</Link></li>
              <li><Link href="/conseils" className="text-gray-400 hover:text-accent-light transition-all duration-300">Conseils</Link></li>
              <li><Link href="/a-propos" className="text-gray-400 hover:text-accent-light transition-all duration-300">A Propos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent-light transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-light mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">Yaoundé, Cameroun</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent-light mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+237673620096" className="text-gray-400 hover:text-accent-light transition-colors">+237 673 620 096</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent-light mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+237699520030" className="text-gray-400 hover:text-accent-light transition-colors">+237 699 520 030</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent-light mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">contact@cbomelly.cm</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Rapide</h4>
            <p className="text-gray-400 mb-4">
              Contactez-nous directement via WhatsApp pour toute question ou achat.
            </p>
            <a
              href="https://wa.me/237673620096"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              WhatsApp : 673 620 096
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/30 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Cbomelly Groupe. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}