import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { blogPosts } from '../data/blogPosts';
import { SEO } from '../components/SEO';

const categories = [
  'All',
  'Fertilizer Supply & Sourcing',
  'Crop Nutrition & Application',
  'Product Insights',
  'Agricultural Trends',
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="Fertilizer Supply Insights | Bulk Fertilizer for Agriculture" 
        description="Insights on bulk fertilizer supply, crop nutrition, and sourcing for farms and distributors. Practical content for commercial agriculture."
        url="https://novaferti.com/blog"
      />
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-card border-b border-border">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/SQVGJ45c/enhanced-crop-resilience-22.jpg"
            alt="NovaFerti Insights"
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase mb-6"
          >
            <BookOpen className="w-4 h-4" />
            <span>Commercial Insights</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-text mb-6"
          >
            Insights for <span className="text-gradient">Commercial Agriculture</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Practical information on fertilizer supply, crop nutrition, and sourcing strategies for farms, distributors, and agricultural businesses.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-text font-bold border-b-2 border-primary/20 inline-block px-2">
              Content is intended for business clients and commercial agriculture only.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <p className="text-xl md:text-2xl text-text font-medium leading-relaxed mb-6">
            The NovaFerti blog provides practical insights for agricultural businesses sourcing fertilizers in bulk.
          </p>
          <p className="text-lg text-text-muted leading-relaxed">
            Our content focuses on helping farms, distributors, and importers make informed decisions about fertilizer selection, supply planning, and efficient crop nutrition.
          </p>
        </div>
      </section>

      {/* Blog Categories and Main Feed */}
      <section className="py-24 relative bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          
          {/* Mobile Categories (Horizontal Scroll) */}
          <div className="lg:hidden -mx-4 px-4 overflow-x-auto pb-4 mb-8 hide-scrollbar touch-pan-x">
            <div className="flex gap-2 w-max pr-8">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-none px-5 py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap border ${
                    activeCategory === cat 
                      ? 'bg-primary text-white border-primary shadow-md' 
                      : 'bg-card text-text border-border hover:bg-background'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-full lg:w-1/3 flex-col gap-10 sticky top-24">
              <div className="bg-card p-8 rounded-3xl border border-border">
                <h3 className="text-2xl font-heading font-bold text-text mb-6">Blog Categories</h3>
                <ul className="flex flex-col gap-2">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <button 
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-xl transition-colors font-medium text-lg ${activeCategory === cat ? 'bg-primary/10 text-primary' : 'text-text hover:bg-background'}`}
                      >
                        {cat}
                        {activeCategory === cat && <ChevronRight className="w-5 h-5" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main Content Area (Blog Feed) */}
            <div className="w-full lg:w-2/3 flex flex-col">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-heading font-bold text-text">Featured Articles</h2>
                <span className="text-text-muted font-medium">{activeCategory}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredPosts.map((post, i) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={post.slug}
                      className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-colors h-full"
                    >
                      <Link to={`/blog/${post.slug}`} className="aspect-[16/9] overflow-hidden block">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </Link>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-3 text-sm font-medium">
                          <span className="text-primary bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
                          <span className="text-text-muted">{post.date}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-primary transition-colors leading-tight">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-text-muted mb-8 flex-grow leading-relaxed">
                          {post.excerpt}
                        </p>
                        <Link 
                          to={`/blog/${post.slug}`} 
                          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-auto"
                        >
                          Read More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {filteredPosts.length === 0 && (
                   <div className="col-span-full py-20 text-center flex flex-col items-center">
                     <BookOpen className="w-16 h-16 text-text-muted/30 mb-4" />
                     <p className="text-2xl font-heading text-text-muted mb-2">No articles found</p>
                     <p className="text-text-muted">Check back later for more insights in this category.</p>
                   </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Filter Section (VERY IMPORTANT) */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="bg-secondary/10 border border-secondary/20 p-10 md:p-14 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-secondary mb-6">This blog is intended for:</h3>
              <ul className="text-lg md:text-xl font-medium text-text space-y-4">
                <li className="flex items-center gap-3"><ChevronRight className="text-secondary w-5 h-5"/> Farms</li>
                <li className="flex items-center gap-3"><ChevronRight className="text-secondary w-5 h-5"/> Distributors</li>
                <li className="flex items-center gap-3"><ChevronRight className="text-secondary w-5 h-5"/> Importers</li>
                <li className="flex items-center gap-3"><ChevronRight className="text-secondary w-5 h-5"/> Agricultural businesses</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-text mb-6">We do not provide:</h3>
              <ul className="text-lg font-medium text-text-muted space-y-4">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-text-muted/50" /> Job postings</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-text-muted/50" /> Career opportunities</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-text-muted/50" /> Retail advice or small-scale gardening</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text mb-8">Need Bulk Fertilizer Supply?</h2>
          <p className="text-xl text-text-muted leading-relaxed mb-6">
            If you are sourcing fertilizers for your business, contact us for:
          </p>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
             {['Bulk pricing', 'Product specifications', 'Supply availability'].map((item, i) => (
               <li key={i} className="flex items-center gap-2 text-text font-medium text-lg">
                 <ShieldCheck className="w-5 h-5 text-secondary" />
                 {item}
               </li>
             ))}
          </ul>
          <Link to="/contact">
            <Button size="lg" className="px-8 shadow-xl">
              Request Bulk Pricing
            </Button>
          </Link>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
               <h3 className="text-2xl font-bold text-text">Supply Inquiries</h3>
               <p className="text-lg text-text-muted">
                 All supply inquiries are handled through our contact page.
               </p>
               <p className="text-xl font-bold text-text bg-card px-6 py-4 rounded-xl border border-border inline-block">
                 Business inquiries only.
               </p>
          </div>
        </div>
      </section>

    </div>
  );
}
