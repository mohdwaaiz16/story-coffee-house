import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', path: '#home' },
  { name: 'Menu', path: '#menu' },
  { name: 'Locations', path: '#locations' },
  { name: 'Events', path: '#events' },
  { name: 'Community', path: '#community' },
  { name: 'About', path: '#about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or hash change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // If we are not on the homepage and clicking a hash link, let it navigate normally to /#hash
    // If we are on homepage, smooth scroll to it
    if (path.startsWith('#') && location.pathname === '/') {
      e.preventDefault();
      const id = path.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  const isDarkTheme = !scrolled && location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-warm-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`text-2xl font-serif font-bold tracking-wide transition-colors ${isDarkTheme ? 'text-warm-cream' : 'text-espresso'}`}>
            STORY COFFEE HOUSE
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={`/${link.path}`}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`text-sm font-medium tracking-wide transition-colors ${isDarkTheme ? 'text-warm-cream/90 hover:text-white' : 'text-espresso/80 hover:text-terracotta'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4 ml-4">
              <a
                href="/#locations"
                onClick={(e) => handleLinkClick(e, '#locations')}
                className={`text-sm font-medium tracking-wide border-b pb-0.5 transition-all ${isDarkTheme ? 'text-warm-cream border-warm-cream hover:text-white hover:border-white' : 'border-espresso text-espresso hover:text-terracotta hover:border-terracotta'}`}
              >
                ORDER ONLINE
              </a>
              <a
                href="/#locations"
                onClick={(e) => handleLinkClick(e, '#locations')}
                className={`px-5 py-2.5 rounded-sm text-sm font-medium tracking-wide transition-colors ${isDarkTheme ? 'bg-warm-cream text-espresso hover:bg-white' : 'bg-espresso text-warm-cream hover:bg-terracotta'}`}
              >
                BOOK A TABLE
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors ${isDarkTheme ? 'text-warm-cream' : 'text-espresso'}`}
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-warm-cream flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-6 border-b border-deep-brown/10">
              <span className="text-2xl font-serif font-bold text-espresso tracking-wide">
                STORY COFFEE HOUSE
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-espresso"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={`/${link.path}`}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className="text-3xl font-serif text-espresso"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="p-6 border-t border-deep-brown/10 bg-warm-white flex flex-col gap-4 sticky bottom-0">
              <a
                href="/#locations"
                onClick={(e) => handleLinkClick(e, '#locations')}
                className="w-full py-4 text-center border border-espresso text-espresso font-medium tracking-wide uppercase"
              >
                Order Online
              </a>
              <a
                href="/#locations"
                onClick={(e) => handleLinkClick(e, '#locations')}
                className="w-full py-4 text-center bg-espresso text-warm-cream font-medium tracking-wide uppercase"
              >
                Book A Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
