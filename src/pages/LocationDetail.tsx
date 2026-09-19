import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Clock, ArrowLeft, ExternalLink, Calendar, Coffee, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { locations } from '../data/locations';
import { menuItems } from '../data/menu';

export default function LocationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return <Navigate to="/404" replace />;
  }

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": `Story Coffee House ${location.name}`,
    "image": "https://www.storycoffeehouse.in/hero.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address,
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "telephone": location.phone,
    "servesCuisine": ["Coffee", "Cafe", "Breakfast", "Italian", "Continental"],
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:30",
        "closes": "23:30"
      }
    ],
    "url": `https://www.storycoffeehouse.in/locations/${location.slug}`
  };

  const popularItems = menuItems.filter(item => item.isPopular).slice(0, 3);

  return (
    <div className="bg-warm-cream min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Story Coffee House {location.name} | Breakfast & Cafe in {location.name}</title>
        <meta name="description" content={`Visit Story Coffee House in ${location.name}. ${location.description} Best coffee, breakfast, and casual dining in the neighbourhood.`} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <Link to="/locations" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-espresso/60 hover:text-terracotta transition-colors mb-12">
          <ArrowLeft size={16} /> BACK TO LOCATIONS
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Info */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif text-espresso mb-6">
                STORY.<br /><span className="text-3xl md:text-5xl text-terracotta">{location.name}</span>
              </h1>
              
              {location.rating && (
                <div className="flex items-center gap-2 mb-8">
                  <div className="flex text-muted-gold">
                    {"★".repeat(Math.round(parseFloat(location.rating)))}
                    <span className="text-espresso/20">{"★".repeat(5 - Math.round(parseFloat(location.rating)))}</span>
                  </div>
                  <span className="font-semibold text-espresso">{location.rating}</span>
                  <span className="text-sm text-deep-brown/60">({location.reviews} Google Reviews)</span>
                </div>
              )}

              <p className="text-lg text-deep-brown/80 leading-relaxed mb-12 max-w-2xl">
                {location.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 p-8 bg-warm-white border border-deep-brown/10 rounded-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-muted-gold font-semibold mb-2 flex items-center gap-2">
                      <MapPin size={14} /> Address
                    </h3>
                    <p className="text-sm text-espresso font-medium leading-relaxed">{location.address}</p>
                    {location.googleMapsUrl && (
                      <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-terracotta mt-2 hover:underline">
                        Get Directions <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-muted-gold font-semibold mb-2 flex items-center gap-2">
                      <Phone size={14} /> Contact
                    </h3>
                    <a href={`tel:${location.phone.replace(/\\s/g, '')}`} className="text-sm text-espresso font-medium hover:text-terracotta transition-colors">{location.phone}</a>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-muted-gold font-semibold mb-2 flex items-center gap-2">
                      <Clock size={14} /> Hours
                    </h3>
                    <p className="text-sm text-espresso font-medium leading-relaxed">{location.hours}</p>
                  </div>
                  
                  {!location.isComingSoon && (
                    <div className="pt-4 flex flex-col gap-3">
                      <button className="w-full bg-espresso text-warm-cream py-3 text-sm font-semibold tracking-widest hover:bg-terracotta transition-colors flex items-center justify-center gap-2">
                        <Calendar size={16} /> BOOK A TABLE
                      </button>
                      <button className="w-full border border-espresso text-espresso py-3 text-sm font-semibold tracking-widest hover:bg-espresso/5 transition-colors flex items-center justify-center gap-2">
                        <Coffee size={16} /> ORDER ONLINE
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
            
            {/* Menu Highlight */}
            {!location.isComingSoon && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-16"
              >
                <h2 className="text-3xl font-serif text-espresso mb-8 border-b border-deep-brown/10 pb-4">Popular at {location.name}</h2>
                <div className="space-y-6 mb-8">
                  {popularItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center group border-b border-deep-brown/5 pb-4 last:border-0">
                      <div>
                        <h4 className="font-serif text-lg text-espresso group-hover:text-terracotta transition-colors">{item.name}</h4>
                        <p className="text-xs text-deep-brown/60 uppercase tracking-wider">{item.category}</p>
                      </div>
                      <div className="font-sans font-medium text-espresso">₹{item.price}</div>
                    </div>
                  ))}
                </div>
                <Link to="/menu" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-terracotta hover:gap-4 transition-all">
                  VIEW FULL MENU <ArrowRight size={16} />
                </Link>
              </motion.div>
            )}
          </div>

          {/* Visuals / Map Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="w-full aspect-[4/5] rounded-sm overflow-hidden border border-deep-brown/10 relative">
               <div className="absolute inset-0 bg-espresso/20 z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop" 
                 alt={`Story Coffee House ${location.name} Interior`} 
                 className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
            {/* Second contextual image */}
             <div className="w-full aspect-video rounded-sm overflow-hidden border border-deep-brown/10 relative">
               <img 
                 src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=2070&auto=format&fit=crop" 
                 alt="Coffee at Story" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
