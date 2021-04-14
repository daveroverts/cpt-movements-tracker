import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function AircraftList({ aircraft, deleteAircraft }) {
  return (
    <List>
      {aircraft.map((aircraft, index) => (
        <ListItem key={index.toString()} dense button>
          <ListItemText primary={aircraft} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteAircraft(index);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
