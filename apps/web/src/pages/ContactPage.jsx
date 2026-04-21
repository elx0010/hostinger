
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label.jsx';
import { useToast } from '@/hooks/use-toast.js';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  propertyAddress: z.string().min(5, 'Please enter your property address'),
  propertyType: z.string().min(2, 'Please specify property type'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form data:', data);
    
    toast({
      title: 'Message sent',
      description: 'We will contact you within 24 hours.'
    });
    
    reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office location',
      content: '3750 S Las Vegas Blvd\nLas Vegas, NV 89109'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '(702) 555-0147'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@vegaspremier.com'
    },
    {
      icon: Clock,
      title: 'Business hours',
      content: 'Mon-Fri: 8am - 6pm\nSat: 9am - 2pm\nSun: Closed'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Vegas Premier Properties</title>
        <meta name="description" content="Get in touch with Vegas Premier Properties for a free rental analysis. Call (702) 555-0147 or fill out our contact form. We respond within 24 hours." />
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
              Get your free rental analysis
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schedule a consultation to discuss your property management needs. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-card-foreground">Full name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        className="mt-2 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-card-foreground">Email address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="mt-2 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-card-foreground">Phone number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(702) 555-0123"
                        className="mt-2 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="propertyType" className="text-card-foreground">Property type</Label>
                      <Input
                        id="propertyType"
                        type="text"
                        placeholder="Single-family, Condo, Townhome"
                        className="mt-2 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                        {...register('propertyType')}
                      />
                      {errors.propertyType && (
                        <p className="text-sm text-destructive mt-1">{errors.propertyType.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="propertyAddress" className="text-card-foreground">Property address</Label>
                    <Input
                      id="propertyAddress"
                      type="text"
                      placeholder="123 Main St, Las Vegas, NV 89101"
                      className="mt-2 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                      {...register('propertyAddress')}
                    />
                    {errors.propertyAddress && (
                      <p className="text-sm text-destructive mt-1">{errors.propertyAddress.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-card-foreground">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your property management needs..."
                      rows={6}
                      className="mt-2 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-primary text-primary-foreground hover:brightness-110 transition-all duration-300 active:scale-[0.98] px-8 py-6 text-lg rounded-xl font-semibold shadow-lg hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-muted/50 rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Quick response guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours during business days. For urgent matters, please call our office directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
