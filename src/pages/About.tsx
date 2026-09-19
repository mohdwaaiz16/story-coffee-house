import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function About({ isSection = false }: { isSection?: boolean }) {
  return (
    <div className={isSection ? 'py-24' : 'bg-warm-cream min-h-screen pt-32 pb-24'}>
      {!isSection && (
        <Helmet>
          <title>About | Story Coffee House</title>
          <meta name="description" content="Established 2022. Story Coffee House was created around the idea that every neighbourhood deserves a place where people can slow down and spend time together." />
        </Helmet>
      )}

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-espresso mb-8">THE STORY</h1>
        <p className="text-sm uppercase tracking-widest text-muted-gold font-semibold mb-16">Established 2022</p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="prose prose-lg mx-auto text-deep-brown/80 font-serif leading-relaxed"
        >
          <p className="text-2xl text-espresso mb-10 leading-normal">
            Story Coffee House was created around a simple idea: every neighbourhood deserves a place where people can slow down, meet, eat, drink coffee and spend time together.
          </p>
          <p className="mb-8">
            We are not a traditional café. We are the "third place"—that essential space between home and everywhere else. When we opened our doors in 2022, we didn't just want to serve great coffee; we wanted to create environments where conversations flow as easily as the espresso.
          </p>
          <p className="mb-8">
            From early morning breakfasts to late evening dinners, our spaces are designed to be lived in. Whether you're catching up with an old friend in Indiranagar, finding a quiet corner to read in Koramangala, or meeting the community in Kamanahalli, you belong here.
          </p>
          <p className="text-xl text-espresso mt-12 italic">
            "Come for coffee. Stay for the story."
          </p>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" alt="Coffee preparation" className="w-full aspect-[3/4] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" alt="Cafe Interior" className="w-full aspect-[3/4] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop" alt="Coffee and book" className="w-full aspect-[3/4] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </div>
    </div>
  );
}
