import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaPlane, FaClock, FaMapMarkerAlt, FaSyncAlt } from "react-icons/fa";

export default function FlightStatus() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    
    
    setTimeout(() => {
      setResults({
        flightNum: searchQuery.toUpperCase() || "SJ-442",
        status: "On Time",
        origin: "Lagos (LOS)",
        destination: "London (LHR)",
        departure: "14:30",
        arrival: "20:45",
        terminal: "T3",
        gate: "A12"
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
       
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-2">Flight Status</h1>
          <p className="text-slate-500">Track real-time arrivals and departures across the SkyJet network.</p>
        </div>


        <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-100 mb-10">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaPlane className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
              <input 
                type="text" 
                placeholder="Enter Flight Number (e.g. SJ-442)" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition uppercase"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-200"
            >
              {loading ? <FaSyncAlt className="animate-spin" /> : <FaSearch />}
              Track Flight
            </button>
          </form>
        </div>


        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-slate-400 font-medium">Fetching real-time data...</p>
            </motion.div>
          ) : results ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
            >
              {/* STATUS BAR */}
              <div className="bg-green-500 text-white px-8 py-3 flex justify-between items-center">
                <span className="font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <FaClock /> {results.status}
                </span>
                <span className="text-xs opacity-80 italic">Updated 1 min ago</span>
              </div>

              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
                  <div className="text-center md:text-left">
                    <h3 className="text-4xl font-black text-slate-900">{results.origin.split(' ')[0]}</h3>
                    <p className="text-slate-400 font-bold tracking-tighter">{results.origin.split(' ')[1]}</p>
                    <p className="text-2xl font-bold text-blue-600 mt-2">{results.departure}</p>
                  </div>

                  <div className="flex flex-col items-center flex-1 px-10">
                    <div className="w-full flex items-center gap-4">
                      <div className="h-[2px] flex-1 bg-slate-100"></div>
                      <FaPlane className="text-blue-600 rotate-90" />
                      <div className="h-[2px] flex-1 bg-slate-100"></div>
                    </div>
                    <p className="mt-4 text-xs font-black text-slate-300 uppercase tracking-[0.3em]">{results.flightNum}</p>
                  </div>

                  <div className="text-center md:text-right">
                    <h3 className="text-4xl font-black text-slate-900">{results.destination.split(' ')[0]}</h3>
                    <p className="text-slate-400 font-bold tracking-tighter">{results.destination.split(' ')[1]}</p>
                    <p className="text-2xl font-bold text-blue-600 mt-2">{results.arrival}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-50">
                  <StatusDetail label="Terminal" value={results.terminal} />
                  <StatusDetail label="Gate" value={results.gate} />
                  <StatusDetail label="Aircraft" value="Boeing 787" />
                  <StatusDetail label="Baggage" value="Belt 4" />
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-slate-100/50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
              <FaMapMarkerAlt className="text-4xl text-slate-200 mx-auto mb-4" />
              <p className="text-slate-400">Enter a flight number to see detailed status information.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function StatusDetail({ label, value }) {
  return (
    <div className="text-center md:text-left">
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-lg font-bold text-slate-800">{value}</p>
    </div>
  );
}