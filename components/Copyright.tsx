import { Text } from "@mantine/core";
import pkg from "package.json";

export default function Copyright() {
  return (
    <Text color="dimmed" size="xs">
      Copyright © 2021
      {new Date().getFullYear() > 2021 && `-${new Date().getFullYear()}`}{" "}
      <Text
        variant="link"
        size="xs"
        component="a"
        href="https://github.com/daveroverts/cpt-movements-tracker"
        target="_blank"
        rel="noopener noreferrer"
      >
        CPT movements tracker v{pkg.version} by Dave Roverts (1186831)
      </Text>
    </Text>
  );
}
