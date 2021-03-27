import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' '}
      <MuiLink color="inherit" href="https://daveroverts.nl/">
        CPT movements tracker by Dave Roverts (1186831)
      </MuiLink>
      {'.'}
    </Typography>
  );
}
