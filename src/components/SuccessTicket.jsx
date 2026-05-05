import { useFlight } from "../context/FlightContext.jsx";
import { useNavigate } from "react-router-dom";
import { Check, Plane, QrCode, Home, Download } from "lucide-react";

export default function SuccessTicket() {
  const { flight } = useFlight();
  const navigate = useNavigate();

  
  if (!flight) return <div className="p-20 text-center"><button onClick={() => navigate("/")}>Go Home</button></div>;

  return (
    <div className="min-h-screen bg-indigo-600 p-6 flex flex-col items-center justify-center font-sans">
   
      <div className="mb-8 text-center">
        <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <Check className="text-white" size={32} />
        </div>
        <h1 className="text-3xl font-black text-white italic tracking-tighter">YOU'RE ALL SET!</h1>
        <p className="text-indigo-100">Your trip to {flight.destination} is confirmed.</p>
      </div>


      <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Boarding Pass</span>
            <Plane size={20} className="text-indigo-600" />
          </div>

          <div className="flex justify-between items-center gap-4">
            <div>
              <p className="text-3xl font-black text-slate-800">LHR</p>
              <p className="text-[10px] text-slate-400 uppercase">London</p>
            </div>
            <div className="flex-1 border-b-2 border-dashed border-slate-200 relative mb-2">
               <Plane size={14} className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-slate-300" />
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-slate-800 uppercase">{flight.destination.substring(0, 3)}</p>
              <p className="text-[10px] text-slate-400 uppercase">{flight.destination}</p>
            </div>
          </div>
        </div>


        <div className="relative flex items-center">
          <div className="absolute -left-3 w-6 h-6 bg-indigo-600 rounded-full"></div>
          <div className="w-full border-t-2 border-dashed border-slate-100 mx-4"></div>
          <div className="absolute -right-3 w-6 h-6 bg-indigo-600 rounded-full"></div>
        </div>

        
        <div className="p-6 bg-slate-50">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Passenger</p>
              <p className="text-sm font-bold text-slate-800">Sky Voyager</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Gate</p>
              <p className="text-sm font-bold text-slate-800">B22</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Seat</p>
              <p className="text-sm font-bold text-slate-800">12A</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Price</p>
              <p className="text-sm font-bold text-slate-800">${flight.price}.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-200">
            <QrCode size={100} className="text-slate-800 mb-2" />
            <p className="text-[10px] font-mono text-slate-400">SKY-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
        </div>
      </div>

   
      <div className="flex gap-4 mt-8 w-full max-w-sm">
        <button 
          onClick={() => navigate("/")}
          className="flex-1 bg-white/10 hover:bg-white/20 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 backdrop-blur-sm transition-all"
        >
          <Home size={18} />
          Home
        </button>
        <button 
          className="flex-1 bg-white text-indigo-600 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-slate-50 transition-all"
        >
          <Download size={18} />
          Save PDF
        </button>
      </div>
    </div>
  );
}