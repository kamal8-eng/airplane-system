import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeadset, FaPlane } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
  
      <section className="bg-slate-900 py-20 px-6 text-center text-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-black mb-4 uppercase tracking-tighter">Get in Touch</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Whether you're planning a journey or need assistance with an existing booking, 
            our global support team is here to help you 24/7.
          </p>
        </motion.div>
       
        <div className="absolute top-10 right-10 text-white/5 text-9xl -rotate-12">
          <FaPlane />
        </div>
      </section>

    
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          
        
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            
            <ContactCard 
              icon={<FaHeadset />} 
              title="Customer Support" 
              detail="+1 (800) SKY-JET-01" 
              subDetail="Available 24/7 for all inquiries."
            />
            <ContactCard 
              icon={<FaEnvelope />} 
              title="Email Us" 
              detail="support@skyjet.com" 
              subDetail="Expect a response within 12 hours."
            />
            <ContactCard 
              icon={<FaMapMarkerAlt />} 
              title="Global Headquarters" 
              detail="SkyJet Plaza, Terminal 5" 
              subDetail="London Heathrow, UK"
            />
          </div>

       
          <div className="lg:col-span-2 bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl text-green-500 mb-6 flex justify-center">✅</div>
                <h3 className="text-3xl font-bold mb-2">Message Received!</h3>
                <p className="text-slate-500">One of our travel specialists will reach out to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-600 font-bold underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput label="Full Name" type="text" placeholder="John Doe" required />
                  <FormInput label="Email Address" type="email" placeholder="john@example.com" required />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput label="Booking Reference" type="text" placeholder="SJ-12345 (Optional)" />
                  <div className="flex flex-col">
                    <label className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Inquiry Type</label>
                    <select className="p-4 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none transition">
                      <option>General Inquiry</option>
                      <option>Booking & Reservations</option>
                      <option>Baggage Assistance</option>
                      <option>SkyJet Rewards</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    rows="5" 
                    className="p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </div>

        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tighter">Our Global Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <OfficeLocation city="New York" address="1221 Avenue of the Americas" />
            <OfficeLocation city="Dubai" address="Emaar Square, Building 4" />
            <OfficeLocation city="Tokyo" address="1-chōme-2-1 Yurakucho" />
            <OfficeLocation city="Lagos" address="Heritage Place, Alfred Rewane Rd" />
          </div>
        </div>
      </section>
    </div>
  );
}


function ContactCard({ icon, title, detail, subDetail }) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-blue-600 font-medium">{detail}</p>
        <p className="text-slate-400 text-sm">{subDetail}</p>
      </div>
    </div>
  );
}

function FormInput({ label, type, placeholder, required = false }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        required={required}
        className="p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
      />
    </div>
  );
}

function OfficeLocation({ city, address }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <h4 className="text-xl font-bold mb-2">{city}</h4>
      <p className="text-slate-500 text-sm">{address}</p>
    </div>
  );
}