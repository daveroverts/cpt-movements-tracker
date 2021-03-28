import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          CPT Movements Tracker
        </Typography>
        <Typography variant="body1" paragraph="true">
          This tool was created to better keep track of aircraft that visited a
          CPT. There are 2 lists that can be filled with aircraft, 1 for
          departures, and 1 for arrivals. Each list has its own counter, and
          both are used in the total that can be viewed at the top.
        </Typography>
        <Typography variant="body1" paragraph="true">
          Good to know: Both lists are stored within your browser's IndexedDB or
          LocalStorage, so even if you refresh the page, you still have all data
        </Typography>
        <Typography variant="h5">Example usage</Typography>
        <Typography variant="body1" paragraph="true">
          <ul>
            <li>
              When an aicraft calls up for example IFR clearance, you type in
              the callsign in the Departures list, and press Enter. Now the
              aicraft is added as an departure
            </li>
            <li>
              When an aircraft calls on final, you type in the callsign in the
              Arrivals list, and press Enter. Now the aicraft is added as an
              arrival
            </li>
          </ul>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/"
        >
          Go to the main page
        </Button>
        <Copyright />
      </Box>
    </Container>
  );
}
