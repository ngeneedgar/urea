import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button';

const products = [
  { id: 'npk-15', name: 'NPK 15-15-15', n: 15, p: 15, k: 15, desc: 'Balanced nutrition for general purpose application across a wide variety of crops.' },
  { id: 'npk-20', name: 'NPK 20-10-10', n: 20, p: 10, k: 10, desc: 'High nitrogen formula ideal for early growth stages and leafy vegetables.' },
  { id: 'npk-16', name: 'NPK 16-16-16', n: 16, p: 16, k: 16, desc: 'Premium balanced formula with enhanced solubility for rapid nutrient uptake.' },
  { id: 'npk-23', name: 'NPK 23-10-5', n: 23, p: 10, k: 5, desc: 'Nitrogen-dominant blend designed for pastures and high-biomass crops.' },
  { id: 'npk-12', name: 'NPK 12-24-12', n: 12, p: 24, k: 12, desc: 'High phosphorus blend perfect for root development and planting/seeding.' },
];

export function NPK() {
  const navigate = useNavigate();

  const handleOrder = (productName: string) => {
    navigate('/contact', { state: { product: productName } });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-card border-b border-border">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/wTZTVtPb/Compound_NPK_Fertilizers.jpg"
            alt="Compound NPK Fertilizers"
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
            <Leaf className="w-4 h-4" />
            <span>Compound Series</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-text mb-6"
          >
            Balanced <span className="text-gradient">Nutrition</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Our Compound NPK fertilizers provide a precise blend of Nitrogen, Phosphorus, and Potassium in every single granule for uniform crop growth.
          </motion.p>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">Our NPK Formulations</h2>
              <p className="text-lg text-text-muted">Select the perfect nutrient ratio for your specific crop requirements.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {products.map((product, index) => {
                const total = product.n + product.p + product.k;
                const nPct = (product.n / total) * 100;
                const pPct = (product.p / total) * 100;
                const kPct = (product.k / total) * 100;

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-card p-6 md:p-8 rounded-3xl border border-border hover:border-primary/30 transition-all shadow-sm hover:shadow-md flex flex-col md:flex-row items-center gap-8"
                  >
                    {/* Info */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2">
                      <h3 className="text-2xl font-heading font-bold text-text">{product.name}</h3>
                      <p className="text-text-muted text-sm">{product.desc}</p>
                    </div>

                    {/* Nutrient Bars */}
                    <div className="w-full md:w-1/2 flex flex-col gap-3">
                      {/* N */}
                      <div className="flex items-center gap-4">
                        <div className="w-8 font-semibold text-text">N</div>
                        <div className="flex-grow h-3 bg-background rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${nPct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                        <div className="w-8 text-right text-sm font-medium text-text-muted">{product.n}%</div>
                      </div>
                      {/* P */}
                      <div className="flex items-center gap-4">
                        <div className="w-8 font-semibold text-text">P</div>
                        <div className="flex-grow h-3 bg-background rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pPct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-full bg-secondary rounded-full"
                          />
                        </div>
                        <div className="w-8 text-right text-sm font-medium text-text-muted">{product.p}%</div>
                      </div>
                      {/* K */}
                      <div className="flex items-center gap-4">
                        <div className="w-8 font-semibold text-text">K</div>
                        <div className="flex-grow h-3 bg-background rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${kPct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="h-full bg-accent rounded-full"
                          />
                        </div>
                        <div className="w-8 text-right text-sm font-medium text-text-muted">{product.k}%</div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="w-full md:w-auto md:ml-auto">
                      <Button onClick={() => handleOrder(product.name)} className="w-full md:w-auto group">
                        Request Bulk Pricing
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-card/80 backdrop-blur-md border-t border-border z-40">
        <Button size="lg" className="w-full shadow-xl" onClick={() => navigate('/contact')}>
          Request Bulk Pricing
        </Button>
      </div>
    </div>
  );
}
