import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTicketAlt, FaPassport, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function Checkin() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ bookingRef: "", lastName: "" });

  const handleNext = (e) => {
    e.preventDefault();
    if (formData.bookingRef.length > 3) {
      setStep(2);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
      
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
          <StepIndicator active={step >= 1} label="Identity" />
          <StepIndicator active={step >= 2} label="Seat Selection" />
          <StepIndicator active={step >= 3} label="Boarding Pass" />
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
                  <FaTicketAlt />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-800">Online Check-in</h2>
              </div>

              <p className="text-slate-500 mb-8">
                Check-in opens 24 hours before your flight. Please enter your booking reference and last name to begin.
              </p>

              <form onSubmit={handleNext} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Booking Reference</label>
                    <input 
                      type="text" 
                      placeholder="e.g. SKY882" 
                      required
                      className="p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition uppercase"
                      onChange={(e) => setFormData({...formData, bookingRef: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe" 
                      required
                      className="p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-2xl flex gap-4 items-start border border-blue-100">
                  <FaPassport className="text-blue-600 mt-1" />
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Ensure your travel documents are up to date. You may be required to scan your passport at the airport kiosk.
                  </p>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-blue-200 shadow-xl hover:bg-blue-700 transition transform active:scale-95"
                >
                  Retrieve Booking
                </button>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl text-center"
            >
              <h2 className="text-2xl font-bold mb-4">Finding your seat...</h2>
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <p className="text-slate-500">Connecting to SkyJet flight database for {formData.bookingRef}</p>
              
              {/* Simulate a successful find after a moment */}
              <button 
                onClick={() => setStep(3)}
                className="mt-8 px-8 py-3 bg-slate-900 text-white rounded-full font-bold"
              >
                (Demo) Confirm Seat 12A
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-1 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="bg-blue-600 p-8 text-white text-center">
                <FaCheckCircle className="text-5xl mx-auto mb-4" />
                <h2 className="text-3xl font-bold">Check-in Successful!</h2>
                <p className="opacity-80">You're cleared for takeoff, {formData.lastName}.</p>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex justify-between border-b border-dashed pb-4">
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Flight</p>
                    <p className="text-xl font-bold text-blue-600">SJ-202</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 uppercase font-bold">Gate</p>
                    <p className="text-xl font-bold text-slate-800">B22</p>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-50 rounded-2xl text-center">
                  <div className="w-full h-24 bg-white border border-slate-200 rounded flex items-center justify-center">
                    <span className="text-slate-300 font-mono italic">||| |||| || ||||| | |||| |||</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2 font-mono tracking-widest uppercase">Digital Boarding Pass - {formData.bookingRef}</p>
                </div>

                <button 
                  onClick={() => window.print()}
                  className="w-full py-4 border-2 border-slate-200 text-slate-600 font-bold rounded-2xl hover:bg-slate-50 transition"
                >
                  Print Boarding Pass
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        
        <div className="mt-12 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            <FaExclamationTriangle className="text-yellow-500" />
            Having trouble? <span className="text-blue-600 cursor-pointer font-bold underline">Visit a help desk</span>
          </p>
        </div>
      </div>
    </div>
  );
}



function StepIndicator({ active, label }) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-2">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-slate-400 border-2 border-slate-200'}`}>
        {active ? <FaCheckCircle /> : "•"}
      </div>
      <span className={`text-xs font-bold uppercase tracking-widest ${active ? 'text-blue-600' : 'text-slate-400'}`}>{label}</span>
    </div>
  );
}