import {
  ActionIcon,
  Group,
  Paper,
  ScrollArea,
  Table,
  Text,
  Title,
} from "@mantine/core";
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
            <Trash />
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

      <ScrollArea type="hover" style={{ maxHeight: 500, overflow: "auto" }}>
        <Table mt="xs" style={{ tableLayout: "fixed" }} highlightOnHover>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
}
