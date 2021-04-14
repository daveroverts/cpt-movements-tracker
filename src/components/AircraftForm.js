import { TextField } from "@material-ui/core";
import { useState } from "react";

export default function AircraftForm({ saveAircraft }) {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const trimmedValue = value.trim();
        if (trimmedValue.length > 0) {
          saveAircraft(value);
          setValue("");
        }
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add aircraft"
        margin="normal"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </form>
  );
}
