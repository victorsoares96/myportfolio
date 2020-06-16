import React, { useEffect } from 'react';
import { loadCSS } from 'fg-loadcss';
import { 
  Icon,
  IconButton,
  Dialog,
  Button,
  Box,
  Typography
} from '@material-ui/core';

import { config } from '../../config';

import { DialogActions, DialogContent, DialogTitle } from './styles';
import { StyledButton, StyledTypo } from '../../../styles';

import { useStyles } from './styles';

export function SocialMedias({data}) {
  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  function SocialMediaButton({ link, socialIcon }) {
    return (
      <IconButton href={link}>
        <Icon className={socialIcon}/>
      </IconButton>
    );
  }
  return (
    data.map((item) => <SocialMediaButton key={item.socialIcon} link={item.link} socialIcon={item.socialIcon}/>)
  );
}

export function AboutButton() {
  const classes = useStyles();
  const { sourceCodeLink } = config;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button className={classes.button} onClick={handleClickOpen}>
        About
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose}>
          React Portfolio
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            React Portfolio is a web application based on the React.js Material UI library
          </Typography>
          <Typography gutterBottom>
            This is a web application in a programmer's portfolio format that obtains data from
            about, contact, main projects, other projects, skills and languages ​​of an API Rest
            personal and GitHub API!
          </Typography>
          <Box marginTop={5} component='div' display='block'>
            <StyledTypo>The source code for this application can be found on github:</StyledTypo>
            <StyledButton href={sourceCodeLink}>
              Source Code
            </StyledButton>
          </Box>
        </DialogContent>
        <DialogActions>
          <StyledButton autoFocus onClick={handleClose} color="basic">
            Close
          </StyledButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}