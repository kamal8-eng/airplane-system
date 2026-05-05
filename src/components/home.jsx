import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAmericas, FaPlaneDeparture, FaRegClock, FaAward, FaShieldAlt, FaLeaf } from "react-icons/fa";

export default function Home() {
 
  const images = {
    hero: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000",
    cabin: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1000",
    dining: "https://images.unsplash.com/photo-1540339832862-4745299807c3?auto=format&fit=crop&q=80&w=1000",
    lounge: "https://images.unsplash.com/photo-1520444451381-807953258836?auto=format&fit=crop&q=80&w=1000",
    dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
    london: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
    tokyo: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80&w=800",
    beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    santorini: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800",
  };

  return (
    <div className="bg-white text-slate-900 selection:bg-blue-100">
      
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={images.hero} 
            alt="SkyJet Plane Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-white" />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl mb-4"
          >
            The World Awaits.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto"
          >
            Experience seamless travel with SkyJet Airlines. From sunset departures to sunrise arrivals, we make every mile feel like home.
          </motion.p>
        </div>
      </section>

      
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100"
          >
            <img 
              src={images.cabin} 
              alt="Luxury Cabin" 
              className="w-full h-[550px] object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Premium Seating</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Unmatched Comfort</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our cabins are designed for the modern traveler. Enjoy extra legroom, 
              ergonomic seating, and ambient lighting that adjusts to your natural 
              circadian rhythm.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:order-2 rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img 
              src={images.dining} 
              alt="Gourmet Dining" 
              className="w-full h-[550px] object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:order-1"
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Culinary Arts</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Gourmet Dining</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Savor the flavors of the world at 30,000 feet. Our seasonal menus are 
              crafted by world-class chefs using fresh, locally-sourced ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <ValueCard icon={<FaShieldAlt />} title="Safety First" desc="Maintaining the highest global standards for every takeoff and landing." />
          <ValueCard icon={<FaLeaf />} title="Eco-Conscious" desc="Reducing our carbon footprint through sustainable aviation fuels." />
          <ValueCard icon={<FaRegClock />} title="99% Punctuality" desc="Respecting your time with industry-leading on-time performance." />
        </div>
      </section>

     
      <section className="bg-slate-900 py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-white mb-6">SkyJet <span className="text-blue-400">Rewards</span></h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Join our exclusive circle of travelers. Earn miles on every flight and enjoy 
              priority access across the globe.
            </p>
            <div className="space-y-6">
              <RewardFeature icon={<FaAward />} text="Platinum tier status after 10 flights" />
              <RewardFeature icon={<FaGlobeAmericas />} text="Unlimited lounge access worldwide" />
            </div>
          </motion.div>
          <div className="relative">
             <img 
              src={images.lounge} 
              className="rounded-3xl shadow-2xl"
              alt="Premium Lounge"
            />
          </div>
        </div>
      </section>

     
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black mb-12 border-l-4 border-blue-600 pl-6">The SkyJet Journal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <JournalPost 
              img={images.dubai} 
              category="Travel" title="48 Hours in Dubai" 
              desc="A guide to the most luxurious stay in the city of gold."
            />
            <JournalPost 
              img={images.paris} 
              category="Culture" title="Paris: Beyond the Tower" 
              desc="Discovering the hidden cafés and local art scenes."
            />
            <JournalPost 
              img={images.london} 
              category="Adventure" title="London's Night Scene" 
              desc="The best rooftops and hidden gems for an evening out."
            />
          </div>
        </div>
      </section>

     
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Discover Destinations</h2>
          </div>
          <div className="columns-1 md:columns-3 gap-8 space-y-8">
            <GalleryImage src={images.tokyo} alt="Tokyo" />
            <GalleryImage src={images.beach} alt="Beach" />
            <GalleryImage src={images.santorini} alt="Santorini" />
          </div>
        </div>
      </section>
    </div>
  );
}


function ValueCard({ icon, title, desc }) {
  return (
    <div className="p-8">
      <div className="text-blue-600 text-3xl mb-4 flex justify-center">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-slate-500">{desc}</p>
    </div>
  );
}

function JournalPost({ img, category, title, desc }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-2xl mb-4 h-64 shadow-md">
        <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt={title} />
      </div>
      <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">{category}</span>
      <h4 className="text-xl font-bold mt-2 mb-2 group-hover:text-blue-600 transition">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function RewardFeature({ icon, text }) {
  return (
    <div className="flex items-center gap-4 text-white">
      <div className="text-blue-400 text-2xl">{icon}</div>
      <p className="text-lg font-medium">{text}</p>
    </div>
  );
}

function GalleryImage({ src, alt }) {
  return (
    <motion.div whileHover={{ y: -10 }} className="rounded-[2rem] overflow-hidden shadow-lg">
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </motion.div>
  );
}