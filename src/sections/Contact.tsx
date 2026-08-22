import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { staggerContainer, fadeUp, slideInRight } from '../utils/animations';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
// import emailjs from '@emailjs/browser'; // Note: User needs to install this if enabling real emails

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const phoneNumber = "919940164128";

    const message = `Hello Balamurugan,

I visited your portfolio website and would like to connect.

👤 Name: ${data.name}

📧 Email: ${data.email}

📝 Subject: ${data.subject}

💬 Message:
${data.message}

Regards,
${data.name}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    setSubmitStatus("success");
    reset();

    setTimeout(() => {
      setSubmitStatus("idle");
    }, 5000);
  } catch (error) {
    console.error(error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24">
          
          {/* Left Column - Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <SectionHeading 
              label="// get in touch" 
              title="Let's Build Something Together" 
            />
            
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>
            
            <motion.div variants={fadeUp} className="space-y-5 sm:space-y-6 mb-8 sm:mb-12">
              <div className="flex items-center gap-3.5 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-mono text-muted-foreground mb-0.5 sm:mb-1">Email</div>
                  <a href="mailto:balasabarish098@email.com" className="text-sm sm:text-base text-foreground font-medium hover:text-primary transition-colors break-all">
                    balasabarish098@email.com <span className="text-xs text-muted-foreground ml-2"></span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3.5 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-mono text-muted-foreground mb-0.5 sm:mb-1">Location</div>
                  <div className="text-sm sm:text-base text-foreground font-medium">
                    Tamil Nadu, India
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs sm:text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Open to Work
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex gap-4">
              <a href="https://github.com/Balamurugan200526" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/balamurugan-s-468387337?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input
                    {...register('name')}
                    id="name"
                    type="text"
                    className={`w-full bg-background border rounded-lg px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.name ? 'border-destructive' : 'border-border focus:border-primary'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    className={`w-full bg-background border rounded-lg px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.email ? 'border-destructive' : 'border-border focus:border-primary'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <input
                    {...register('subject')}
                    id="subject"
                    type="text"
                    className={`w-full bg-background border rounded-lg px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.subject ? 'border-destructive' : 'border-border focus:border-primary'
                    }`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className={`w-full bg-background border rounded-lg px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none ${
                      errors.message ? 'border-destructive' : 'border-border focus:border-primary'
                    }`}
                    placeholder="Hello Balamurugan, I'd like to discuss..."
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold rounded-lg px-6 py-4 transition-all hover:bg-primary/90 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-500 text-sm font-medium bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                    <CheckCircle2 className="w-4 h-4" />
                    Message sent successfully!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-destructive text-sm font-medium bg-destructive/10 p-3 rounded-lg border border-destructive/20">
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
