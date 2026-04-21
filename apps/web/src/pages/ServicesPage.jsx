
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, UserCheck, DollarSign, Wrench, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '@/components/CTAButton.jsx';

function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: 'Property management',
      description: 'Complete oversight and management of your rental properties from listing to lease renewal.',
      benefits: [
        'Professional property marketing with high-quality photos',
        'Tenant placement and lease agreement preparation',
        'Regular property inspections and condition reports',
        'Detailed monthly financial statements',
        'Lease renewal negotiations and rent adjustments',
        'Move-in and move-out coordination'
      ],
      process: [
        'Initial property assessment and pricing strategy',
        'Professional photography and listing creation',
        'Marketing across multiple platforms',
        'Tenant screening and selection',
        'Lease signing and move-in inspection',
        'Ongoing management and reporting'
      ]
    },
    {
      icon: UserCheck,
      title: 'Tenant screening',
      description: 'Comprehensive background checks to ensure you get reliable, qualified tenants.',
      benefits: [
        'Credit report analysis and score verification',
        'Criminal background checks',
        'Employment and income verification',
        'Rental history and previous landlord references',
        'Eviction history search',
        'Identity verification'
      ],
      process: [
        'Application submission and fee collection',
        'Credit and background check authorization',
        'Employment verification calls',
        'Previous landlord reference checks',
        'Comprehensive report compilation',
        'Recommendation and approval decision'
      ]
    },
    {
      icon: DollarSign,
      title: 'Rent collection',
      description: 'Automated systems and enforcement procedures to ensure consistent cash flow.',
      benefits: [
        'Online payment portal for tenant convenience',
        'Automatic payment reminders',
        'Late fee calculation and enforcement',
        'Direct deposit to your account',
        'Detailed payment tracking and reporting',
        'Delinquency management and collections'
      ],
      process: [
        'Tenant onboarding to payment system',
        'Automated rent due reminders',
        'Payment processing and verification',
        'Late payment follow-up procedures',
        'Monthly financial reconciliation',
        'Year-end tax documentation'
      ]
    },
    {
      icon: Wrench,
      title: 'Maintenance & repairs',
      description: '24/7 emergency response and preventive maintenance to protect your investment.',
      benefits: [
        'Network of licensed, insured contractors',
        '24/7 emergency maintenance hotline',
        'Competitive pricing through vendor relationships',
        'Quality control and work verification',
        'Preventive maintenance programs',
        'Detailed maintenance records'
      ],
      process: [
        'Tenant maintenance request submission',
        'Issue assessment and priority determination',
        'Contractor dispatch and scheduling',
        'Work completion and quality inspection',
        'Invoice review and payment processing',
        'Tenant follow-up and satisfaction check'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Property Management Services | Vegas Premier Properties</title>
        <meta name="description" content="Comprehensive property management services in Las Vegas: tenant screening, rent collection, maintenance, and more. Professional management you can trust." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/30 py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Complete property management services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to run successful rental properties in Las Vegas, handled by experienced professionals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-4">What's included</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Our process</h3>
                  <div className="space-y-4">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm shadow-sm">
                            {i + 1}
                          </div>
                        </div>
                        <p className="text-muted-foreground pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your property management needs
            </p>
            <CTAButton variant="primary" size="lg" asChild>
              <Link to="/contact">Contact us today</Link>
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
