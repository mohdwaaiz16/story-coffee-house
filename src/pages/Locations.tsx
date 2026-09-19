import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { locations } from '../data/locations';

export default function Locations({ isSection = false }: { isSection?: boolean }) {
  return (
    <div className={isSection ? 'py-24' : 'bg-warm-cream min-h-screen pt-32 pb-24'}>
      {!isSection && (
        <Helmet>
          <title>Locations | Story Coffee House</title>
          <meta name="description" content="Find a Story Coffee House in your neighbourhood. Locations in Koramangala, Indiranagar, Kamanahalli, Horamavu, and Kothanur." />
        </Helmet>
      )}

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-espresso mb-6 break-words">NEIGHBOURHOODS</h1>
          <p className="text-lg text-deep-brown/80 max-w-2xl mx-auto">
            Every neighbourhood deserves a coffee house. Find your closest Story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* List of Locations */}
          <div className="flex flex-col gap-8">
            {locations.map((loc, index) => (
              <motion.div 
                key={loc.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 border rounded-sm transition-all ${
                  loc.isComingSoon 
                    ? 'border-deep-brown/10 bg-warm-white/50 opacity-70' 
                    : 'border-deep-brown/20 bg-warm-white hover:border-terracotta/50 shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-serif text-espresso">{loc.name}</h2>
                  {loc.isComingSoon && (
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-widest bg-deep-brown/10 text-deep-brown px-3 py-1 rounded-sm">
                      Coming Soon
                    </span>
                  )}
                </div>
                
                <p className="text-deep-brown/80 text-sm leading-relaxed mb-6">
                  {loc.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3 text-sm text-espresso/90">
                    <MapPin size={16} className="text-terracotta mt-0.5 shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-espresso/90">
                    <Phone size={16} className="text-terracotta mt-0.5 shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-espresso/90">
                    <Clock size={16} className="text-terracotta mt-0.5 shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                </div>

                {!loc.isComingSoon && (
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to={`/locations/${loc.slug}`} 
                      className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-espresso hover:text-terracotta transition-colors"
                    >
                      VIEW DETAILS <ArrowRight size={16} />
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Map / Image Area (Desktop Sticky) */}
          <div className="hidden lg:block relative">
            <div className="sticky top-32 h-[calc(100vh-200px)] w-full rounded-sm overflow-hidden bg-deep-brown/5 border border-deep-brown/10 flex items-center justify-center">
              {/* In a real app with Mapbox/Google Maps API, this would be an interactive map component. Using a branded visual placeholder as requested. */}
              <div className="absolute inset-0 bg-espresso/40 z-10 mix-blend-multiply" />
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
                alt="Story Coffee House Locations" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-20 text-center p-8 bg-warm-cream/90 backdrop-blur-sm border border-deep-brown/10 shadow-xl max-w-sm">
                <h3 className="font-serif text-2xl text-espresso mb-3">Bengaluru's Third Place</h3>
                <p className="text-sm text-deep-brown/80 mb-6">Explore our locations across the city to find your perfect spot for coffee, conversations, and community.</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {locations.filter(l => !l.isComingSoon).map(loc => (
                    <span key={loc.id} className="text-xs uppercase tracking-widest bg-warm-white border border-deep-brown/20 px-2 py-1 text-espresso">
                      {loc.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
