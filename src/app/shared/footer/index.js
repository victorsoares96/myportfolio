import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { config } from '../../config';

/* Folha de estilos */
import { useStyles } from './styles';

function Copyright() {
  const { name, contact } = config;
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={`https://${contact.githubLink}`}>
        {name}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Made with React Material-UI
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Made with love
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}