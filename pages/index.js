import React, {useState, useEffect} from 'react';
import localforage from "localforage";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Copyright from '../src/Copyright';
import { Card, CardContent, Divider, Grid } from '@material-ui/core';
import FlightLandIcon from "@material-ui/icons/FlightLand";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import AircraftForm from "../src/components/AircraftForm";
import AircraftList from "../src/components/AircraftList";

export default function Index() {
  const [departures, setDepartures] = useState([]);
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    localforage.getItem('departures', (_err, value) => {
      if (value != null) {
        setDepartures(value)
      }
    })

    localforage.getItem('arrivals', (_err, value) => {
      if (value != null) {
        setArrivals(value)
      }
    })
  }, [])

  useEffect(() => {
    localforage.setItem('departures', departures);
  }, [departures])

  useEffect(() => {
    localforage.setItem('arrivals', arrivals);
  }, [arrivals])

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
        CPT Movements Tracker [{departures.length + arrivals.length}]
        </Typography>
        <Grid container spacing={10}>
        <Grid item md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Departures
                <FlightTakeoffIcon />
                &nbsp;[{departures.length}]
              </Typography>
              <AircraftForm
                saveAircraft={(aircraft) => {
                  const trimmedAircraft = aircraft.trim();
                  if (trimmedAircraft.length > 0) {
                    setDepartures([...departures, trimmedAircraft]);
                  }
                }}
              />
              <Divider />
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
        <Grid item md={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Arrivals
                <FlightLandIcon />
                &nbsp;[{arrivals.length}]
              </Typography>
              <AircraftForm
                saveAircraft={(aircraft) => {
                  const trimmedAircraft = aircraft.trim();
                  if (trimmedAircraft.length > 0) {
                    setArrivals([...arrivals, trimmedAircraft]);
                  }
                }}
              />
              <Divider />
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
        <Copyright />
      </Box>
    </Container>
  );
}