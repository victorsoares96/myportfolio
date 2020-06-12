import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  white: {
    color: '#fff'
  },
}));

export default function Header({ onChangeTheme, isDark }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.white}>
        <Box flexGrow={1}>
          <Button className={classes.white}>
            SOBRE
          </Button>
        </Box>
        <Box>
          <IconButton aria-label="delete" className={classes.white} onClick={onChangeTheme}>
            {
              isDark === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />
            }
          </IconButton>
        </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}