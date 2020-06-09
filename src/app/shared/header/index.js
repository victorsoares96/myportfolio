import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    color: '#fff'
  },
}));

export default function Header({ onChangeTheme, isDark }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
        <Box flexGrow={1}>
          <Button>
            <Typography className={classes.toolbar} variant="button" display="block" gutterBottom>
              PROJETOS
            </Typography>
          </Button>
          <Button>
            <Typography className={classes.toolbar} variant="button" display="block" gutterBottom>
              CURRICULO
            </Typography>
          </Button>
        </Box>
        <Box>
          <IconButton aria-label="delete" className={classes.toolbar} onClick={onChangeTheme}>
            {
              isDark == 'dark' ? <Brightness4Icon /> : <Brightness7Icon />
            }
          </IconButton>
        </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}