import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Droplets, ShieldCheck, Sprout, BookOpen, Truck, Scale, CheckCircle2, Globe, TrendingUp, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/Df1tDSS2/hero-copy.jpg"
            alt="Sustainable Farming"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Gradient overlays for text readability and blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-12 lg:mt-24">
            
            {/* Left Content: Headline & CTA */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-6"
              >
                NovaFerti
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                className="text-4xl md:text-7xl lg:text-[5.5rem] font-heading font-medium tracking-tight text-white mb-10 leading-[1.15]"
              >
                Bulk Fertilizer Supply for Farms & Distributors
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      onClick={() => {
                        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                      }} 
                      className="w-full sm:w-auto text-lg px-8 py-4 group"
                    >
                      View Products
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="w-full shadow-xl text-lg px-8 py-4 text-white border-white/30 bg-black/20 hover:bg-black/40 backdrop-blur-sm"
                      >
                        Request Bulk Pricing
                      </Button>
                    </Link>
                  </div>
                  <p className="text-white/90 font-medium">
                    <strong className="border-b-2 border-white/50 pb-1">Business inquiries only. No retail sales or employment opportunities.</strong>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Content: Description */}
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-start pt-2 lg:pt-14">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="text-lg text-white/90 leading-relaxed"
              >
                Reliable wholesale supply of agricultural fertilizers for commercial operations. Competitive pricing, consistent availability, and global delivery.
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-8">
              <Leaf className="w-10 h-10" />
            </div>
            <p className="text-2xl text-text leading-relaxed">
              NovaFerti supplies high-quality fertilizers in bulk to agricultural businesses, importers, and distributors worldwide.
            </p>
            <p className="text-text-muted mt-4 text-xl">
              We focus on large-volume supply, dependable sourcing, and long-term supply relationships.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mt-16 rounded-[2.5rem] overflow-hidden shadow-2xl relative"
          >
            <img 
              src="https://i.postimg.cc/XYdQPySr/high-quality-fertilizers.jpg" 
              alt="High Quality Fertilizers in Bulk" 
              className="w-full h-[400px] md:h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Engineered for Performance */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-text">
              Engineered for Performance
            </h2>
            <p className="text-text-muted text-lg">
              Modern crops demand balanced nutrition at every growth stage. Our products are developed to support:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {[
              { label: 'Strong root establishment', icon: Sprout },
              { label: 'Vigorous vegetative growth', icon: Leaf },
              { label: 'Improved flowering and fruit set', icon: Droplets },
              { label: 'Enhanced size, color, and crop quality', icon: ShieldCheck },
              { label: 'Greater stress tolerance under challenging conditions', icon: ShieldCheck },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-background border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8" />
                </div>
                <p className="text-text font-medium text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl text-text-muted">
              By focusing on <strong>solubility, purity, and nutrient balance</strong>, NovaFerti ensures plants receive essential elements in a readily available form.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section id="products" className="py-24 bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-text">
                Our Fertilizer Range
              </h2>
              <p className="text-text-muted text-lg">
                We supply high-demand fertilizers in bulk quantities for farms, distributors, and agricultural businesses:
              </p>
            </div>
            <Link to="/contact">
              <Button variant="outline" className="px-6 py-2">Request Bulk Pricing</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductCard
              title="NPK fertilizer"
              description="Balanced nutrient blends for crop-specific applications."
              image="https://i.postimg.cc/wTZTVtPb/Compound_NPK_Fertilizers.jpg"
              link="/products/npk"
              delay={0}
            />
            <ProductCard
              title="Urea 46% Fertilizer"
              description="High nitrogen content for strong plant growth."
              image="https://i.postimg.cc/rsqqDxD0/UREA_Fertiilizers.webp"
              link="/products/urea"
              delay={0.1}
            />
            <ProductCard
              title="DAP fertilizer [Diammonium Phosphate]"
              description="Phosphorus-rich fertilizer for root development."
              image="https://i.postimg.cc/yYk8chfT/Diammonium_Phosphate_(DAP)_Fertilizers.jpg"
              link="/products/dap"
              delay={0.2}
            />
            <ProductCard
              title="MAP fertilizer [Monoammonium Phosphate]"
              description="Efficient phosphorus source for early plant establishment."
              image="https://i.postimg.cc/nznY5gps/MAP.jpg"
              link="/products/map"
              delay={0.3}
            />
            <ProductCard
              title="CAN fertilizer [Calcium Ammonium Nitrate]"
              description="Stable nitrogen supply with added calcium support."
              image="https://i.postimg.cc/ZRJFg24b/CAN.jpg"
              link="/products/can"
              delay={0.4}
            />
            <ProductCard
              title="Ammonium nitrate Fertilizer"
              description="Fast-acting nitrogen source for rapid crop response."
              image="https://i.postimg.cc/qRpXYS47/ammonium-nitrate-11.webp"
              link="/products/ammonium-nitrate"
              delay={0.5}
            />
            <ProductCard
              title="Potassium Chloride Fertilizer [Potash]"
              description="Essential potassium source for crop strength and yield quality."
              image="https://i.postimg.cc/ZqVVxxmM/Potash-(KCI).jpg"
              link="/products/potash"
              delay={0.6}
            />
          </div>
          <div className="mt-12 text-center text-text-muted">
            <p>All products are supplied in bulk quantities for commercial use only.</p>
            <p className="font-bold mt-2">Minimum order: bulk / wholesale volumes. Business inquiries only.</p>
          </div>
        </div>
      </section>

      {/* Why Choose NovaFerti */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-text mb-16">Why Choose NovaFerti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Scale, title: 'Bulk supply capability', desc: 'Capable of handling large-volume wholesale orders.' },
              { icon: TrendingUp, title: 'Competitive wholesale pricing', desc: 'Direct sourcing for optimal business margins.' },
              { icon: CheckCircle2, title: 'Consistent product quality', desc: 'Guaranteed standards across all shipments.' },
              { icon: Truck, title: 'Reliable global logistics', desc: 'Efficient delivery to your destination.' },
              { icon: ShieldCheck, title: 'Long-term supply support', desc: 'Dedicated partnership for your business growth.' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-background border border-border hover:border-primary/30 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-text mb-4">{item.title}</h3>
                <p className="text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-text mb-16">Who We Serve</h2>
          <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-card border border-border">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8">
              <Users className="w-8 h-8" />
            </div>
            <p className="text-lg text-text-muted mb-8 text-center">We work exclusively with:</p>
            <ul className="text-xl font-medium text-text space-y-4 text-center">
              <li>• Farms</li>
              <li>• Importers</li>
              <li>• Distributors</li>
              <li>• Agricultural companies</li>
            </ul>
            <p className="text-center font-bold text-secondary mt-12 bg-secondary/10 p-4 rounded-xl">
              We do not offer retail sales, small orders, or employment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Request Bulk Pricing & Availability</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">Submit your inquiry to receive product details, pricing, and delivery timelines.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">Request Bulk Pricing</Button>
          </Link>
          <p className="mt-8 font-bold text-white/80">Business inquiries only.</p>
        </div>
      </section>

      {/* Designed for Multiple Growing Systems */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <motion.div style={{ y: y2 }} className="absolute -right-64 -top-64 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden relative">
                <img
                  src="https://i.postimg.cc/SQVGJ45c/enhanced-crop-resilience-22.jpg"
                  alt="Sustainable Farming"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-multiply" />
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl shadow-xl max-w-xs hidden md:block"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div className="font-heading font-bold text-xl text-text">Eco-Certified</div>
                </div>
                <p className="text-sm text-text-muted">Committed to sustainable agricultural practices worldwide.</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary w-fit text-sm font-semibold tracking-wide uppercase">
                Versatility
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text leading-tight">
                Designed for <span className="text-gradient">Multiple</span> Growing Systems
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                NovaFerti solutions integrate seamlessly into:
              </p>
              <ul className="flex flex-col gap-4 my-4">
                {[
                  'Open-field agriculture',
                  'Greenhouse production',
                  'Hydroponic systems',
                  'Drip irrigation and fertigation programs',
                  'Specialty crop production'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text font-medium">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg text-text-muted leading-relaxed font-medium">
                Our fertilizers are compatible with modern irrigation technologies and professional farming operations.
              </p>
              <Link to="/about" className="w-fit mt-2">
                <Button variant="outline" className="group">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Precision. Efficiency. Reliability. */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-text">
              Precision. Efficiency. Reliability.
            </h2>
            <p className="text-text-muted text-lg">
              We prioritize:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Precision</h3>
              <p className="text-text-muted">Accurate nutrient ratios tailored for optimal plant development.</p>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Efficiency</h3>
              <p className="text-text-muted">Improved nutrient uptake with minimal waste.</p>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Reliability</h3>
              <p className="text-text-muted">Consistent quality growers can depend on season after season.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase mb-4">
                <BookOpen className="w-4 h-4" />
                <span>NovaFerti Insights</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-text">
                Latest from our Blog
              </h2>
              <p className="text-text-muted text-lg">
                Practical insights, agronomic guidance, and industry updates.
              </p>
            </div>
            <Link to="/blog">
              <Button variant="outline" className="hidden md:inline-flex px-6 py-2">View All Articles</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Role of Precision Fertilization in Increasing Crop Yields",
                excerpt: "Modern agriculture is no longer driven by volume alone — it is driven by precision. Learn how to focus on nutrient efficiency.",
                image: "https://i.postimg.cc/SQVGJ45c/enhanced-crop-resilience-22.jpg",
                link: "/blog/precision-fertilization"
              },
              {
                title: "Understanding NPK: The Foundation of Plant Nutrition",
                excerpt: "Nitrogen, phosphorus, and potassium form the foundation of plant nutrition. Each plays a unique role in plant development.",
                image: "https://i.postimg.cc/wTZTVtPb/Compound_NPK_Fertilizers.jpg",
                link: "/blog/understanding-npk"
              },
              {
                title: "Water-Soluble Fertilizers and Modern Farming",
                excerpt: "Water-soluble fertilizers have transformed nutrient delivery systems, particularly in fertigation and greenhouse operations.",
                image: "https://i.postimg.cc/PJqr61TV/Ammonium_Sulfate_Fertilizers.jpg",
                link: "/blog/water-soluble-fertilizers"
              }
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col bg-background rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-muted mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to={post.link} className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-auto">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/blog">
              <Button variant="outline" className="px-6 py-2">View All Articles</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1920/1080')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto flex flex-col items-center gap-8"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
              Growing Toward the Future
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl">
              As global agriculture faces increasing demand for productivity and sustainability, NovaFerti remains committed to providing solutions that help farmers maximize output while supporting long-term soil health.
            </p>
            <p className="text-white font-bold text-xl md:text-2xl max-w-2xl">
              NovaFerti — Precision Nutrition. Proven Performance.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl px-8 py-4 h-auto">
                Contact Sales Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
