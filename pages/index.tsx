import { Anchor, Container, Grid, Group, Title } from "@mantine/core";
import AircraftList from "components/AircraftList";
import Copyright from "components/Copyright";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { PlaneArrival, PlaneDeparture } from "tabler-icons-react";
import localforage from "localforage";
import { useState, useEffect } from "react";

interface IAircraftList {
  id: string;
  callsign: string;
}

export default function Home() {
  const [departures, setDepartures] = useState<Array<IAircraftList>>([]);
  const [arrivals, setArrivals] = useState<Array<IAircraftList>>([]);

  useEffect(() => {
    localforage.getItem<Array<IAircraftList>>("departures", (_err, value) => {
      if (value != null) {
        setDepartures(value);
      }
    });

    localforage.getItem<Array<IAircraftList>>("arrivals", (_err, value) => {
      if (value != null) {
        setArrivals(value);
      }
    });
  }, []);

  useEffect(() => {
    localforage.setItem("departures", departures);
  }, [departures]);

  useEffect(() => {
    localforage.setItem("arrivals", arrivals);
  }, [arrivals]);

  return (
    <Container>
      <Title>
        CPT Movements Tracker [{departures.length + arrivals.length}]
      </Title>
      <Grid mt="xs">
        <Grid.Col span={6}>
          <AircraftList
            title="Departures"
            icon={<PlaneDeparture />}
            aircraft={departures}
            saveAircraft={(val: string) => {
              setDepartures([...departures, { id: uuidv4(), callsign: val }]);
            }}
            deleteAircraft={(aircraftIndex: number) => {
              const newAircraft = departures.filter(
                (_, i) => aircraftIndex !== i
              );
              setDepartures(newAircraft);
            }}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <AircraftList
            title="Arrivals"
            icon={<PlaneArrival />}
            aircraft={arrivals}
            saveAircraft={(val: string) => {
              setArrivals([...arrivals, { id: uuidv4(), callsign: val }]);
            }}
            deleteAircraft={(aircraftIndex: number) => {
              const newAircraft = arrivals.filter(
                (_, i) => aircraftIndex !== i
              );
              setArrivals(newAircraft);
            }}
          />
        </Grid.Col>
      </Grid>
      <Group my="xl">
        <Link href="/about" passHref>
          <Anchor>Go to the about page</Anchor>
        </Link>
      </Group>
      <Copyright />
    </Container>
  );
}
