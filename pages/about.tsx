import {
  Button,
  Container,
  Group,
  List,
  ListItem,
  Text,
  Title,
} from "@mantine/core";
import Copyright from "components/Copyright";
import Link from "next/link";

export default function About() {
  return (
    <Container>
      <Group direction="column">
        <Title>CPT Movements Tracker</Title>

        <Group>
          <Text>
            This tool was created to better keep track of aircraft that visited
            a CPT. There are 2 lists that can be filled with aircraft, 1 for
            departures, and 1 for arrivals. Each list has its own counter, and
            both are used in the total that can be viewed at the top.
          </Text>
          <Text>
            Good to know: Both lists are stored within your browser&lsquo;s
            LocalStorage, so even if you refresh the page, you still have all
            data.
          </Text>
        </Group>

        <Title order={2}>Example usage</Title>

        <List>
          <ListItem>
            When an aicraft calls up for example IFR clearance, you type in the
            callsign in the Departures list, and press Enter. Now the aicraft is
            added as an departure.
          </ListItem>

          <ListItem>
            When an aircraft calls on final, you type in the callsign in the
            Arrivals list, and press Enter. Now the aicraft is added as an
            arrival.
          </ListItem>
        </List>

        <Link href="/" passHref>
          <Button component="a">Go to the main page</Button>
        </Link>

        <Copyright />
      </Group>
    </Container>
  );
}
