import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Flights() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const country = state?.country;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passengers: 1,
    flightNumber: "",
    departureDate: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/flight-status", { state: { country, flightNumber: formData.flightNumber, departureDate: formData.departureDate } });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold mb-6">Flight Booking Form</h1>
      {country && <p className="mb-4">Destination: {country.name.common}</p>}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full border px-3 py-2 rounded-lg" required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full border px-3 py-2 rounded-lg" required />
        <input type="number" name="passengers" placeholder="Passengers" onChange={handleChange} min={1} max={10} className="w-full border px-3 py-2 rounded-lg" required />
        <input type="text" name="flightNumber" placeholder="Flight Number" onChange={handleChange} className="w-full border px-3 py-2 rounded-lg" required />
        <input type="date" name="departureDate" onChange={handleChange} className="w-full border px-3 py-2 rounded-lg" required />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
