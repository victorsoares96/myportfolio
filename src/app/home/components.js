import React, { useEffect, useState } from 'react';
import { loadCSS } from 'fg-loadcss';
import axios from 'axios';
import styled from 'styled-components';
import clsx from 'clsx';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
  Typography,
  Button,
  IconButton,
  LinearProgress,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Collapse
} from '@material-ui/core';

import { CardProjeto } from '../../utils/CardProjeto';

import { makeStyles, withStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme) => ({
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
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

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

const StyledButton = withStyles((theme) => ({
  root: {
    fontWeight: 600,
    color: 'inherit',
    flex: 1
  },
}))(Button);

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
    const response = await axios.get(`https://api.github.com/users/victorsoares96/repos`);
    (response.data).map((item) => {
      if(item.name === name) {
        setPrincipaisRepos(oldRepos => [...oldRepos, item]);
      }
    });
  }
  
  useEffect(() => {
    async function load() {
      setLoadStatus(true);
      await pinnedRepos.map(async (item) => await getRepoByName(item));
      setLoadStatus(false);
    }
    load();
  }, []);
  
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <StyledTypo variant="h4" gutterBottom>
        Principais Projetos
      </StyledTypo>
      {
        isLoad == true ?
        <LoadBar/>
        :
        <Card elevation={0}>
          
          <CardProjeto name={principaisRepos[0]?.name} description={principaisRepos[0]?.description}
          html_url={principaisRepos[0]?.html_url} language={principaisRepos[0]?.language}
          homepage={principaisRepos[0]?.homepage}/>
          <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
          <ExpandMoreIcon />
          </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {
              principaisRepos.map((item, index) => index != 0 ?
              <CardProjeto name={item.name} description={item.description}
              html_url={item.html_url} language={item.language} homepage={item.homepage}/>
              : [])
            }
          </Collapse>
        </Card>
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
  const linguas = [
    { name: 'Inglês', skill: 'Intermediário', progress: 65 },
    { name: 'Português', skill: 'Avançado', progress: 95 }
  ];
  function Lingua({linguas}) {
    return (
      <StyledTypo variant="body1" gutterBottom>
        <Box style={{display: 'flex', alignItems: 'center'}} component="div" display="inline">
          <StyledTypo style={{margin: '5px', flexGrow: 1}}>{linguas.name}</StyledTypo>
          <StyledTypo variant='caption' style={{margin: '5px'}}>{linguas.skill}</StyledTypo>
        </Box>
        <CustomLinearProgress variant="determinate" value={linguas.progress} className={classes.skillProgress}/>
      </StyledTypo>
    );
  }
  const classes = useStyles();
  return (
    <>
    <StyledTypo variant="h4" gutterBottom>
      Linguas
    </StyledTypo>
    {
      linguas.map((item) => <Lingua linguas={item}/>)
    }
    </>
  )
}

export function Curriculo() {
  const classes = useStyles();
  return (
    <>
      <StyledTypo variant="h4" gutterBottom>
        Meu Curriculo
      </StyledTypo>
      <Box display='flex' component='div'>
        <StyledButton variant='contained' color='primary'
        href='' disableElevation download>
          BAIXAR CURRICULO
        </StyledButton>
      </Box>
    </>
  );
}

export function OutrosProjetos() {
  const classes = useStyles();
  const pinnedRepos = ['coronainfo', 'cantadas', 'CMax_Project', 'victorsoares96'];
  const [outrosRepos, setOutrosRepos] = useState([]);
  const [isLoad, setLoadStatus] = useState(true);
  
  async function loadOtherRepos(pinned) {
    const response = await axios.get('https://api.github.com/users/victorsoares96/repos');
    let otherRepos = response.data.filter((repo) => {
      if(repo.fork == false) {
        return repo.name != pinned[0] && repo.name != pinned[1] &&
        repo.name != pinned[2] && repo.name != pinned[3];
      }
    });
    setOutrosRepos(otherRepos);
  }
  
  useEffect(() => {
    async function load() {
      setLoadStatus(true);
      await loadOtherRepos(pinnedRepos);
      setLoadStatus(false);
    }
    load();
  }, []);
  
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <StyledTypo variant="h4" gutterBottom>
        Outros Projetos
      </StyledTypo>
      {
        isLoad == true ?
        <LoadBar/>
        :
        <Card elevation={0}>
          
          <CardProjeto name={outrosRepos[0].name} description={outrosRepos[0].description}
          html_url={outrosRepos[0].html_url} language={outrosRepos[0].language}
          homepage={outrosRepos[0].homepage}/>
          <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
          <ExpandMoreIcon />
          </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {
              outrosRepos.map((item, index) => index != 0 ?
              <CardProjeto name={item.name} description={item.description}
              html_url={item.html_url} language={item.language} homepage={item.homepage}/>
              : [])
            }
          </Collapse>
        </Card>
      }
    </div>
  );
}

const LoadBar = () => (
  <Box display='block' component='div'>
    <StyledTypo>Carregando...</StyledTypo>
    <LinearProgress />
  </Box>
);