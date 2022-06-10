import { Anchor, Container, Grid, Group, Title } from "@mantine/core";
import AircraftList from "components/AircraftList";
import Copyright from "components/Copyright";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import {
  IconPlaneArrival,
  IconPlaneDeparture,
  IconPlaneInflight,
} from "@tabler/icons";
import localforage from "localforage";
import { useState, useEffect, useRef } from "react";

interface IAircraftList {
  id: string;
  callsign: string;
}

export default function Home() {
  const isMountedRef = useRef(true);
  const [departures, setDepartures] = useState<Array<IAircraftList>>([]);
  const [arrivals, setArrivals] = useState<Array<IAircraftList>>([]);
  const [overflights, setOverflights] = useState<Array<IAircraftList>>([]);

  useEffect(
    () => () => {
      isMountedRef.current = false;
    },
    []
  );

  useEffect(() => {
    localforage.getItem<Array<IAircraftList>>("departures", (_err, value) => {
      if (value != null && isMountedRef.current) {
        setDepartures(value);
      }
    });

    localforage.getItem<Array<IAircraftList>>("arrivals", (_err, value) => {
      if (value != null && isMountedRef.current) {
        setArrivals(value);
      }
    });

    localforage.getItem<Array<IAircraftList>>("overflights", (_err, value) => {
      if (value != null && isMountedRef.current) {
        setOverflights(value);
      }
    });
  }, []);

  useEffect(() => {
    localforage.setItem("departures", departures);
  }, [departures]);

  useEffect(() => {
    localforage.setItem("arrivals", arrivals);
  }, [arrivals]);

  useEffect(() => {
    localforage.setItem("overflights", overflights);
  }, [overflights]);

  return (
    <Container>
      <Title order={2}>
        Total: [{departures.length + arrivals.length + overflights.length}]
      </Title>
      <Grid mt="xs">
        <Grid.Col xs={12} md={6}>
          <AircraftList
            title="Departures"
            icon={<IconPlaneDeparture />}
            aircraft={departures}
            saveAircraft={(val: string) => {
              setDepartures([{ id: uuidv4(), callsign: val }, ...departures]);
            }}
            deleteAircraft={(aircraftIndex: number) => {
              const newAircraft = departures.filter(
                (_, i) => aircraftIndex !== i
              );
              setDepartures(newAircraft);
            }}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6}>
          <AircraftList
            title="Arrivals"
            icon={<IconPlaneArrival />}
            aircraft={arrivals}
            saveAircraft={(val: string) => {
              setArrivals([{ id: uuidv4(), callsign: val }, ...arrivals]);
            }}
            deleteAircraft={(aircraftIndex: number) => {
              const newAircraft = arrivals.filter(
                (_, i) => aircraftIndex !== i
              );
              setArrivals(newAircraft);
            }}
          />
        </Grid.Col>
        <Grid.Col xs={12} md={6}>
          <AircraftList
            title="Overflights"
            icon={<IconPlaneInflight />}
            aircraft={overflights}
            saveAircraft={(val: string) => {
              setOverflights([{ id: uuidv4(), callsign: val }, ...overflights]);
            }}
            deleteAircraft={(aircraftIndex: number) => {
              const newAircraft = overflights.filter(
                (_, i) => aircraftIndex !== i
              );
              setOverflights(newAircraft);
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
