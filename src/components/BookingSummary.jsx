import { useFlight } from "../context/FlightContext.jsx";
import { useNavigate } from "react-router-dom";
import { Plane, Calendar, CreditCard, ArrowLeft, CheckCircle } from "lucide-react";
export default function BookingSummary() {
  const { flight } = useFlight();
  const navigate = useNavigate();

  if (!flight) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-gray-500 mb-4">No booking data found.</p>
        <button onClick={() => navigate("/")} className="text-indigo-600 font-bold">Go back to destinations</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden">
      
        <div className="bg-indigo-600 p-8 text-white text-center relative">
          <button 
            onClick={() => navigate(-1)} 
            className="absolute top-6 left-6 hover:bg-indigo-500 p-2 rounded-full transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
            <Plane size={32} />
          </div>
          <h1 className="text-2xl font-bold">Booking Summary</h1>
          <p className="text-indigo-100 text-sm">Review your trip details</p>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-4 mb-8">
            <img src={flight.flag} alt="" className="w-16 h-12 rounded-lg object-cover shadow-sm" />
            <div>
              <h2 className="text-xl font-bold text-slate-800">{flight.destination}</h2>
              <p className="text-slate-400 text-xs tracking-widest uppercase">One-way Flight</p>
            </div>
          </div>

          <div className="space-y-6 border-y border-slate-100 py-6 mb-6">
            <div className="flex justify-between">
              <div className="flex items-center gap-3 text-slate-500">
                <Calendar size={18} className="text-indigo-500" />
                <span className="text-sm font-medium">Flight Date</span>
              </div>
              <span className="text-sm font-bold text-slate-800">{new Date().toLocaleDateString()}</span>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-3 text-slate-500">
                <CheckCircle size={18} className="text-emerald-500" />
                <span className="text-sm font-medium">Flight Number</span>
              </div>
              <span className="text-sm font-bold text-slate-800">SK-8829</span>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 flex justify-between items-center mb-8">
            <span className="text-slate-500 font-medium">Total Amount</span>
            <span className="text-2xl font-black text-indigo-600">$450.00</span>
          </div>

          <button 
            className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl hover:bg-indigo-600 transition-all shadow-lg active:scale-95"
            onClick={() => alert("Redirecting to Payment Gateway...")}
          >
            Confirm & Pay
          </button>
        </div>
      </div>
    </div>
  );
}