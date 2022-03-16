import { ActionIcon, Card, Group, Table, Text, Title } from "@mantine/core";
import { Trash } from "tabler-icons-react";
import AircraftForm from "./AircraftForm";

interface IAircraftListProps {
  title: string;
  icon: any;
  aircraft: Array<IAircraftList>;
  saveAircraft: Function;
  deleteAircraft: Function;
}

interface IAircraftList {
  id: string;
  callsign: string;
}

export default function AircraftList(Props: IAircraftListProps) {
  const { title, icon, aircraft, saveAircraft, deleteAircraft } = Props;

  const rows = aircraft.map((element, index) => (
    <tr key={element.id}>
      <td>{element.callsign}</td>
      <td>
        <ActionIcon
          color="red"
          aria-label="Remove aircraft"
          onClick={() => deleteAircraft(index)}
        >
          <Trash />
        </ActionIcon>
      </td>
    </tr>
  ));

  return (
    <Card shadow="sm" withBorder>
      <Group>
        <Title order={2}>{title}</Title>
        <Text>[{aircraft.length}]</Text>
        <ActionIcon>{icon}</ActionIcon>
      </Group>
      <AircraftForm
        saveAircraft={(val: { callsign: string }) => saveAircraft(val.callsign)}
      />

      <Table mt="xs">
        <tbody>{rows}</tbody>
      </Table>
    </Card>
  );
}
