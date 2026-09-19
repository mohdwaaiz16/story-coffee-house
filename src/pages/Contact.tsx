import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, ArrowRight, MapPin } from 'lucide-react';
import { locations } from '../data/locations';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="bg-warm-cream min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Contact | Story Coffee House</title>
        <meta name="description" content="Get in touch with Story Coffee House. Find location contacts, book a table, or send us a general enquiry." />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-espresso mb-6 uppercase">Get in touch</h1>
          <p className="text-lg text-deep-brown/80 max-w-2xl mx-auto">
            Whether you want to book a table, host an event, or just say hello, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-serif text-espresso mb-6">General Enquiries</h2>
              <div className="space-y-4">
                <a href="mailto:hello@storycoffeehouse.in" className="flex items-center gap-3 text-espresso hover:text-terracotta transition-colors">
                  <Mail size={20} className="text-muted-gold" />
                  <span className="font-medium">hello@storycoffeehouse.in</span>
                </a>
                <a href="https://instagram.com/storycoffeeblr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-espresso hover:text-terracotta transition-colors">
                  <span className="font-medium">@storycoffeeblr</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-espresso mb-6">Our Neighbourhoods</h2>
              <div className="space-y-6">
                {locations.map(loc => (
                  <div key={loc.id} className="border-b border-deep-brown/10 pb-4 last:border-0">
                    <h3 className="font-semibold text-espresso flex items-center gap-2 mb-1">
                      <MapPin size={14} className="text-terracotta" />
                      {loc.name}
                    </h3>
                    <p className="text-sm text-deep-brown/80 mb-2">{loc.phone}</p>
                    {!loc.isComingSoon && (
                      <Link to={`/locations/${loc.slug}`} className="text-xs font-semibold text-terracotta hover:underline">
                        View Location Details
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-warm-white p-8 md:p-10 border border-deep-brown/10 rounded-sm">
            <h2 className="text-3xl font-serif text-espresso mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2" htmlFor="name">Name</label>
                  <input required id="name" type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-warm-cream border border-deep-brown/20 p-3 text-sm focus:outline-none focus:border-terracotta transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2" htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-warm-cream border border-deep-brown/20 p-3 text-sm focus:outline-none focus:border-terracotta transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2" htmlFor="email">Email</label>
                <input required id="email" type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-warm-cream border border-deep-brown/20 p-3 text-sm focus:outline-none focus:border-terracotta transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2" htmlFor="message">Message</label>
                <textarea required id="message" rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-warm-cream border border-deep-brown/20 p-3 text-sm focus:outline-none focus:border-terracotta transition-colors resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className="w-full bg-espresso text-warm-cream py-4 text-sm font-semibold tracking-widest hover:bg-terracotta transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? 'SENDING...' : status === 'success' ? 'MESSAGE SENT' : 'SEND MESSAGE'} <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
