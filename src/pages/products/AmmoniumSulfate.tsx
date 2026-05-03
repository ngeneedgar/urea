import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, CheckCircle2, Package, Beaker, Leaf } from 'lucide-react';
import { Button } from '../../components/Button';

const products = [
  {
    id: 'as-granular',
    name: 'Granular Ammonium Sulfate',
    image: 'https://i.postimg.cc/ZnqKf6Jk/Granular_Ammonium_Sulfate.jpg',
    description: 'High-quality granular ammonium sulfate providing essential nitrogen and readily available sulfur. Perfect for bulk blending and direct application.',
    specs: [
      { label: 'Nitrogen (N)', value: '21.0% Min' },
      { label: 'Sulfur (S)', value: '24.0% Min' },
      { label: 'Moisture', value: '1.0% Max' },
      { label: 'Size (2-4mm)', value: '90% Min' },
    ],
    advantages: [
      'Provides readily available sulfate sulfur',
      'Excellent for bulk blending with other granular fertilizers',
      'Lowers soil pH in alkaline soils',
      'Hard granules resist dust formation'
    ],
    application: 'Ideal for direct application or as a component in bulk blends. Particularly beneficial for sulfur-demanding crops like canola, alfalfa, and corn.'
  },
  {
    id: 'as-capro',
    name: 'Caprolactam Grade Ammonium Sulfate',
    image: 'https://i.postimg.cc/C5KLvbSm/Caprolactam_Grade_Ammonium_Sulfate.webp',
    description: 'A co-product of caprolactam production, offering a cost-effective source of nitrogen and sulfur in a crystalline form.',
    specs: [
      { label: 'Nitrogen (N)', value: '21.0% Min' },
      { label: 'Sulfur (S)', value: '24.0% Min' },
      { label: 'Moisture', value: '0.5% Max' },
      { label: 'Free Acid', value: '0.05% Max' },
    ],
    advantages: [
      'Cost-effective source of N and S',
      'Highly soluble in water',
      'Consistent quality and purity',
      'Suitable for liquid fertilizer production'
    ],
    application: 'Best suited for dissolving in water for fertigation or liquid fertilizer blends. Can also be applied directly where dust is not a primary concern.'
  },
  {
    id: 'as-crystal',
    name: 'Crystalline Ammonium Sulfate',
    image: 'https://i.postimg.cc/MHGKs1qD/Crystalline_Ammonium_Sulfate.webp',
    description: 'Pure crystalline ammonium sulfate, highly soluble and ideal for fertigation systems and foliar applications.',
    specs: [
      { label: 'Nitrogen (N)', value: '21.0% Min' },
      { label: 'Sulfur (S)', value: '24.0% Min' },
      { label: 'Moisture', value: '0.2% Max' },
      { label: 'Insolubles', value: '0.05% Max' },
    ],
    advantages: [
      'Exceptional solubility',
      'Leaves no residue in irrigation systems',
      'Rapid nutrient uptake',
      'High purity'
    ],
    application: 'Designed specifically for fertigation, hydroponics, and foliar spraying where complete dissolution is critical.'
  }
];

export function AmmoniumSulfate() {
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
            src="https://i.postimg.cc/PJqr61TV/Ammonium_Sulfate_Fertilizers.jpg"
            alt="Ammonium Sulfate Fertilizers"
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
            <span>Nitrogen & Sulfur Series</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-text mb-6"
          >
            Dual-Nutrient <span className="text-gradient">Power</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Ammonium Sulfate provides essential nitrogen and readily available sulfur, crucial for protein synthesis and optimal crop yield.
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
