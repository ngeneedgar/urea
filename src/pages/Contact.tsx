import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Building2, Package, Globe2 } from 'lucide-react';
import { Button } from '../components/Button';

export function Contact() {
  useEffect(() => {
    document.title = 'Contact Bulk Fertilizer Supplier | Request Pricing';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact us to request bulk fertilizer pricing, product specifications, and delivery details. Business inquiries only.');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', 'Contact us to request bulk fertilizer pricing, product specifications, and delivery details. Business inquiries only.');
      document.head.appendChild(metaDescription);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="py-24 bg-card border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-text mb-6"
          >
            Request Bulk <span className="text-gradient">Fertilizer Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-text-muted leading-relaxed"
          >
            Contact NovaFerti to request pricing, product specifications, and supply availability for commercial fertilizer orders.
            <br /><br />
            <strong className="text-text font-medium border-b-2 border-primary/20 inline-block px-2">Business inquiries only. No retail sales or employment opportunities.</strong>
          </motion.p>
        </div>
      </section>

      {/* Intro & Form */}
      <section className="py-24 relative bg-background">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-card border border-border p-8 md:p-12 rounded-3xl text-center md:text-left">
              <h3 className="text-2xl font-bold text-text mb-6">Provide Your Requirements</h3>
              <p className="text-text-muted mb-8 text-lg">To help us respond quickly, please include:</p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-text font-medium">
                <li className="flex flex-col items-center md:items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Package className="w-7 h-7" />
                  </div>
                  <span className="text-center md:text-left">Product(s) required<br/><span className="text-sm text-text-muted font-normal">(e.g., Urea 46%, NPK, DAP, Potassium Chloride)</span></span>
                </li>
                <li className="flex flex-col items-center md:items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <span className="text-center md:text-left">Required bulk<br/><span className="text-sm text-text-muted font-normal">quantities</span></span>
                </li>
                <li className="flex flex-col items-center md:items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Globe2 className="w-7 h-7" />
                  </div>
                  <span className="text-center md:text-left">Delivery location<br/><span className="text-sm text-text-muted font-normal">or destination port</span></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">
            
            {/* Left Col - Context */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-10"
            >
              <img 
                src="https://i.postimg.cc/Cx8S6Jxb/contact.jpg" 
                alt="NovaFerti Global Reach" 
                className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-xl text-text leading-relaxed">
                  We respond to inquiries from farms, distributors, importers, and agricultural businesses seeking reliable bulk fertilizer supply.
                </p>
                <p className="text-lg text-text-muted leading-relaxed mt-4">
                  If you are looking to source fertilizers in commercial quantities, submit your request and our team will respond with relevant details.
                </p>
              </div>

            </motion.div>

            {/* Right Col - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col gap-8"
            >
              {/* Strict Filter Note */}
              <div className="bg-secondary/10 border border-secondary/20 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-secondary mb-4">Important Notice</h3>
                <p className="text-text-muted mb-4 font-medium">This contact form is strictly for bulk fertilizer inquiries.</p>
                <p className="text-text-muted mb-2">We do not respond to:</p>
                <ul className="text-text font-medium space-y-1">
                  <li>• Job applications</li>
                  <li>• Employment requests</li>
                  <li>• Retail or small-quantity inquiries</li>
                </ul>
              </div>

              <div className="glass p-8 md:p-10 rounded-3xl border border-border">
                <h2 className="text-3xl font-heading font-bold text-text mb-8">Submit Your Inquiry</h2>
              <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
                <input type="hidden" name="access_key" value="e90167bf-95f0-44aa-b4f6-0fbf886c0596" />
                <input type="hidden" name="redirect" value={window.location.origin + '/thank-you'} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-text-muted">Full Name</label>
                    <input type="text" id="name" name="name" required className="bg-background border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="John Doe" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-medium text-text-muted">Company Name</label>
                    <input type="text" id="company" name="company" className="bg-background border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Company Ltd." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-text-muted">Email Address</label>
                    <input type="email" id="email" name="email" required className="bg-background border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="john@company.com" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-text-muted">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="bg-background border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="quantity" className="text-sm font-medium text-text-muted">Quantity</label>
                    <input type="text" id="quantity" name="quantity" required className="bg-background border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="e.g. 500 MT" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="location" className="text-sm font-medium text-text-muted">Delivery Location</label>
                    <input type="text" id="location" name="delivery_location" required className="bg-background border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="City, Country, or Port" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-muted">Message</label>
                  <textarea id="message" name="message" required rows={5} className="bg-background border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" placeholder="Provide details about the specific products (e.g. NPK, Urea, DAP) and any other requirements..."></textarea>
                </div>
                
                <div className="h-captcha" data-sitekey="f0026176-e53e-4b36-ae9c-aa68820221e6"></div>

                <Button type="submit" size="lg" className="w-full py-4 mt-2 flex items-center justify-center gap-2 text-lg">
                  Submit Inquiry <Send className="w-5 h-5" />
                </Button>
              </form>
              </div>
            </motion.div>

          </div>

          <div className="mt-20 max-w-4xl mx-auto flex flex-col gap-12">
            <div className="text-center pt-12">
              <p className="text-lg text-text-muted">
                All products are supplied in bulk quantities for commercial use only.
              </p>
              <p className="text-xl font-bold text-text mt-2">
                Minimum order: bulk / wholesale volumes.<br />Business inquiries only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
