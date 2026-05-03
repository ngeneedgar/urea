import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

export function ProductCard({ title, description, image, link, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Subtle eco gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />
      </div>
      
      <div className="p-8 relative z-30 bg-card transform -translate-y-4 rounded-t-3xl transition-transform duration-500 group-hover:-translate-y-6">
        <h3 className="text-2xl font-heading font-bold mb-3 text-text group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-text-muted mb-6 line-clamp-2">
          {description}
        </p>
        
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-primary font-semibold group/btn"
        >
          View Products
          <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
