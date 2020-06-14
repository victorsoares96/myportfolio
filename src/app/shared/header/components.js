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

export function Sobre() {
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
        Sobre
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose}>
          React Portfolio
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            React Portfolio é uma aplicação web baseada na livraria Material UI do React.js
          </Typography>
          <Typography gutterBottom>
            Esta é uma aplicação web em formato de portfolio de programador que obtém os dados de
            sobre, contato, principais projetos, outros projetos, habilidades e linguagens de uma API Rest
            pessoal e da API do GitHub!
          </Typography>
          <Box marginTop={5} component='div' display='block'>
            <StyledTypo>O código fonte desta aplicação encontra-se no github:</StyledTypo>
            <StyledButton href={sourceCodeLink}>
              Acessar código fonte
            </StyledButton>
          </Box>
        </DialogContent>
        <DialogActions>
          <StyledButton autoFocus onClick={handleClose} color="basic">
            Fechar
          </StyledButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}