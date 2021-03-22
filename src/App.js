import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import "./App.css";
import AircraftForm from "./components/AircraftForm";
import AircraftList from "./components/AircraftList";

function App() {
  const [departures, setDepartures] = useState([]);
  const [arrivals, setArrivals] = useState([]);
  return (
    <div className="App">
      <Typography component="h2" variant="h2">
        CPT Movements Tracker
      </Typography>


      <Typography component="h3" variant="h3">
        Departures
      </Typography>
      <AircraftForm saveAircraft={(aircraft) => {
        const trimmedAircraft = aircraft.trim();
        if (trimmedAircraft.length > 0) {
          setDepartures([...departures, trimmedAircraft])
        }
      }} />
      <AircraftList aircraft={departures} deleteAircraft={(aircraftIndex) => {
        const newAircraft = departures.filter((_, index) => index !== aircraftIndex)
        setDepartures(newAircraft)
      }} />
    </div>
  );
}

export default App;
