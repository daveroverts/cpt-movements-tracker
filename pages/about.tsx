import { Button, Container, List, Text, Title } from "@mantine/core";
import Copyright from "components/Copyright";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function About() {
  return (
    <>
      <NextSeo
        title="About"
        description="This tool was created to better keep track of aircraft that visited a CPT."
      />
      <Container>
        <Title order={2}>About</Title>
        <Text mt="xs">
          This tool was created to better keep track of aircraft that visited a
          CPT. There are 3 lists that can be filled with aircraft, 1 for
          departures, 1 for arrivals, and 1 for overflights. Each list has its
          own counter, and both are used in the total that can be viewed at the
          top.
        </Text>
        <Text mt="xs">
          Good to know: Both lists are stored within your browser&lsquo;s
          IndexedDB or LocalStorage, so even if you refresh the page, you still
          have all data.
        </Text>

        <Title mt="xl" order={3}>
          Example usage
        </Title>

        <List mt="xs">
          <List.Item>
            When an aicraft calls up for example IFR clearance, you type in the
            callsign in the Departures list, and press Enter. Now the aicraft is
            added as an departure.
          </List.Item>

          <List.Item>
            When an aircraft calls on final, you type in the callsign in the
            Arrivals list, and press Enter. Now the aicraft is added as an
            arrival.
          </List.Item>
        </List>

        <Link href="/" passHref>
          <Button component="a" my="xl">
            Go to the main page
          </Button>
        </Link>

        <Copyright />
      </Container>
    </>
  );
}
