// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useFlight } from "../context/FlightContext.jsx";
// import { useNavigate } from "react-router-dom";

// export default function Booking() {
//   const { flight, setFlight } = useFlight();
//   const navigate = useNavigate();

//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [passengerName, setPassengerName] = useState(flight?.passengerName || "");
//   const [selectedCountry, setSelectedCountry] = useState(flight?.country?.name.common || "");
//   const [departureDate, setDepartureDate] = useState(flight?.departureDate || "");
//   const [flightClass, setFlightClass] = useState(flight?.flightClass || "Economy");
//   const [message, setMessage] = useState("");

//   // Fetch countries
//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get(
//           "https://restcountries.com/v3.1/all?fields=name,cca3"
//         );
//         const sorted = response.data.sort((a, b) =>
//           a.name.common.localeCompare(b.name.common)
//         );
//         setCountries(sorted.slice(0, 200));
//       } catch (err) {
//         setError("Failed to fetch countries");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCountries();
//   }, []);

//   const handleBooking = (e) => {
//     e.preventDefault();
//     if (!passengerName || !selectedCountry || !departureDate) {
//       setMessage("Please fill in all fields.");
//       return;
//     }

//     // Save to context
//     const bookedFlight = {
//       flightNumber: flight?.flightNumber || "SKY" + Math.floor(Math.random() * 1000),
//       passengerName,
//       country: { name: { common: selectedCountry } },
//       departureDate,
//       flightClass
//     };
//     setFlight(bookedFlight);

//     // Navigate to Flight Status
//     navigate("/flight-status");
//   };

//   if (loading) return <p className="p-6 text-center">Loading destinations...</p>;
//   if (error) return <p className="p-6 text-center text-red-600">{error}</p>;

//   return (
//     <div className="min-h-screen bg-blue-50 flex flex-col items-center p-6">
//       <h1 className="text-3xl font-bold mb-6">Book Your Flight</h1>

//       <form
//         onSubmit={handleBooking}
//         className="bg-white shadow-md rounded-lg p-8 w-full max-w-md flex flex-col gap-4"
//       >
//         <div>
//           <label className="block font-semibold mb-1">Destination</label>
//           <select
//             value={selectedCountry}
//             onChange={(e) => setSelectedCountry(e.target.value)}
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           >
//             <option value="">Select a country</option>
//             {countries.map((country) => (
//               <option key={country.cca3} value={country.name.common}>
//                 {country.name.common}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block font-semibold mb-1">Class</label>
//           <select
//             value={flightClass}
//             onChange={(e) => setFlightClass(e.target.value)}
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           >
//             <option value="Economy">Economy</option>
//             <option value="Business">Business</option>
//             <option value="First Class">First Class</option>
//           </select>
//         </div>

//         <div>
//           <label className="block font-semibold mb-1">Passenger Name</label>
//           <input
//             type="text"
//             placeholder="Your full name"
//             value={passengerName}
//             onChange={(e) => setPassengerName(e.target.value)}
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//    
//         <div>
//           <label className="block font-semibold mb-1">Departure Date</label>
//           <input
//             type="date"
//             value={departureDate}
//             onChange={(e) => setDepartureDate(e.target.value)}
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         <button
//           type="submit"
//           className="mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold"
//         >
//           Book Flight
//         </button>

//         {message && <p className="text-green-600 mt-3">{message}</p>}
//       </form>
//     </div>
//   );
// }
