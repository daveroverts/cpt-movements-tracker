import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default function AircraftForm({ saveAircraft }) {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        saveAircraft(value);
        setValue("");
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
