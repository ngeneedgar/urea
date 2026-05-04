import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { Button } from '../../components/Button';
import { ProductSections } from '../../components/ProductSections';

export function Urea() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background pt-20">
      <section className="pt-12 pb-24 md:pt-16 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Col - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
                <Leaf className="w-4 h-4" />
                <span>Product Information</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-text mb-6">
                Urea 46% Fertilizer
              </h1>
              
              <div className="prose prose-lg prose-invert text-text-muted mb-8">
                <p className="text-xl leading-relaxed text-text">
                  High nitrogen fertilizer widely used for strong plant growth and yield improvement.
                </p>
                <div className="my-6 p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-text font-bold mb-4">Available types:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>Granular Urea 46%</li>
                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div>Prilled Urea 46%</li>
                  </ul>
                </div>
                <p>
                  Ideal for large-scale agricultural applications.
                </p>
              </div>

              <Button size="lg" onClick={() => navigate('/contact', { state: { product: 'Urea 46% Fertilizer' } })} className="group">
                Request Urea Pricing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Right Col - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl border border-border"
            >
              <img
                src="https://i.postimg.cc/rsqqDxD0/UREA_Fertiilizers.webp"
                alt="Urea 46% Fertilizer"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>
      <ProductSections productName="Urea 46% Fertilizer" />
    </div>
  );
}
