import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, CheckCircle2, Package, Beaker, Leaf } from 'lucide-react';
import { Button } from '../../components/Button';

const products = [
  {
    id: 'urea-granular',
    name: 'Urea N46% Min (Granular)',
    image: 'https://i.postimg.cc/d1r0kJ4Y/Urea_N46_Min_(Granular).webp',
    description: 'Premium granular urea providing a highly concentrated source of nitrogen. Ideal for broadacre farming and mechanical spreading due to its uniform size and hardness.',
    specs: [
      { label: 'Nitrogen (N)', value: '46.0% Min' },
      { label: 'Biuret', value: '1.0% Max' },
      { label: 'Moisture', value: '0.5% Max' },
      { label: 'Size (2-4mm)', value: '90% Min' },
    ],
    advantages: [
      'High nitrogen concentration reduces transport costs',
      'Hard granules resist crushing during handling',
      'Slower release compared to prilled urea',
      'Suitable for bulk blending'
    ],
    application: 'Apply directly to soil or use in bulk blends. Best incorporated into the soil to minimize volatilization losses.'
  },
  {
    id: 'urea-prilled',
    name: 'Prilled Urea 46%',
    image: 'https://i.postimg.cc/nzBLjn0x/Prilled_Urea_46.webp',
    description: 'Fast-dissolving prilled urea, perfect for foliar application, fertigation, and situations requiring rapid nitrogen availability.',
    specs: [
      { label: 'Nitrogen (N)', value: '46.0% Min' },
      { label: 'Biuret', value: '1.0% Max' },
      { label: 'Moisture', value: '0.5% Max' },
      { label: 'Size (0.85-2.8mm)', value: '90% Min' },
    ],
    advantages: [
      'Rapid dissolution in water',
      'Ideal for liquid fertilizer formulations',
      'Quick nitrogen availability to plants',
      'Excellent for foliar spraying'
    ],
    application: 'Dissolve in water for fertigation or foliar spray. Can also be broadcast directly onto soil.'
  },
  {
    id: 'urea-tech',
    name: 'Technical Grade Urea',
    image: 'https://i.postimg.cc/FzvH0wBQ/Technical_Grade_Urea.jpg',
    description: 'High-purity urea with ultra-low biuret content, specifically manufactured for sensitive crops and industrial applications like DEF (Diesel Exhaust Fluid).',
    specs: [
      { label: 'Nitrogen (N)', value: '46.0% Min' },
      { label: 'Biuret', value: '0.5% Max' },
      { label: 'Moisture', value: '0.3% Max' },
      { label: 'Purity', value: '99% Min' },
    ],
    advantages: [
      'Ultra-low biuret prevents toxicity in sensitive crops',
      'Highest purity standards',
      'Suitable for DEF production',
      'Leaves no residue upon dissolution'
    ],
    application: 'Use for foliar application on citrus, pineapple, and other biuret-sensitive crops. Also used in industrial manufacturing.'
  }
];

export function Urea() {
  const navigate = useNavigate();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleOrder = (productName: string) => {
    navigate('/contact', { state: { product: productName } });
  };

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-card border-b border-border">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/rsqqDxD0/UREA_Fertiilizers.webp"
            alt="Urea Fertilizers"
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
            <span>Nitrogen Series</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-text mb-6"
          >
            High-Efficiency <span className="text-gradient">Nitrogen</span> Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Our premium urea products deliver the highest concentration of nitrogen available in solid form, engineered for maximum uptake and minimal loss.
          </motion.p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-24">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 rounded-[3rem] overflow-hidden aspect-[4/3] relative group shadow-sm border border-border">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply" />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">{product.name}</h2>
                    <p className="text-lg text-text-muted leading-relaxed">{product.description}</p>
                  </div>

                  {/* Specs Table */}
                  <div className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                    <h3 className="text-xl font-heading font-semibold text-text mb-4 flex items-center gap-2">
                      <Beaker className="w-5 h-5 text-primary" />
                      Typical Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex flex-col p-3 rounded-xl bg-background border border-border">
                          <span className="text-sm text-text-muted font-medium">{spec.label}</span>
                          <span className="text-lg font-semibold text-text">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accordion */}
                  <div className="flex flex-col gap-4">
                    {/* Advantages */}
                    <div className="border border-border rounded-2xl overflow-hidden bg-card">
                      <button
                        onClick={() => toggleAccordion(`${product.id}-adv`)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-background transition-colors"
                      >
                        <span className="font-semibold text-text flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-secondary" />
                          Key Advantages
                        </span>
                        <ChevronDown className={`w-5 h-5 text-text-muted transition-transform ${openAccordion === `${product.id}-adv` ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openAccordion === `${product.id}-adv` && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 pt-2 border-t border-border">
                              <ul className="flex flex-col gap-2">
                                {product.advantages.map((adv, i) => (
                                  <li key={i} className="flex items-start gap-2 text-text-muted">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    {adv}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Application */}
                    <div className="border border-border rounded-2xl overflow-hidden bg-card">
                      <button
                        onClick={() => toggleAccordion(`${product.id}-app`)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-background transition-colors"
                      >
                        <span className="font-semibold text-text flex items-center gap-2">
                          <Package className="w-5 h-5 text-accent" />
                          Application Guide
                        </span>
                        <ChevronDown className={`w-5 h-5 text-text-muted transition-transform ${openAccordion === `${product.id}-app` ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openAccordion === `${product.id}-app` && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 pt-2 border-t border-border">
                              <p className="text-text-muted">{product.application}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Button size="lg" onClick={() => handleOrder(product.name)} className="w-full md:w-auto">
                      Request Bulk Pricing
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
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
