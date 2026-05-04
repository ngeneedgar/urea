import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, TrendingUp, Globe2, Truck, Server, PackageOpen } from 'lucide-react';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';

const products = [
  {
    id: 'npk',
    title: 'NPK Fertilizers',
    subtitle: 'NPK fertilizer',
    description: 'Balanced nutrient blends designed for crop-specific applications.',
    listItems: [
      'NPK 15-15-15',
      'NPK 20-10-10',
      'NPK 16-16-16',
      'NPK 12-24-12',
    ],
    footerText: 'Suitable for various crops and soil conditions in commercial farming.',
    cta: '👉 Request NPK Pricing',
    image: 'https://i.postimg.cc/wTZTVtPb/Compound_NPK_Fertilizers.jpg',
    link: '/products/npk'
  },
  {
    id: 'urea',
    title: 'Urea 46% Fertilizer',
    subtitle: 'High nitrogen fertilizer widely used for strong plant growth and yield improvement.',
    description: 'High nitrogen fertilizer widely used for strong plant growth and yield improvement.',
    listItems: [
      'Granular Urea 46%',
      'Prilled Urea 46%',
    ],
    footerText: 'Ideal for large-scale agricultural applications.',
    cta: '👉 Request Urea Pricing',
    image: 'https://i.postimg.cc/rsqqDxD0/UREA_Fertiilizers.webp',
    link: '/products/urea'
  },
  {
    id: 'dap',
    title: 'DAP fertilizer [Diammonium Phosphate]',
    description: 'Phosphorus-rich fertilizer that supports root development and early crop establishment.',
    cta: '👉 Request DAP Pricing',
    image: 'https://i.postimg.cc/yYk8chfT/Diammonium_Phosphate_(DAP)_Fertilizers.jpg',
    link: '/products/dap'
  },
  {
    id: 'map',
    title: 'MAP fertilizer [Monoammonium Phosphate]',
    description: 'Efficient phosphorus source for early-stage growth and nutrient uptake.',
    cta: '👉 Request MAP Pricing',
    image: 'https://i.postimg.cc/nznY5gps/MAP.jpg',
    link: '/products/map'
  },
  {
    id: 'can',
    title: 'CAN fertilizer [Calcium Ammonium Nitrate]',
    description: 'Provides stable nitrogen supply with added calcium for improved plant and soil performance.',
    cta: '👉 Request CAN Pricing',
    image: 'https://i.postimg.cc/ZRJFg24b/CAN.jpg',
    link: '/products/can'
  },
  {
    id: 'ammonium-nitrate',
    title: 'Ammonium nitrate Fertilizer',
    subtitle: 'Ammonium nitrate Fertilizer',
    description: 'Fast-acting nitrogen fertilizer designed for rapid crop response and efficient nutrient absorption.',
    cta: '👉 Request Pricing',
    image: 'https://i.postimg.cc/qRpXYS47/ammonium-nitrate-11.webp',
    link: '/products/ammonium-nitrate'
  },
  {
    id: 'potash',
    title: 'Potassium Chloride Fertilizer [Potash]',
    subtitle: 'Potassium Chloride Fertilizer [Potash]',
    description: 'Essential potassium fertilizer that supports crop strength, quality, and yield.',
    cta: '👉 Request Potash Pricing',
    image: 'https://i.postimg.cc/ZqVVxxmM/Potash-(KCI).jpg',
    link: '/products/potash'
  }
];

export function Products() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="Bulk Fertilizer Supplier | NPK, Urea, DAP, MAP, CAN, Potassium Chloride" 
        description="Bulk fertilizer supply for farms and distributors. NPK, Urea 46%, DAP, MAP, CAN, Ammonium nitrate Fertilizer, and Potassium Chloride Fertilizer [Potash]. Request wholesale pricing today."
        url="https://novaferti.com/products"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-card border-b border-border">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img
            src="https://i.postimg.cc/Df1tDSS2/hero-copy.jpg"
            alt="NovaFerti Products"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h1 className="sr-only">Bulk Fertilizers for Commercial Agriculture</h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-text mb-6 leading-tight"
          >
            Bulk Fertilizer Supply for <span className="text-gradient">Farms & Distributors</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Reliable wholesale supply of high-demand fertilizers for commercial agriculture. Consistent availability, competitive pricing, and global delivery support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 items-center"
          >
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
                Request Bulk Pricing
              </Button>
            </Link>
            <p className="text-sm font-medium text-text bg-secondary/10 px-4 py-2 rounded-lg border border-secondary/20 uppercase tracking-wide inline-block">
              Business inquiries only. No retail sales or employment opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background border-b border-border text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <p className="text-xl md:text-2xl font-medium text-text leading-relaxed">
            NovaFerti supplies a range of agricultural fertilizers in bulk quantities to farms, distributors, and agricultural businesses worldwide.
          </p>
          <p className="text-lg text-text-muted leading-relaxed mt-4">
            Our product portfolio supports efficient crop nutrition, consistent performance, and large-scale agricultural operations.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 relative bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 flex flex-col justify-end p-8">
                     <h3 className="text-3xl font-heading font-bold text-white drop-shadow-md">
                       {product.title}
                     </h3>
                     {product.subtitle && product.subtitle !== product.description && (
                        <p className="text-white/90 font-medium mt-1">{product.subtitle}</p>
                     )}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-lg text-text-muted mb-6">
                    {product.description}
                  </p>

                  {product.listItems && product.listItems.length > 0 && (
                    <div className="mb-6 bg-background rounded-xl p-6 border border-border">
                      {product.id === 'npk' && <p className="font-medium text-text mb-3">Available formulations:</p>}
                      {product.id === 'urea' && <p className="font-medium text-text mb-3">Available types:</p>}
                      <ul className="space-y-2">
                        {product.listItems.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-text-muted">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.footerText && (
                    <p className="text-text font-medium mb-6">
                      {product.footerText}
                    </p>
                  )}

                  <div className="mt-auto pt-6 border-t border-border">
                    <Link
                      to="/contact"
                      className="block w-full"
                    >
                      <Button className="w-full group/icon">
                        {product.cta.replace('👉 ', '')}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/icon:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply & Ordering + Who We Serve */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Supply & Ordering */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-8">Bulk Supply & Delivery</h2>
              <p className="text-lg text-text-muted mb-6">We support commercial fertilizer requirements with:</p>
              <ul className="space-y-4">
                {[
                  'Bulk / wholesale quantities only',
                  'Competitive pricing based on volume',
                  'Consistent product availability',
                  'Global shipping and logistics coordination',
                  'Reliable supply for ongoing agricultural operations'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-text font-medium bg-background p-4 rounded-xl border border-border">
                    <PackageOpen className="text-primary w-6 h-6 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Who We Serve (Filter) */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="flex flex-col gap-8"
            >
              <div className="bg-background p-8 rounded-3xl border border-border h-full">
                <h2 className="text-3xl font-heading font-bold text-text mb-6">Who This Page Is For</h2>
                <p className="text-lg text-text-muted mb-6">We work with:</p>
                <ul className="space-y-3 mb-10 text-lg font-medium text-text">
                  <li className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Globe2 className="w-4 h-4 text-primary" /></div> Farms</li>
                  <li className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Truck className="w-4 h-4 text-primary" /></div> Importers</li>
                  <li className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Box className="w-4 h-4 text-primary" /></div> Distributors</li>
                  <li className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><TrendingUp className="w-4 h-4 text-primary" /></div> Agricultural companies</li>
                </ul>

                <h3 className="text-2xl font-bold text-secondary mb-4 pt-8 border-t border-border">Important Notice</h3>
                <p className="text-lg text-text-muted mb-4">We do not offer:</p>
                <ul className="space-y-3 text-lg font-medium text-text-muted">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-secondary/50" /> Retail sales</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-secondary/50" /> Job or employment opportunities</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-background overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text mb-6">
            Request Product Details & Pricing
          </h2>
          <p className="text-xl text-text-muted mb-8">
            Contact us to receive:
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
             {['Product specifications', 'Bulk pricing', 'Minimum order quantities', 'Delivery timelines'].map((req, i) => (
                <span key={i} className="bg-card border border-border px-6 py-3 rounded-full text-text font-medium shadow-sm">
                  {req}
                </span>
             ))}
          </div>
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
              Request Bulk Pricing
            </Button>
          </Link>
        </div>
      </section>

      {/* Final Filter Line */}
      <section className="py-12 bg-secondary/10 border-t border-secondary/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-lg text-secondary font-medium mb-2">
            All products are supplied in bulk quantities for commercial use only.
          </p>
          <p className="text-lg text-secondary font-medium mb-2">
            Minimum order: bulk / wholesale volumes.
          </p>
          <p className="text-xl font-bold text-secondary">
            Business inquiries only.
          </p>
        </div>
      </section>
    </div>
  );
}

