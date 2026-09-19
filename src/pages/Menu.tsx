import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, menuItems } from '../data/menu';

type FilterType = 'All' | 'Popular' | 'Veg' | 'Non-Veg';

export default function Menu({ isSection = false }: { isSection?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Type filter
      if (activeFilter === 'Popular' && !item.isPopular) return false;
      if (activeFilter === 'Veg' && !item.isVeg) return false;
      if (activeFilter === 'Non-Veg' && item.isVeg) return false;
      
      return true;
    });
  }, [activeCategory, activeFilter]);

  // Group items by category for rendering when 'all' is selected
  const groupedItems = useMemo(() => {
    if (activeCategory !== 'all') return { [activeCategory]: filteredItems };
    
    return filteredItems.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, typeof menuItems>);
  }, [activeCategory, filteredItems]);

  const getCategoryName = (id: string) => categories.find(c => c.id === id)?.name || id;

  return (
    <div className={isSection ? 'py-24' : 'bg-warm-cream min-h-screen pt-32 pb-24'}>
      {!isSection && (
        <Helmet>
          <title>Menu | Story Coffee House</title>
          <meta name="description" content="Explore the Story Coffee House menu. From All Day Breakfast and Pastas to Hand-tossed Pizzas and Specialty Coffee." />
        </Helmet>
      )}

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-espresso mb-6">MENU</h1>
          <p className="text-lg text-deep-brown/80 max-w-2xl mx-auto">
            Honest coffee, hearty breakfasts, and everything in between.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-deep-brown/10 pb-6">
          {/* Categories */}
          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-8 hide-scrollbar">
            <button
              onClick={() => setActiveCategory('all')}
              className={`whitespace-nowrap text-sm font-semibold tracking-wide transition-colors ${
                activeCategory === 'all' ? 'text-terracotta border-b-2 border-terracotta pb-1' : 'text-espresso/60 hover:text-espresso'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap text-sm font-semibold tracking-wide transition-colors ${
                  activeCategory === cat.id ? 'text-terracotta border-b-2 border-terracotta pb-1' : 'text-espresso/60 hover:text-espresso'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Type Filters */}
          <div className="flex gap-2">
            {(['All', 'Popular', 'Veg', 'Non-Veg'] as FilterType[]).map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 text-xs font-semibold tracking-wider rounded-sm transition-colors border ${
                  activeFilter === filter 
                    ? 'bg-espresso text-warm-cream border-espresso' 
                    : 'border-deep-brown/20 text-espresso hover:border-espresso'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="space-y-16">
          <AnimatePresence mode="wait">
            {Object.keys(groupedItems).length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 text-deep-brown/60"
              >
                No items found for this selection.
              </motion.div>
            ) : (
              Object.entries(groupedItems).map(([categoryId, items]) => (
                <motion.div 
                  key={categoryId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-serif text-espresso mb-8 border-b border-deep-brown/10 pb-4">
                    {getCategoryName(categoryId)}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {items.map(item => (
                      <div key={item.id} className="flex justify-between items-start group">
                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`w-3 h-3 rounded-full border flex items-center justify-center ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></span>
                            </span>
                            <h4 className="font-serif text-xl text-espresso group-hover:text-terracotta transition-colors">{item.name}</h4>
                            {item.isPopular && (
                              <span className="text-[10px] uppercase tracking-wider bg-muted-gold/20 text-muted-gold px-2 py-0.5 rounded-sm">Popular</span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-sm text-deep-brown/70 leading-relaxed mt-2">{item.description}</p>
                          )}
                        </div>
                        <div className="font-sans font-medium text-espresso">
                          ₹{item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
