import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee, Utensils, Users, BookOpen } from 'lucide-react';

import MenuSection from './Menu';
import LocationsSection from './Locations';
import EventsSection from './Events';
import CommunitySection from './Community';
import AboutSection from './About';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="bg-warm-cream overflow-hidden">
      <Helmet>
        <title>Story Coffee House | Because every neighbourhood deserves a coffee house</title>
        <meta name="description" content="A neighbourhood coffee house for coffee, food, conversations and everything in between. The third place in Bengaluru." />
      </Helmet>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-espresso/80 z-10" />
        <motion.img 
          style={{ y: y1 }}
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
          alt="Cafe Interior" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-warm-cream font-serif font-bold mb-6 tracking-tight leading-tight break-words"
          >
            EVERY NEIGHBOURHOOD<br />DESERVES A STORY.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-warm-cream/90 font-medium mb-10 max-w-2xl mx-auto tracking-wide"
          >
            A neighbourhood coffee house for coffee, food, conversations and everything in between.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#menu" className="w-full sm:w-auto bg-warm-cream text-espresso px-8 py-4 text-sm font-semibold tracking-wider hover:bg-white transition-colors duration-300">
              EXPLORE THE MENU
            </a>
            <a href="#locations" className="w-full sm:w-auto border border-warm-cream/50 text-warm-cream px-8 py-4 text-sm font-semibold tracking-wider hover:bg-warm-cream/10 transition-colors duration-300">
              FIND YOUR STORY
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Third Place Section */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-terracotta mb-6 font-semibold">Our Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-espresso mb-8 leading-tight">
            THE PLACE BETWEEN HOME <br className="hidden md:block"/>AND EVERYWHERE ELSE.
          </h3>
          <p className="text-lg text-deep-brown/80 max-w-2xl mx-auto leading-relaxed mb-16">
            We are not just a café. We are a neighbourhood third place—designed for people to slow down, meet, eat, drink honest coffee, and spend time together. Come for the coffee. Stay for the story.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Coffee, title: "Honest Coffee" },
              { icon: Utensils, title: "All-Day Food" },
              { icon: Users, title: "Community" },
              { icon: BookOpen, title: "Real Bookshelves" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-full bg-warm-white border border-espresso/10 flex items-center justify-center group-hover:bg-terracotta/10 transition-colors duration-300">
                  <item.icon size={24} className="text-terracotta" />
                </div>
                <span className="font-serif text-lg text-espresso">{item.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* A Day at Story - Timeline */}
      <section className="py-24 md:py-32 bg-warm-white border-y border-deep-brown/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-4">A DAY AT STORY</h2>
            <p className="text-deep-brown/70">From morning brews to slow evenings.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { time: "08:00", title: "Morning Light", desc: "Coffee & hearty breakfasts to start the day right." },
              { time: "11:00", title: "Focus & Flow", desc: "Quiet corners for work, reading, or deep conversations." },
              { time: "13:00", title: "Midday Fuel", desc: "Fresh salads, rice bowls, and our signature pastas." },
              { time: "17:00", title: "Golden Hour", desc: "Catch-ups over specialty coffee and sweet treats." },
              { time: "19:00", title: "Dinner Tales", desc: "Pizzas, steaks, and comfort food as the lights dim." },
              { time: "21:00", title: "Slow Evenings", desc: "Unwinding with good company and great stories." }
            ].map((slot, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-warm-cream p-8 rounded-sm border border-deep-brown/5 hover:border-terracotta/30 transition-colors"
              >
                <div className="text-sm font-semibold text-terracotta mb-2 font-sans tracking-widest">{slot.time}</div>
                <h4 className="text-2xl font-serif text-espresso mb-3">{slot.title}</h4>
                <p className="text-deep-brown/80 text-sm leading-relaxed">{slot.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Sections from other pages */}
      <div id="menu">
        <MenuSection isSection={true} />
      </div>
      
      <div id="locations">
        <LocationsSection isSection={true} />
      </div>
      
      <div id="events">
        <EventsSection isSection={true} />
      </div>
      
      <div id="community">
        <CommunitySection isSection={true} />
      </div>
      
      <div id="about">
        <AboutSection isSection={true} />
      </div>

    </div>
  );
}
