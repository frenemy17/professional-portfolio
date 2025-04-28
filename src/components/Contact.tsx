import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    }
    
    const tl = gsap.timeline();
    
    tl.fromTo(
      infoRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }
    )
    .fromTo(
      formRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' },
      "-=0.3"
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-24 px-4 bg-black text-white"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-mono font-bold text-green-400 mb-2">
          <span className="text-cyan-400">&gt;</span> Contact
        </h2>
        <p className="text-gray-400 mb-12 font-mono">Get in touch with me</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div ref={infoRef} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h3 className="text-xl font-mono font-semibold text-cyan-400 mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-green-400 mt-1 mr-4" size={20} />
                <div>
                  <p className="font-mono text-sm text-gray-400">Email</p>
                  <a 
                    href="mailto:hello@example.com" 
                    className="font-mono text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    raikarsiddhanth@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-green-400 mt-1 mr-4" size={20} />
                <div>
                  <p className="font-mono text-sm text-gray-400">Phone</p>
                  <a 
                    href="tel:+1234567890" 
                    className="font-mono text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    +918951332718
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-green-400 mt-1 mr-4" size={20} />
                <div>
                  <p className="font-mono text-sm text-gray-400">Location</p>
                  <p className="font-mono text-gray-300">Karnataka, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <p className="font-mono text-sm text-gray-400 mb-4">Social Profiles</p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/siddhanth-raikar-916a792aa/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-green-400 hover:bg-gray-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://github.com/frenemy17" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-green-400 hover:bg-gray-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form 
            ref={formRef} 
            onSubmit={handleSubmit}
            className="bg-gray-900 p-8 rounded-lg border border-gray-800"
          >
            <h3 className="text-xl font-mono font-semibold text-cyan-400 mb-6">
              Send a Message
            </h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-mono text-sm text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-gray-800 rounded-sm font-mono text-gray-300 focus:border-green-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-mono text-sm text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-gray-800 rounded-sm font-mono text-gray-300 focus:border-green-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-mono text-sm text-gray-400 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-gray-800 rounded-sm font-mono text-gray-300 focus:border-green-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-mono text-sm text-gray-400 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 bg-black border border-gray-800 rounded-sm font-mono text-gray-300 focus:border-green-500 focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-6 w-full py-3 rounded-sm font-mono flex items-center justify-center transition-colors ${
                isSubmitting
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={16} className="ml-2" />
                </>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <p className="mt-4 font-mono text-sm text-green-400 text-center">
                Your message has been sent successfully!
              </p>
            )}
            
            {submitStatus === 'error' && (
              <p className="mt-4 font-mono text-sm text-red-400 text-center">
                There was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;