
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '@/components/CTAButton.jsx';

function AboutPage() {
  const team = [
    {
      name: 'Rachel Martinez',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: '15 years of property management experience in Las Vegas. Licensed real estate broker with a passion for helping investors succeed.'
    },
    {
      name: 'David Kim',
      role: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Former hotel operations manager with expertise in maintenance coordination and vendor management across 200+ properties.'
    },
    {
      name: 'Elena Vasquez',
      role: 'Tenant Relations Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Specializes in tenant screening and conflict resolution. Maintains a 96.3% tenant retention rate through proactive communication.'
    }
  ];

  const credentials = [
    {
      icon: Award,
      title: 'Licensed & insured',
      description: 'Nevada real estate broker license #B.1234567. Full liability and errors & omissions insurance.'
    },
    {
      icon: Target,
      title: 'Local expertise',
      description: 'Deep knowledge of Las Vegas neighborhoods, rental markets, and local regulations across all districts.'
    },
    {
      icon: Users,
      title: '487 properties managed',
      description: 'Trusted by property owners across Summerlin, Henderson, Downtown, and surrounding areas.'
    },
    {
      icon: TrendingUp,
      title: '96.3% tenant retention',
      description: 'Industry-leading retention through quality tenant screening and responsive property management.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Vegas Premier Properties</title>
        <meta name="description" content="Learn about Vegas Premier Properties - Las Vegas property management experts with 15 years of experience, managing 487 properties with 96.3% tenant retention." />
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
              Property management built on trust and results
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We have been helping Las Vegas property owners maximize their investments since 2011
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Vegas Premier Properties was founded in 2011 by Rachel Martinez, a licensed real estate broker who saw a gap in the Las Vegas property management market. Too many property owners were frustrated with poor communication, hidden fees, and subpar tenant screening.
                </p>
                <p>
                  We started with a simple mission: provide transparent, professional property management that actually protects and grows our clients' investments. What began as a one-person operation managing 12 properties has grown into a full-service team managing 487 properties across the Las Vegas valley.
                </p>
                <p>
                  Today, we combine local market expertise with modern technology to deliver the kind of service we would want for our own properties. Our clients stay with us because we treat their investments like our own.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" 
                alt="Modern Las Vegas residential property"
                className="rounded-2xl shadow-lg w-full relative z-10 border border-border"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/50 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Our mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To provide property owners with transparent, professional management services that maximize rental income while minimizing stress. We believe in clear communication, proactive maintenance, and treating every property like it's our own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet our team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:border-primary/30 transition-colors"
              >
                <img 
                  src={member.image} 
                  alt={`${member.name}, ${member.role} at Vegas Premier Properties`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why trust us with your investment
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                    <credential.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{credential.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{credential.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to work with us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your property management needs
            </p>
            <CTAButton variant="primary" size="lg" asChild>
              <Link to="/contact">Get in touch</Link>
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
