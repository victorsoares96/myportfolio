import React, { useEffect, useState } from 'react';
import { loadCSS } from 'fg-loadcss';
import axios from 'axios';
import clsx from 'clsx';

import {
  Button,
  LinearProgress,
  Box,
  Card,
  CardActions,
  Collapse
} from '@material-ui/core';

import { CardProjeto } from '../../utils/CardProjeto';
import { StyledTypo, StyledButton, CustomLinearProgress } from '../../styles';
import { useStyles } from './styles';

import CurriculoPDF from '../../assets/curriculo.pdf';
import { config, userAuth } from '../config';

/* Icones */
import Icon from '@material-ui/core/Icon';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export function Sobre() {
  const { about } = config;
  return (
    <div>
      <StyledTypo variant="h4" gutterBottom>
        Sobre
      </StyledTypo>
      <StyledTypo variant="body1" gutterBottom>
        {about}
      </StyledTypo>
    </div>
  );
}

export function Contato() {
  const classes = useStyles();
  const { locationLink, emailLink, githubLink } = config.contact;
  return (
    <div>
      <StyledTypo variant="h4" gutterBottom>
        Contato
      </StyledTypo>
      <StyledTypo variant="body1" gutterBottom>
        <Button className={classes.button} href={locationLink} startIcon={<LocationOnIcon/>}>
          Fortaleza, Ceará, Brasil
        </Button>
        <Button className={classes.button} href={`mailto:${emailLink}`} startIcon={<MailIcon/>}>
          vitorsoares96@hotmail.com
        </Button>
        <Button className={classes.button} href={githubLink} startIcon={<GitHubIcon/>}>
          github.com/victorsoares96
        </Button>
      </StyledTypo>
    </div>
  );
}

export function PrincipaisProjetos() {
  const classes = useStyles();
  const { pinnedRepos } = config;
  const [principaisRepos, setPrincipaisRepos] = useState([]);
  const [isLoad, setLoadStatus] = useState(true);
  
  async function getRepoByName(name) {
    const response = await axios.get(`https://api.github.com/users/victorsoares96/repos`, userAuth);
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
  
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <StyledTypo variant="h4" gutterBottom>
        Principais Projetos
      </StyledTypo>
      {
        isLoad === true ?
        <LoadBar/>
        :
        <Card elevation={0}>
          
          <CardProjeto name={principaisRepos[0]?.name} description={principaisRepos[0]?.description}
          html_url={principaisRepos[0]?.html_url} language={principaisRepos[0]?.language}
          homepage={principaisRepos[0]?.homepage}/>
          <CardActions disableSpacing>
            <Button style={{marginLeft: 'auto', alignItems: 'center', display: 'flex'}} onClick={handleExpandClick} endIcon={
              <ExpandMoreIcon className={clsx(classes.expand, {
                [classes.expandOpen]: expanded})}/>}>
              { 
                expanded === false ? 
                <StyledTypo variant='caption' style={{marginTop: '1px'}}>
                  Mostrar mais
                </StyledTypo> 
                : 
                <StyledTypo variant='caption' style={{marginTop: '1px'}}>
                  Mostrar menos
                </StyledTypo>
              }
            </Button>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {
              principaisRepos.map((item, index) => index !== 0 ?
              <CardProjeto key={item.name} name={item.name} description={item.description}
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
  const { skills } = config;
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
      <>
        <Box style={{display: 'flex', alignItems: 'center'}} component="div" display="inline">
          <Icon className={icon}/>
          <StyledTypo style={{margin: '5px'}}>{name}</StyledTypo>
        </Box>
        <CustomLinearProgress variant="determinate" value={progress} className={classes.skillProgress}/>
      </>
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
  const { education } = config;
  const EducationItem = ({local, graduation}) => (
    <>
      <StyledTypo variant='h6' style={{margin: '5px'}}>{local}</StyledTypo>
      <StyledTypo variant='subtitle2' style={{margin: '5px'}}>{graduation}</StyledTypo>
    </>
  );
  return (
    <>
    <StyledTypo variant="h4" gutterBottom>
      Educação
    </StyledTypo>
    {education.map((item) => <EducationItem local={item.local} graduation={item.graduation}/>)}
    </>
  )
}

export function Linguas() {
  const classes = useStyles();
  const { languages } = config;
  const Lingua = ({linguas}) => (
    <>
      <Box style={{display: 'flex', alignItems: 'center'}} component="div" display="inline">
        <StyledTypo style={{margin: '5px', flexGrow: 1}}>{linguas.name}</StyledTypo>
        <StyledTypo variant='caption' style={{margin: '5px'}}>{linguas.skill}</StyledTypo>
      </Box>
      <CustomLinearProgress variant="determinate" value={linguas.progress} className={classes.skillProgress}/>
    </>
  );
  return (
    <>
    <StyledTypo variant="h4" gutterBottom>
      Linguas
    </StyledTypo>
    {languages.map((item) => <Lingua key={item.name} linguas={item}/>)}
    </>
  );
}

export function Curriculo() {
  return (
    <>
      <StyledTypo variant="h4" gutterBottom>
        Meu Curriculo
      </StyledTypo>
      <Box display='flex' component='div'>     
        <StyledButton style={{color: '#f5f5f5'}} variant='contained' color='primary'
          disableElevation href={CurriculoPDF} download="João Victor Moreira Soares.pdf">
            BAIXAR CURRICULO
        </StyledButton>
      </Box>
    </>
  );
}

export function OutrosProjetos() {
  const classes = useStyles();
  const { pinnedRepos } = config;
  const [outrosRepos, setOutrosRepos] = useState([]);
  const [isLoad, setLoadStatus] = useState(true);
  
  async function loadOtherRepos(pinned) {
    const response = await axios.get('https://api.github.com/users/victorsoares96/repos', userAuth);
    let otherRepos = response.data.filter((repo) => {
      if(repo.fork === false) {
        return repo.name !== pinned[0] && repo.name !== pinned[1] &&
        repo.name !== pinned[2] && repo.name !== pinned[3];
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
  
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <StyledTypo variant="h4" gutterBottom>
        Outros Projetos
      </StyledTypo>
      {
        isLoad === true ?
        <LoadBar/>
        :
        <Card elevation={0}>
          
          <CardProjeto name={outrosRepos[0].name} description={outrosRepos[0].description}
          html_url={outrosRepos[0].html_url} language={outrosRepos[0].language}
          homepage={outrosRepos[0].homepage}/>
          <CardActions disableSpacing>
            <Button style={{marginLeft: 'auto', alignItems: 'center', display: 'flex'}} onClick={handleExpandClick} endIcon={
              <ExpandMoreIcon className={clsx(classes.expand, {
                [classes.expandOpen]: expanded})}/>}>
              { 
                expanded === false ? 
                <StyledTypo variant='caption' style={{marginTop: '1px'}}>
                  Mostrar mais
                </StyledTypo> 
                : 
                <StyledTypo variant='caption' style={{marginTop: '1px'}}>
                  Mostrar menos
                </StyledTypo>
              }
            </Button>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {
              outrosRepos.map((item, index) => index !== 0 ?
              <CardProjeto key={item.name} name={item.name} description={item.description}
              html_url={item.html_url} language={item.language} homepage={item.homepage}/>
              : [])
            }
          </Collapse>
        </Card>
      }
    </div>
  );
}

export function Experiencia() {
  return (
    <>
      <StyledTypo variant="h4" gutterBottom>
        Experiências
      </StyledTypo>
      <Box display='block' component='div'>
        <StyledTypo>A procura da primeira...</StyledTypo>
        <LinearProgress style={{marginTop: '5px'}}/>
      </Box>
    </>
  );
}

export function MeuGithub() {
  return (
    <>
      <StyledTypo variant="h4" gutterBottom>
        Meu GitHub
      </StyledTypo>
      <WorkInProgress/>
    </>
  );
}

const LoadBar = () => (
  <Box display='block' component='div'>
    <StyledTypo>Carregando...</StyledTypo>
    <LinearProgress style={{marginTop: '5px'}}/>
  </Box>
);

const WorkInProgress = () => (
  <Box display='block' component='div'>
    <StyledTypo>Em progresso...</StyledTypo>
    <LinearProgress style={{marginTop: '5px'}}/>
  </Box>
);