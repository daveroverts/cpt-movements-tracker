import { ActionIcon, Group, Paper, Table, Text, Title } from "@mantine/core";
import { IconTrash } from "@tabler/icons";
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
      <Text
        component="td"
        style={{
          whiteSpace: "normal",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "90%",
        }}
      >
        {element.callsign}
      </Text>
      <td>
        <Group position="right">
          <ActionIcon
            color="red"
            aria-label="Remove aircraft"
            onClick={() => deleteAircraft(index)}
          >
            <IconTrash />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Paper shadow="md" withBorder p="lg">
      <Group>
        <Title order={3}>{title}</Title>
        <ActionIcon>{icon}</ActionIcon>
        <Text>[{aircraft.length}]</Text>
      </Group>
      <AircraftForm
        saveAircraft={(val: { callsign: string }) => saveAircraft(val.callsign)}
      />

      <Table mt="xs" style={{ tableLayout: "fixed" }} highlightOnHover>
        <tbody>{rows}</tbody>
      </Table>
    </Paper>
  );
}
