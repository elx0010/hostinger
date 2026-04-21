
import React from 'react';
import { motion } from 'framer-motion';

function FeatureCard({ icon: Icon, title, description, number, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-6 items-start bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
    >
      <div className="flex-shrink-0">
        <span className="text-6xl font-bold text-primary/10" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {number}
        </span>
      </div>
      <div className="flex-1">
        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-primary/20 shadow-sm">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default FeatureCard;
