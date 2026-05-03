import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, CheckCircle2, Package, Beaker, Leaf } from 'lucide-react';
import { Button } from '../../components/Button';

const products = [
  {
    id: 'potash',
    name: 'Potassium Chloride Fertilizer [Potash]',
    image: 'https://i.postimg.cc/ZqVVxxmM/Potash-(KCI).jpg',
    description: 'Potassium chloride (KCl), the most commonly used source of potassium, is essential for overcoming plant deficiencies and maintaining crop strength and yield quality.',
    specs: [
      { label: 'Potassium (K)', value: '50-52%' },
      { label: 'Potash (K₂O)', value: '60-63%' },
      { label: 'Chloride (Cl⁻)', value: '45-47%' },
    ],
    advantages: [
      'Cost-effective source of potassium',
      'Rapidly dissolves in soil water',
      'Supports crop strength and stress tolerance',
      'Suitable for fertigation and fluid fertilizers'
    ],
    application: 'Apply to soil surface prior to tillage/planting, or band near seed. Can be applied via irrigation systems.'
  }
];

export function Potash() {
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
      <section className="relative py-32 overflow-hidden bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-text mb-6">
            Potassium Chloride <span className="text-xl md:text-3xl block text-gradient mt-4">Fertilizer [Potash]</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Essential potassium source for robust crop growth, stress tolerance, and quality yields.
          </p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-24">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="flex flex-col lg:flex-row gap-12 items-start"
              >
                <div className="w-full lg:w-1/2 rounded-[3rem] overflow-hidden aspect-[4/3] relative group shadow-sm border border-border">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">{product.name}</h2>
                    <p className="text-lg text-text-muted leading-relaxed">{product.description}</p>
                  </div>
                  <div className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                    <h3 className="text-xl font-heading font-semibold text-text mb-4 flex items-center gap-2"><Beaker className="w-5 h-5 text-primary" /> Typical Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex flex-col p-3 rounded-xl bg-background border border-border">
                          <span className="text-sm text-text-muted font-medium">{spec.label}</span>
                          <span className="text-lg font-semibold text-text">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="border border-border rounded-2xl overflow-hidden bg-card">
                      <button onClick={() => toggleAccordion('adv')} className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-background transition-colors">
                        <span className="font-semibold text-text flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-secondary" /> Key Advantages</span>
                        <ChevronDown className={`w-5 h-5 text-text-muted transition-transform ${openAccordion === 'adv' ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openAccordion === 'adv' && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="px-6 pb-4 pt-2 border-t border-border">
                              <ul className="flex flex-col gap-2">
                                {product.advantages.map((adv, i) => (
                                  <li key={i} className="flex items-start gap-2 text-text-muted"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />{adv}</li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button size="lg" onClick={() => handleOrder(product.name)} className="w-full md:w-auto">Request Bulk Pricing</Button>
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
