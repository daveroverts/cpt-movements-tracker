import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      2021{new Date().getFullYear() > 2021 &&
        "-" + new Date().getFullYear()}{" "}
      <MuiLink
        color="inherit"
        href="https://github.com/daveroverts/cpt-movements-tracker"
      >
        CPT movements tracker by Dave Roverts (1186831)
      </MuiLink>
      {"."}
    </Typography>
  );
}
