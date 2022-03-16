import { Box, Button, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

interface IAircraftFormProps {
  saveAircraft: Function;
}

export default function AircraftForm(props: IAircraftFormProps) {
  const { saveAircraft } = props;
  const form = useForm({
    initialValues: {
      callsign: "",
    },
  });

  type FormValues = typeof form.values;

  const handleSubmit = (values: FormValues) => {
    if (values.callsign.trim().length > 0) {
      saveAircraft(values);
    }
    form.reset();
  };

  return (
    <Box mx="auto">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Group grow>
          <TextInput required {...form.getInputProps("callsign")} />

          <Button type="submit">Add</Button>
        </Group>
      </form>
    </Box>
  );
}
