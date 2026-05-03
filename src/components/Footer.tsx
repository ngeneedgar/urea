import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A110D] border-t border-border pt-16 pb-8 relative overflow-hidden">
      {/* Subtle eco gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <img 
                src="https://i.postimg.cc/3Nwmgy6T/Nova-logo-04.png" 
                alt="NovaFerti Logo" 
                className="h-10 w-auto transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-text-muted leading-relaxed">
              Powering sustainable agriculture for a growing world with high-efficiency wholesale fertilizers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-text">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About Us', 'Products', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-text-muted hover:text-secondary transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-text">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-text-muted">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>15602 New Century Drive<br />Gardena, CA 90248</span>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>inquiries@novaferti.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} NovaFerti. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
