import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Community({ isSection = false }: { isSection?: boolean }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    location: 'Koramangala',
    story: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Mock submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', instagram: '', location: 'Koramangala', story: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className={isSection ? 'py-24' : 'bg-warm-cream min-h-screen pt-32 pb-24'}>
      {!isSection && (
        <Helmet>
          <title>Community | Story Coffee House</title>
          <meta name="description" content="Be part of the story. Share your moments, join our community, and connect with your neighbourhood." />
        </Helmet>
      )}

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-espresso mb-6 uppercase">Be part of the story</h1>
          <p className="text-lg text-deep-brown/80 max-w-2xl mx-auto">
            Story Coffee House is nothing without the people who fill it. We want to hear your stories, see your moments, and build this community together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-espresso/5 rounded-sm overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2076&auto=format&fit=crop" 
              alt="Community at Story" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-serif text-espresso mb-6">Share your story</h2>
            <p className="text-sm text-deep-brown/80 mb-8 leading-relaxed">
              Did you have a memorable conversation here? Did you write a chapter of your book at our window seat? Did you meet someone special? Share your Story Coffee House moments with us, and we might feature them in our community journal.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2" htmlFor="name">Name</label>
                  <input required id="name" type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-warm-white border border-deep-brown/20 p-3 text-sm focus:outline-none focus:border-terracotta transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2" htmlFor="instagram">Instagram (Optional)</label>
                  <input id="instagram" type="text" placeholder="@" value={formData.instagram} onChange={e => setFormData({...formData, instagram: e.target.value})} className="w-full bg-warm-white border border-deep-brown/20 p-3 text-sm focus:outline-none focus:border-terracotta transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2" htmlFor="email">Email</label>
                <input required id="email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-warm-white border border-deep-brown/20 p-3 text-sm focus:outline-none focus:border-terracotta transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2" htmlFor="location">Your Local Story</label>
                <select id="location" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full bg-warm-white border border-deep-brown/20 p-3 text-sm focus:outline-none focus:border-terracotta transition-colors">
                  <option value="Koramangala">Koramangala</option>
                  <option value="Indiranagar">Indiranagar</option>
                  <option value="Kamanahalli">Kamanahalli</option>
                  <option value="Horamavu">Horamavu</option>
                  <option value="Kothanur">Kothanur</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2" htmlFor="story">Your Story</label>
                <textarea required id="story" rows={4} value={formData.story} onChange={e => setFormData({...formData, story: e.target.value})} className="w-full bg-warm-white border border-deep-brown/20 p-3 text-sm focus:outline-none focus:border-terracotta transition-colors resize-none"></textarea>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <input required type="checkbox" id="consent" className="w-4 h-4 accent-terracotta" />
                <label htmlFor="consent" className="text-xs text-deep-brown/60">I consent to my story and name being shared on Story's digital platforms.</label>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className="w-full bg-espresso text-warm-cream py-4 text-sm font-semibold tracking-widest hover:bg-terracotta transition-colors disabled:opacity-50"
              >
                {status === 'submitting' ? 'SENDING...' : status === 'success' ? 'STORY RECEIVED' : 'SUBMIT STORY'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
