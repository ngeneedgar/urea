import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';

export function ThankYou() {
  useEffect(() => {
    // Add the Google Ads conversion event snippet programmatically
    const script = document.createElement('script');
    script.text = `gtag('event', 'conversion', { 'send_to': 'AW-18029622332/7Y-sCIWAsowcELzomJVD', 'value': 1.0, 'currency': 'CAD' });`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass p-12 rounded-3xl text-center max-w-lg border border-border"
      >
        <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-heading font-bold text-text mb-4">Message Received!</h1>
        <p className="text-text-muted mb-8">Thank you for contacting NovaFerti. We have received your inquiry and will be in touch shortly.</p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </motion.div>
    </div>
  );
}
