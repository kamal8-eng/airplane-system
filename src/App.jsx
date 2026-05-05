import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FlightProvider } from "./context/FlightContext.jsx";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./components/home.jsx";
import Flights from "./components/flight.jsx";
// import Booking from "./components/booking.jsx";
import Contact from "./components/contact.jsx";
import Destinations from "./components/destination.jsx";
import FlightStatus from "./components/flightstatus.jsx";
import CheckInPage from "./components/checkin.jsx";
import BookingSummary from "./components/BookingSummary.jsx";
import SuccessTicket from "./components/SuccessTicket.jsx";
function App() {
  return (
    <FlightProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          {/* <Route path="/bookings" element={<Booking />} /> */}
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/flight-status" element={<FlightStatus />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/check-in" element={<CheckInPage />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
          <Route path="/success" element={<SuccessTicket />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FlightProvider>
  );
}

export default App;
