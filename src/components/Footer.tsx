import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-warm-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="text-3xl font-serif font-bold tracking-wide inline-block mb-4">
            STORY.
          </Link>
          <p className="text-warm-cream/70 leading-relaxed font-serif italic text-lg max-w-xs">
            "Because every neighbourhood deserves a coffee house."
          </p>
        </div>
        
        {/* Navigation */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-gold mb-6 font-semibold">Explore</h4>
          <ul className="flex flex-col gap-3">
            {['Home', 'Menu', 'Locations', 'Events', 'Community', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-warm-cream/80 hover:text-white transition-colors text-sm">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Locations */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-gold mb-6 font-semibold">Neighbourhoods</h4>
          <ul className="flex flex-col gap-3">
            {['Koramangala', 'Indiranagar', 'Kamanahalli', 'Horamavu', 'Kothanur'].map((loc) => (
              <li key={loc}>
                <Link to={`/locations/${loc.toLowerCase()}`} className="text-warm-cream/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <MapPin size={14} className="text-muted-gold" />
                  {loc}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect & Actions */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-gold mb-6 font-semibold">Connect</h4>
          <div className="flex gap-4 mb-8">
            <a href="https://instagram.com/storycoffeeblr" target="_blank" rel="noopener noreferrer" className="bg-deep-brown px-3 py-1 rounded-full text-xs font-semibold hover:bg-terracotta transition-colors flex items-center justify-center">
              IG
            </a>
            <a href="/contact" className="bg-deep-brown p-2.5 rounded-full hover:bg-terracotta transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
          
          <div className="flex flex-col gap-3">
            <Link to="/locations" className="text-sm font-medium border border-warm-cream/30 py-2.5 px-4 text-center hover:bg-warm-cream hover:text-espresso transition-colors">
              BOOK A TABLE
            </Link>
            <Link to="/locations" className="text-sm font-medium border border-warm-cream/30 py-2.5 px-4 text-center hover:bg-warm-cream hover:text-espresso transition-colors">
              ORDER ONLINE
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-warm-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-warm-cream/50">
        <p>&copy; {new Date().getFullYear()} Story Coffee House. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-warm-cream transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-warm-cream transition-colors">Terms of Service</Link>
          <Link to="/cookies" className="hover:text-warm-cream transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
