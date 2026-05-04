import { motion } from 'motion/react';
import { CheckCircle2, Factory, Globe2, Truck, Users, AlertCircle, Phone } from 'lucide-react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

interface ProductSectionsProps {
  productName: string;
}

export function ProductSections({ productName }: ProductSectionsProps) {
  const navigate = useNavigate();

  return (
    <>
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-text mb-6">
              Bulk Supply & Delivery
            </h2>
            <p className="text-lg text-text-muted">
              We support commercial fertilizer requirements with:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Factory, text: 'Bulk / wholesale quantities only' },
              { icon: CheckCircle2, text: 'Competitive pricing based on volume' },
              { icon: CheckCircle2, text: 'Consistent product availability' },
              { icon: Globe2, text: 'Global shipping and logistics coordination' },
              { icon: Truck, text: 'Reliable supply for ongoing agricultural operations' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background border border-border p-6 rounded-2xl flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-text font-medium mt-3">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-10 rounded-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase mb-6">
                <Users className="w-4 h-4" />
                <span>Who This Page Is For</span>
              </div>
              <h3 className="text-2xl font-bold text-text mb-6">We work with:</h3>
              <ul className="space-y-4">
                {['Farms', 'Importers', 'Distributors', 'Agricultural companies'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-destructive/5 border border-destructive/20 p-10 rounded-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-semibold tracking-wide uppercase mb-6">
                <AlertCircle className="w-4 h-4" />
                <span>Important Notice</span>
              </div>
              <h3 className="text-2xl font-bold text-text mb-6">We do not offer:</h3>
              <ul className="space-y-4">
                {['Retail sales', 'Job or employment opportunities'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-muted text-lg">
                    <AlertCircle className="w-5 h-5 text-destructive/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto bg-background border border-border rounded-[3rem] p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-text mb-6">
                Request Product Details & Pricing
              </h2>
              <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto">
                Contact us to receive:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-left">
                {[
                  'Product specifications',
                  'Bulk pricing',
                  'Minimum order quantities',
                  'Delivery timelines'
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-text">{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                onClick={() => navigate('/contact', { state: { product: productName } })}
                className="w-full sm:w-auto h-14 px-8 text-lg group"
              >
                Request Quote
                <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </>
  );
}
