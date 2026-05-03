import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-card border-b border-border">
        <div className="absolute inset-0 z-0">
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
            <span>Legal</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-text mb-6"
          >
            Privacy <span className="text-gradient">Policy</span>
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              At NovaFerti, we take your privacy seriously. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
            </p>
            
            <h3>Information We Collect</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
            </p>

            <h3>How We Use Your Information</h3>
            <p>
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have questions or comments about this notice, you may email us at contact@novaferti.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
