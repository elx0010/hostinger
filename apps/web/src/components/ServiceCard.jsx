
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServiceCard({ icon: Icon, title, description, index, reverse = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div className={`${reverse ? 'md:order-2' : ''}`}>
        <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-primary/20 shadow-sm">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 hover:gap-3 transition-all duration-300"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className={`${reverse ? 'md:order-1' : ''}`}>
        <div className="bg-gradient-to-br from-primary/5 via-secondary/30 to-background rounded-2xl p-12 flex items-center justify-center min-h-[280px] border border-primary/10 shadow-inner">
          <Icon className="w-32 h-32 text-primary/20 drop-shadow-sm" />
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
