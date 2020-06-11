import React, { useEffect, useState } from 'react';
import { loadCSS } from 'fg-loadcss';
import axios from 'axios';
import styled from 'styled-components';

import {
  Typography,
  Button,
  LinearProgress,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia
} from '@material-ui/core';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import js from '../../assets/javascript.png';
import html from '../../assets/html.png';
import generic_code from '../../assets/generic_code.png';
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
  card: {
    marginTop: 20,
    marginBottom: 20
  }
});

const CustomLinearProgress = withStyles((theme) => ({
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

export function Sobre() {
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
  const pinnedRepos = ['coronainfo', 'cantadas', 'CMax_Project', 'victorsoares96'];
  const [principaisRepos, setPrincipaisRepos] = useState([]);
  const [isLoad, setLoadStatus] = useState(true);
  async function getRepoByName(name) {
    const response = await axios.get('https://api.github.com/users/victorsoares96/repos');
    (response.data).map((item) => {
      if(item.name === name) {
        setPrincipaisRepos(oldRepos => [...oldRepos, item]);
      }
    });
  }
  function getRepoLanguageImage(name) {
    var image = 'https://i.imgur.com/wgAPCH6.png';
    const language = [
      { language: 'JavaScript', img: 'https://i.imgur.com/N6kc2HK.png'},
      { language: 'HTML', img: 'https://i.imgur.com/WNRyunb.png?1'},
    ];
    language.map((item) => {
      if(item.language == name) return image = item.img;
    });
    return image;
  }
  useEffect(() => {
    async function load() {
      setLoadStatus(true);
      await pinnedRepos.map((item) => getRepoByName(item));
      setLoadStatus(false);
    }
    load();
  }, []);
  function Projetos({ name, description, html_url, language, homepage}) {
    return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={getRepoLanguageImage(language)}
          title={name}
        />
        <CardContent>
          <StyledTypo gutterBottom variant="h5" component="h2">
            {name}
          </StyledTypo>
          <StyledTypo variant="body2" color="textSecondary" component="p">
            {description}
          </StyledTypo>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button href={html_url} className={classes.button} color="inherit" size="small" startIcon={<CodeIcon />}>
        Source
      </Button>
      <Button href={homepage} className={classes.button} color="inherit" size="small" startIcon={<TvIcon />}>
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
      {
        isLoad == true ?
        <LoadBar/>
        :
        principaisRepos.map((item) => <Projetos name={item.name} description={item.description}
        html_url={item.html_url} language={item.language} homepage={item.homepage}/>)
      }
    </div>
  );
}

export function Habilidades() {
  const classes = useStyles();
  const skills = [
    { name: 'React.js & React Native', icon: 'fab fa-react', progress: 75 },
    { name: 'Javascript', icon: 'fab fa-js-square', progress: 70 },
    { name: 'Node.js', icon: 'fab fa-node-js', progress: 65 },
    { name: 'Html', icon: 'fab fa-html5', progress: 65 },
    { name: 'Angular8+', icon: 'fab fa-angular', progress: 40 },
    { name: 'Java', icon: 'fab fa-java', progress: 35 },
  ];
  const [isLoad, setLoadStatus] = useState(true);
  
  useEffect(() => {
    setLoadStatus(true);
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
    setLoadStatus(false);
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  
  function Skill({ name, icon, progress}) {
    return (
      <StyledTypo variant="body1" gutterBottom>
        <Box style={{display: 'flex', alignItems: 'center'}} component="div" display="inline">
          <Icon className={icon}/>
          <StyledTypo style={{margin: '5px'}}>{name}</StyledTypo>
        </Box>
        <CustomLinearProgress variant="determinate" value={progress} className={classes.skillProgress}/>
      </StyledTypo>
    );
  }
  return (
    <div>
      <StyledTypo variant="h4" gutterBottom>
        Habilidades
      </StyledTypo>
      {
        isLoad === true ? <LoadBar/>
        :
        skills.map((item) => <Skill key={item.name} name={item.name} icon={item.icon} progress={item.progress}/>)
      }
    </div>
  );
}

export function Educacao() {
  return (
    <StyledTypo variant="h4" gutterBottom>
      Educação
      <StyledTypo variant='h6' style={{margin: '5px'}}>Colégio da Policia Militar</StyledTypo>
      <StyledTypo variant='subtitle2' style={{margin: '5px'}}>Ensino Fundamental e Médio</StyledTypo>
      <StyledTypo variant='h6' style={{margin: '5px'}}>Unigrande</StyledTypo>
      <StyledTypo variant='subtitle2' style={{margin: '5px'}}>Sistemas para Internet</StyledTypo>
    </StyledTypo>
  )
}

export function Linguas() {
  const classes = useStyles();
  return (
    <>
    <StyledTypo variant="h4" gutterBottom>
      Linguas
    </StyledTypo>
    <StyledTypo variant="body1" gutterBottom>
    <Box style={{display: 'flex', alignItems: 'center'}} component="div" display="inline">
      <StyledTypo style={{margin: '5px', flexGrow: 1}}>Inglês</StyledTypo>
      <StyledTypo variant='caption' style={{margin: '5px'}}>Avançado</StyledTypo>
    </Box>
    <CustomLinearProgress variant="determinate" value={70} className={classes.skillProgress}/>
    </StyledTypo>
    </>
  )
}

const LoadBar = () => (
  <Box display='block' component='div'>
    <StyledTypo>Carregando...</StyledTypo>
    <LinearProgress />
  </Box>
);