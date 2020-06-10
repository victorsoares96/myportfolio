import React from 'react';
import { loadCSS } from 'fg-loadcss';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Victor from '../../assets/eu.jpg';
/* Icones */
import Icon from '@material-ui/core/Icon';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import TvIcon from '@material-ui/icons/Tv';

const StyledTypo = styled(Typography)`
  text-align: left;
  font-weight: 600;
`;
const useStyles = makeStyles({
  text: {
    textAlign: 'left',
    fontWeight: 900
  },
  button: {
    textTransform: 'none',
    fontWeight: 600,
    color: 'inherit'
  },
  media: {
    height: 340,
  },
});

export function Sobre() {
  const classes = useStyles();
  return (
    <div>
      <StyledTypo variant="h4" gutterBottom>
        Sobre
      </StyledTypo>
      <StyledTypo variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </StyledTypo>
    </div>
  );
}

export function Contato() {
  const classes = useStyles();
  return (
    <div>
      <StyledTypo variant="h4" gutterBottom>
        Contato
      </StyledTypo>
      <StyledTypo variant="body1" gutterBottom>
        <Button className={classes.button} href="https://github.com" startIcon={<LocationOnIcon/>}>
          Fortaleza, Ceará, Brasil
        </Button>
        <Button className={classes.button} href="mailto:vitorsoares96@hotmail.com" startIcon={<MailIcon/>}>
          vitorsoares96@hotmail.com
        </Button>
        <Button className={classes.button} href="https://github.com/victorsoares96" startIcon={<GitHubIcon/>}>
          github.com/victorsoares96
        </Button>
      </StyledTypo>
    </div>
  );
}

export function PrincipaisProjetos() {
  const classes = useStyles();
  function Projetos() {
    return (
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Victor}
          title="Contemplative Reptile"
        />
        <CardContent>
          <StyledTypo gutterBottom variant="h5" component="h2">
            Titulo do Repositório
          </StyledTypo>
          <StyledTypo variant="body2" color="textSecondary" component="p">
            Descrição
          </StyledTypo>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button className={classes.button} color="inherit" size="small" startIcon={<CodeIcon />}>
        Source
      </Button>
      <Button className={classes.button} color="inherit" size="small" startIcon={<TvIcon />}>
        Preview
      </Button>
      </CardActions>
      </Card>
    );
  }
  return (
    <div>
      <StyledTypo variant="h4" gutterBottom>
        Principais Projetos
      </StyledTypo>
      <Projetos/>
    </div>
  );
}

export function Habilidades() {
  const skills = [
    { name: 'React.js & React Native', icon: 'fab fa-react', progress: 75 },
    { name: 'Javascript', icon: 'fab fa-js-square', progress: 70 },
    { name: 'Node.js', icon: 'fab fa-node', progress: 65 },
    { name: 'Html', icon: 'fab fa-html5', progress: 65 },
    { name: 'Angular8+', icon: 'fab fa-angular', progress: 40 },
    { name: 'Java', icon: 'fab fa-java', progress: 35 },
  ];
  const SkillProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: theme.palette.primary,
    },
  }))(LinearProgress);

  const classes = useStyles();
  
  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  
  function Skill({ name, icon, progress}) {
    return (
      <StyledTypo variant="body1" gutterBottom>
        <Box component="div" display="inline">
          <Button className={classes.button} startIcon={<Icon className={icon}/>}>
            {name}
          </Button>
        </Box>
        <SkillProgress variant="determinate" value={progress} className={classes.skillProgress}/>
      </StyledTypo>
    );
  }
  return (
    <div>
      <StyledTypo variant="h4" gutterBottom>
        Habilidades
      </StyledTypo>
      {skills.map((item) => <Skill key={item.name} name={item.name} icon={item.icon} progress={item.progress}/>)}
    </div>
  );
}