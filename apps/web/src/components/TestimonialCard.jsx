
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function TestimonialCard({ name, propertyType, rating = 5, testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card h-full flex flex-col rounded-2xl p-8 shadow-sm border border-border relative overflow-hidden group hover:shadow-lg hover:border-primary/30 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      
      <p className="text-card-foreground leading-relaxed mb-8 italic flex-1 text-lg">
        "{testimonial}"
      </p>
      
      <div className="border-t border-border pt-5 mt-auto">
        <p className="font-semibold text-card-foreground text-lg">{name}</p>
        <p className="text-sm text-primary font-medium tracking-wide">{propertyType}</p>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
