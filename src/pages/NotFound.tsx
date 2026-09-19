import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="bg-warm-cream min-h-screen pt-32 pb-24 flex items-center justify-center">
      <Helmet>
        <title>Page Not Found | Story Coffee House</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-serif text-espresso/20 mb-6 font-bold">404</h1>
          <h2 className="text-3xl md:text-4xl font-serif text-espresso mb-6">Looks like this story took a wrong turn.</h2>
          <p className="text-lg text-deep-brown/80 mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <Link to="/" className="inline-flex items-center justify-center gap-2 bg-espresso text-warm-cream px-8 py-4 text-sm font-semibold tracking-widest hover:bg-terracotta transition-colors">
            <ArrowLeft size={18} /> BACK TO STORY
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
