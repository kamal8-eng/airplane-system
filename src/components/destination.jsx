import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Search, MapPin, Users, Landmark, Plane, Filter } from "lucide-react";
import { useFlight } from "../context/FlightContext.jsx";

export default function Destinations() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRegion, setActiveRegion] = useState("All");

  const navigate = useNavigate();
  const { setFlight } = useFlight();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const { data } = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,currencies,cca3"
        );
        const sorted = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sorted);
        setFiltered(sorted);
      } catch (err) {
        console.error("Error fetching destinations", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  useEffect(() => {
    const result = countries.filter((c) => {
      const matchSearch = c.name.common.toLowerCase().includes(searchTerm.toLowerCase());
      const matchRegion = activeRegion === "All" || c.region === activeRegion;
      return matchSearch && matchRegion;
    });
    setFiltered(result);
  }, [searchTerm, activeRegion, countries]);

  const handleBooking = (country) => {
    setFlight({
      name: country.name.common,
      flag: country.flags.png,
      capital: country.capital?.[0] || "N/A",
      currency: country.currencies ? Object.values(country.currencies)[0]?.name : "USD",
      price: Math.floor(Math.random() * (900 - 300) + 300), // Random placeholder price
    });
    navigate("/booking-summary"); 
  };

  if (loading) return <div className="p-20 text-center animate-pulse text-slate-400">Loading world-class destinations...</div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-indigo-600">
            <Plane className="rotate-45" />
            <span>SKYJET AIRLINE</span>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search by country..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-full border-none focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <Filter size={16} className="text-slate-400 mr-2" />
            {["All", "Africa", "Americas", "Asia", "Europe", "Oceania"].map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeRegion === region 
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" 
                  : "bg-white text-slate-500 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((country) => (
            <div 
              key={country.cca3} 
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {country.region}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">
                  {country.name.common}
                </h3>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-slate-500 text-sm">
                    <MapPin size={16} className="text-indigo-400" />
                    <span className="font-medium">{country.capital?.[0] || "Global City"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 text-sm">
                    <Landmark size={16} className="text-amber-400" />
                    <span className="font-medium truncate">
                      {country.currencies ? Object.values(country.currencies)[0]?.name : "Local Currency"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 text-sm">
                    <Users size={16} className="text-emerald-400" />
                    <span className="font-medium">{country.population.toLocaleString()} Residents</span>
                  </div>
                </div>

                <button
                  onClick={() => handleBooking(country)}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all active:scale-95 group-hover:shadow-lg group-hover:shadow-indigo-100"
                >
                  Book Trip
                  <Plane size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-slate-300 italic">No destinations found in this world...</h2>
          </div>
        )}
      </main>
    </div>
  );
}