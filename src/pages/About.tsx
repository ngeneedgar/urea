import { motion } from 'motion/react';
import { Target, Eye, Leaf, ShieldCheck, Globe, Truck, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-card border-b border-border">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/tgb2GCpV/nova-ferti-factory.jpg"
            alt="About NovaFerti"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase mb-6"
          >
            <Leaf className="w-4 h-4" />
            <span>Who We Are</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-text mb-6 leading-tight"
          >
            Bulk Fertilizer Supply for <span className="text-gradient">Commercial Agriculture</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-4"
          >
            NovaFerti is a supplier of agricultural fertilizers specializing in bulk distribution to farms, importers, and distributors across global markets.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-8"
          >
            We focus on manufacturing and supplying high-demand fertilizers including NPK, Urea, DAP, MAP, CAN, Ammonium nitrate Fertilizer, and Potassium Chloride Fertilizer [Potash], ensuring consistent availability for commercial agricultural operations.
          </motion.p>
        </div>
      </section>

      {/* Core Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <p className="text-2xl text-text leading-relaxed font-heading font-medium mb-12">
            Our business is built around reliable bulk supply, competitive pricing, and efficient delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
            {[
              { icon: Target, text: 'Large-volume fertilizer supply' },
              { icon: ShieldCheck, text: 'Consistent product quality' },
              { icon: Globe, text: 'Competitive wholesale pricing' },
              { icon: Truck, text: 'Reliable global logistics and delivery timelines' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-card p-6 rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium text-text">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-xl text-text-muted leading-relaxed">
            From open-field farming to greenhouse operations and fertigation systems, our products are selected to support efficient nutrient application and strong crop performance at scale.
          </p>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-text mb-12">How We Operate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Supplying at commercial volumes', desc: 'Focusing exclusively on meaningful scale.' },
                { title: 'Maintaining consistent product standards', desc: 'Ensuring predictable quality in every shipment.' },
                { title: 'Delivering on agreed timelines', desc: 'Reliable logistics for timely arrivals.' },
                { title: 'Supporting long-term supply continuity', desc: 'Building partnerships for ongoing supply.' },
              ].map((item, i) => (
                <div key={i} className="bg-background p-8 rounded-3xl border border-border">
                  <h3 className="text-xl font-bold text-text mb-2">{item.title}</h3>
                  <p className="text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buyer-Focused Positioning & Strict Filter */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 bg-card p-10 rounded-3xl border border-border w-full">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-text mb-6">NovaFerti serves:</h2>
              <ul className="text-lg font-medium text-text space-y-3">
                <li>• Farms</li>
                <li>• Importers</li>
                <li>• Distributors</li>
                <li>• Agricultural companies</li>
              </ul>
            </div>

            <div className="flex-1 flex flex-col gap-6 w-full">
              <div className="bg-secondary/10 border border-secondary/20 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-secondary mb-4">Important Notice</h3>
                <p className="text-lg text-text-muted mb-4 font-medium">We operate strictly as a bulk supplier for business clients.</p>
                <p className="text-lg font-bold text-text border-t border-border pt-4">
                  We do not offer retail sales, small-quantity orders, or employment opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-primary text-center">
        <div className="container mx-auto px-4">
          <p className="text-white font-heading font-medium text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed mb-10">
            A dependable source for bulk fertilizer supply, supporting commercial agriculture with consistency and scale.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Request Bulk Pricing
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

