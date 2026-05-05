import { createContext, useContext, useState } from "react";

const FlightContext = createContext();

export function FlightProvider({ children }) {
  const [flight, setFlight] = useState(null);
  return (
    <FlightContext.Provider value={{ flight, setFlight }}>
      {children}
    </FlightContext.Provider>
  );
}

export function useFlight() {
  return useContext(FlightContext);
}
