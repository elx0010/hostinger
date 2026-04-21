
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, UserCheck, DollarSign, Wrench, MapPin, Clock, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '@/components/CTAButton.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';

function HomePage() {
  const services = [
    {
      icon: Building2,
      title: 'Property Management',
      description: 'Complete oversight of your rental properties including marketing, tenant relations, and financial reporting. We handle everything so you can focus on growing your portfolio.'
    },
    {
      icon: UserCheck,
      title: 'Tenant Screening',
      description: 'Thorough background checks, credit verification, and employment validation to ensure you get reliable, qualified tenants who pay on time and respect your property.'
    },
    {
      icon: DollarSign,
      title: 'Rent Collection',
      description: 'Automated rent collection with multiple payment options, late fee enforcement, and detailed financial tracking. Get paid on time, every time.'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      description: '24/7 emergency response and preventive maintenance programs with our network of licensed contractors. We protect your investment and keep tenants satisfied.'
    }
  ];

  const features = [
    {
      icon: MapPin,
      title: 'Local expertise',
      description: 'Deep knowledge of Las Vegas neighborhoods, rental markets, and regulations. We know what works in Summerlin, Henderson, and Downtown.'
    },
    {
      icon: Clock,
      title: '24/7 support',
      description: 'Round-the-clock availability for emergencies and tenant issues. Your properties are never left unattended.'
    },
    {
      icon: TrendingUp,
      title: 'Transparent pricing',
      description: 'No hidden fees or surprise charges. Straightforward pricing with detailed monthly statements you can understand.'
    },
    {
      icon: Users,
      title: '487 trusted owners',
      description: 'Join hundreds of property owners who trust us with their investments. Our track record speaks for itself.'
    }
  ];

  const testimonials = [
    {
      name: 'Marcus Chen',
      propertyType: '3-bedroom condo in Summerlin',
      testimonial: 'Switching to Vegas Premier was the best decision I made. They filled my vacancy in 8 days and the tenant has been perfect. Monthly reports are clear and rent is always on time.'
    },
    {
      name: 'Sofia Rodriguez',
      propertyType: 'Luxury townhome near The Strip',
      testimonial: 'I live in California and was worried about managing a Vegas rental remotely. The team handles everything professionally and keeps me informed. Zero stress.'
    },
    {
      name: 'Anika Patel',
      propertyType: 'Single-family home in Henderson',
      testimonial: 'Their maintenance response time is incredible. When my tenant reported a plumbing issue at 11pm, they had someone there within 2 hours. That kind of service protects my investment.'
    },
    {
      name: 'James O\'Connor',
      propertyType: 'Investment property in Downtown',
      testimonial: 'The tenant screening process is thorough. I have had the same reliable tenant for 3 years now. No drama, no late payments, no problems.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Premium Property Management in Las Vegas | Vegas Premier Properties</title>
        <meta name="description" content="Expert property management services in Las Vegas. Tenant screening, rent collection, maintenance, and 24/7 support. Trusted by 487 property owners." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1698350366977-e7f15bf8b685" 
            alt="Las Vegas skyline at sunset"
            className="w-full h-full object-cover mix-blend-luminosity opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Premium property management in Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Expert services that maximize your rental income while minimizing your stress. From tenant screening to 24/7 maintenance, we handle it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton variant="primary" size="lg" asChild>
                <Link to="/contact">Get a free rental analysis</Link>
              </CTAButton>
              <CTAButton variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
                <Link to="/contact">Schedule a consultation</Link>
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete property management services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a successful rental property, handled by experienced professionals
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why property owners choose us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine local market knowledge with proven systems to deliver results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                number={`0${index + 1}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What our clients say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from property owners across Las Vegas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                propertyType={testimonial.propertyType}
                testimonial={testimonial.testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-24 gradient-dark-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to maximize your rental income?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get a free rental analysis and discover how much more you could be earning with professional management
            </p>
            <CTAButton variant="white" size="lg" asChild>
              <Link to="/contact">Schedule your free consultation</Link>
            </CTAButton>
            <p className="text-sm text-blue-200 mt-6 tracking-wide">
              No obligation. Expert advice in 30 minutes.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
