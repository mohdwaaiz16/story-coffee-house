import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { events } from '../data/events';
import { locations } from '../data/locations';

export default function Events({ isSection = false }: { isSection?: boolean }) {
  const upcomingEvents = events.filter(e => !e.isPast);
  const pastEvents = events.filter(e => e.isPast);

  const getLocationName = (id: string) => locations.find(l => l.id === id)?.name || id;

  return (
    <div className={isSection ? 'py-24' : 'bg-warm-cream min-h-screen pt-32 pb-24'}>
      {!isSection && (
        <Helmet>
          <title>Events | Story Coffee House</title>
          <meta name="description" content="There's always something happening at Story. Join our book clubs, coffee workshops, and creative meetups in Bengaluru." />
        </Helmet>
      )}

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-espresso mb-6 uppercase">Story Events</h1>
          <p className="text-lg text-deep-brown/80 max-w-2xl mx-auto">
            There's always something happening at Story.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h2 className="text-sm uppercase tracking-widest text-terracotta mb-8 font-semibold border-b border-deep-brown/10 pb-4">Upcoming</h2>
          
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-20 bg-warm-white border border-deep-brown/10 rounded-sm">
              <h3 className="text-2xl font-serif text-espresso mb-2">New stories are brewing.</h3>
              <p className="text-deep-brown/60">Check back soon for upcoming events.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, i) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-warm-white border border-deep-brown/10 rounded-sm overflow-hidden flex flex-col group hover:border-terracotta/30 transition-colors shadow-sm"
                >
                  <div className="h-48 bg-espresso/5 relative overflow-hidden">
                    {/* Placeholder for event image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent z-10" />
                    <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2000&auto=format&fit=crop" alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="bg-terracotta text-warm-cream px-3 py-1 text-xs font-semibold tracking-widest">{event.date}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-serif text-espresso mb-3">{event.title}</h3>
                    <p className="text-sm text-deep-brown/80 mb-6 flex-grow leading-relaxed">{event.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-xs text-espresso/70">
                        <MapPin size={14} className="text-muted-gold" />
                        <span>Story Coffee House, {getLocationName(event.locationId)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-espresso/70">
                        <Calendar size={14} className="text-muted-gold" />
                        <span>{event.time}</span>
                      </div>
                      {event.capacity && (
                        <div className="flex items-center gap-2 text-xs text-espresso/70">
                          <Users size={14} className="text-muted-gold" />
                          <span>Limited to {event.capacity} people</span>
                        </div>
                      )}
                    </div>
                    
                    <button className="w-full bg-espresso text-warm-cream py-3 text-sm font-semibold tracking-widest hover:bg-terracotta transition-colors flex items-center justify-center gap-2">
                      RSVP NOW <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div>
            <h2 className="text-sm uppercase tracking-widest text-muted-gold mb-8 font-semibold border-b border-deep-brown/10 pb-4">Past Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-warm-cream border border-deep-brown/10 p-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="text-xs font-semibold text-deep-brown/60 mb-2 block">{event.date}</span>
                  <h3 className="text-xl font-serif text-espresso mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-espresso/60">
                    <MapPin size={12} />
                    <span>{getLocationName(event.locationId)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
