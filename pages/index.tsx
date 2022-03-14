import { Anchor, Container, Group, Title } from "@mantine/core";
import Copyright from "components/Copyright";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Group direction="column">
        <Title>CPT Movements Tracker</Title>

        <Link href="/about" passHref>
          <Anchor>Go to the about page</Anchor>
        </Link>
        <Copyright />
      </Group>
    </Container>
  );
}
