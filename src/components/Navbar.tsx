import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Leaf } from 'lucide-react';
import { Button } from './Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Products',
    path: '/products',
    dropdown: [
      { name: 'Compound NPK', path: '/products/npk' },
      { name: 'Urea Fertilizers', path: '/products/urea' },
      { name: 'DAP Fertilizers', path: '/products/dap' },
      { name: 'Ammonium Sulfate', path: '/products/ammonium-sulfate' },
      { name: 'Monoammonium Phosphate (MAP)', path: '/products/map' },
      { name: 'Calcium Ammonium Nitrate (CAN)', path: '/products/can' },
      { name: 'Ammonium Nitrate', path: '/products/ammonium-nitrate' },
      { name: 'Potash (KCl)', path: '/products/potash' },
    ],
  },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={isScrolled || isMobileMenuOpen ? "https://i.postimg.cc/hPfVvdTs/Nova-logo-02.png" : "https://i.postimg.cc/3Nwmgy6T/Nova-logo-04.png"} 
            alt="NovaFerti Logo" 
            className="h-10 w-auto transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              {link.dropdown ? (
                <Link 
                  to={link.path} 
                  onClick={(e) => {
                    if (location.pathname === '/' && link.path.startsWith('/#')) {
                      e.preventDefault();
                      const id = link.path.substring(2);
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`flex items-center gap-1 font-medium transition-colors py-2 ${isScrolled ? 'text-text-muted hover:text-secondary' : 'text-white/80 hover:text-white'}`}
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>
              ) : (
                <Link
                  to={link.path}
                  className={`font-medium transition-colors py-2 relative ${isScrolled ? 'text-text-muted hover:text-secondary' : 'text-white/80 hover:text-white'}`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className={`absolute left-0 bottom-0 w-full h-0.5 ${isScrolled ? 'bg-secondary' : 'bg-white'}`}
                    />
                  )}
                </Link>
              )}

              {/* Mega Dropdown */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-64 glass rounded-2xl shadow-xl overflow-hidden mt-2"
                    >
                      <div className="p-2 flex flex-col">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="px-4 py-3 rounded-xl hover:bg-secondary/10 transition-colors font-medium text-sm"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact">
            <Button size="sm" className={!isScrolled ? 'bg-white text-primary hover:bg-white/90 px-6 py-2 h-auto' : 'px-6 py-2 h-auto'}>Order Now</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${isScrolled || isMobileMenuOpen ? 'text-text-muted' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="flex flex-col gap-2">
                      <Link 
                        to={link.path} 
                        onClick={(e) => {
                          if (location.pathname === '/' && link.path.startsWith('/#')) {
                            e.preventDefault();
                            const id = link.path.substring(2);
                            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className="font-semibold text-text-muted uppercase text-xs tracking-wider hover:text-secondary transition-colors"
                      >
                        {link.name}
                      </Link>
                      <div className="flex flex-col gap-2 pl-4 border-l-2 border-border">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="text-lg font-medium py-1"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link to={link.path} className="text-lg font-medium block py-2">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/contact" className="mt-4">
                <Button className="w-full">Order Now</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
