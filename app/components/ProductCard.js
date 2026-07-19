'use client'

export default function ProductCard({ product }) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Bonjour, je suis interesse par votre produit : *${product.title}*\n\n` +
      `Prix : ${product.price.toLocaleString()} FCFA\n` +
      `Description : ${product.description}\n` +
      `Localisation : ${product.location}\n\n` +
      `Pouvez-vous me donner plus d'informations ?`
    )
    window.open(`https://wa.me/237673620096?text=${message}`, '_blank')
  }

  return (
    <div className="bg-primary-dark/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/30 card-hover group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-accent text-primary-dark px-3 py-1 rounded-full text-sm font-bold">
          {product.price.toLocaleString()} FCFA
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{product.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">
            <svg className="w-4 h-4 inline-block mr-1 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {product.location}
          </span>
          <span className="text-sm bg-green-900/50 text-green-400 px-3 py-1 rounded-full">
            Disponible
          </span>
        </div>
        
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
          </svg>
          <span>Acheter via WhatsApp</span>
        </button>
      </div>
    </div>
  )
}