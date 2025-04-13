
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-theme-light-blue/10 rounded-t-3xl">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-8">CONTACT</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-medium mb-6">Drop Me a Message</h3>
            <p className="text-white/80 mb-8">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-theme-light-blue/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <Phone className="w-5 h-5 text-theme-highlight blue-glow" />
                </div>
                <div>
                  <p className="text-white/80">+00 123-456-7890</p>
                  <p className="text-white/80">Mon-Fri 9am-6pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-theme-light-blue/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <Mail className="w-5 h-5 text-theme-highlight blue-glow" />
                </div>
                <div>
                  <p className="text-white/80">hello@gmail.com</p>
                  <p className="text-white/80">Send us your query anytime!</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-theme-light-blue/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-theme-highlight blue-glow" />
                </div>
                <div>
                  <p className="text-white/80">1234 Main St, City Name</p>
                  <p className="text-white/80">Open Monday-Friday</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-theme-dark-blue rounded-lg p-8 border border-theme-light-blue/20">
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-white/80">Name</label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Enter your name" 
                  className="bg-theme-dark-blue border-theme-light-blue/30 focus:border-theme-light-blue"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-white/80">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-theme-dark-blue border-theme-light-blue/30 focus:border-theme-light-blue"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-white/80">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Enter your message" 
                  className="bg-theme-dark-blue border-theme-light-blue/30 focus:border-theme-light-blue min-h-[120px]"
                />
              </div>
              
              <Button className="btn-primary w-full">Send</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
