import React, { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import "./App.css";
import AircraftForm from "./components/AircraftForm";
import AircraftList from "./components/AircraftList";

function App() {
  const [departures, setDepartures] = useState([]);
  const [arrivals, setArrivals] = useState([]);
  return (
    <Container>
      <Typography variant="h2">CPT Movements Tracker</Typography>

      <Grid container spacing={10}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h3">Departures</Typography>
              <AircraftForm
                saveAircraft={(aircraft) => {
                  const trimmedAircraft = aircraft.trim();
                  if (trimmedAircraft.length > 0) {
                    setDepartures([...departures, trimmedAircraft]);
                  }
                }}
              />
              <AircraftList
                aircraft={departures}
                deleteAircraft={(aircraftIndex) => {
                  const newAircraft = departures.filter(
                    (_, index) => index !== aircraftIndex
                  );
                  setDepartures(newAircraft);
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h3">Arrivals</Typography>
              <AircraftForm
                saveAircraft={(aircraft) => {
                  const trimmedAircraft = aircraft.trim();
                  if (trimmedAircraft.length > 0) {
                    setArrivals([...arrivals, trimmedAircraft]);
                  }
                }}
              />
              <AircraftList
                aircraft={arrivals}
                deleteAircraft={(aircraftIndex) => {
                  const newAircraft = arrivals.filter(
                    (_, index) => index !== aircraftIndex
                  );
                  setArrivals(newAircraft);
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
