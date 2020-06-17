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

import { ProjectCard } from '../../utils/CardProjeto';

import { 
  StyledTypo, 
  StyledButton, 
  CustomLinearProgress 
} from '../../globalStyles';

/* Folha de estilos */
import { useStyles } from './styles';

/* Seu curriculo em PDF */
import CurriculoPDF from '../../assets/curriculo.pdf';

/* Arquivo com as informações pessoais */
import { config } from '../config';

/* Icones */
import Icon from '@material-ui/core/Icon';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export function About() {
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

export function Contact() {
  const classes = useStyles();
  const { location, locationLink, emailLink, githubLink } = config.contact;
  return (
    <div>
      <StyledTypo variant="h4" gutterBottom>
        Contato
      </StyledTypo>
      <StyledTypo variant="body1" gutterBottom>
        <Button className={classes.button} href={locationLink} startIcon={<LocationOnIcon/>}>
          {location}
        </Button>
        <Button className={classes.button} href={`mailto:${emailLink}`} startIcon={<MailIcon/>}>
          {emailLink}
        </Button>
        <Button className={classes.button} href={`https://${githubLink}`} startIcon={<GitHubIcon/>}>
          {githubLink}
        </Button>
      </StyledTypo>
    </div>
  );
}

export function MainProjects() {
  const classes = useStyles();
  const { pinnedRepos, githubUser } = config;
  const [mainRepos, setMainRepos] = useState([]);
  const [isLoad, setLoadStatus] = useState(true);
  
  /* Obtém as informações de um repositório pelo seu nome */
  async function getRepoByName(name) {
    try {
      const response = await axios.get(`https://api.github.com/users/${githubUser}/repos`);
      (response.data).map((item) => {
        if(item.name === name) {
          setMainRepos(oldRepos => [...oldRepos, item]);
        }
      }); 
    } catch (error) {
      console.log(error);
    }
  }
  /* 
    Carrega o componente principais projetos com base 
    na array pinnedRepos(repositórios favoritos)
  */
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
        mainRepos.length === 0 ?
        /* 
          Lembre-se que para que apareçam seus principais
          repositórios aqui você deve incluí-los na array pinnedRepos 
        */
        <StyledTypo variant='h5'>Sem repositórios...</StyledTypo>
        :
        <Card elevation={0}>
          
          <ProjectCard name={mainRepos[0]?.name} description={mainRepos[0]?.description}
          html_url={mainRepos[0]?.html_url} language={mainRepos[0]?.language}
          homepage={mainRepos[0]?.homepage}/>
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
              mainRepos.map((item, index) => index !== 0 ?
              <ProjectCard key={item.name} name={item.name} description={item.description}
              html_url={item.html_url} language={item.language} homepage={item.homepage}/>
              : [])
            }
          </Collapse>
        </Card>
      }
    </div>
  );
}

export function Skills() {
  const classes = useStyles();
  const { skills } = config;
  const [isLoad, setLoadStatus] = useState(true);

  /* 
    Carrega todos os icones da fontawesome,
    sem isso nenhum icone irá funcionar!
  */
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
  /* Componente que gera cada skill item */
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

export function Education() {
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
    {education.map((item) => <EducationItem key={item.local} local={item.local} graduation={item.graduation}/>)}
    </>
  )
}

export function Languages() {
  const classes = useStyles();
  const { languages } = config;
  const Language = ({languages}) => (
    <>
      <Box style={{display: 'flex', alignItems: 'center'}} component="div" display="inline">
        <StyledTypo style={{margin: '5px', flexGrow: 1}}>{languages.name}</StyledTypo>
        <StyledTypo variant='caption' style={{margin: '5px'}}>{languages.skill}</StyledTypo>
      </Box>
      <CustomLinearProgress variant="determinate" value={languages.progress} className={classes.skillProgress}/>
    </>
  );
  return (
    <>
    <StyledTypo variant="h4" gutterBottom>
      Linguas
    </StyledTypo>
    {languages.map((item) => <Language key={item.name} languages={item}/>)}
    </>
  );
}

export function Curriculum() {
  const { name } = config;
  return (
    <>
      <StyledTypo variant="h4" gutterBottom>
        Meu Curriculo
      </StyledTypo>
      <StyledTypo variant="subtitle1" gutterBottom>
        Veja um resumo sobre mim...
      </StyledTypo>
      <Box display='flex' component='div'>     
        <StyledButton style={{color: '#f5f5f5'}} variant='contained' color='primary'
          disableElevation href={CurriculoPDF} download={`${name}.pdf`}>
            Baixar
        </StyledButton>
      </Box>
    </>
  );
}

export function OtherProjects() {
  const classes = useStyles();
  const { pinnedRepos, githubUser } = config;
  const [otherRepos, setOtherRepos] = useState([]);
  const [isLoad, setLoadStatus] = useState(true);
  /* 
    Carrega todos os repositórios do usuário e 
    após isso retira os repositórios que foram 
    colocados no pinnedRepos 
  */
  async function loadOtherRepos(pinned) {
    try {
      const response = await axios.get(`https://api.github.com/users/${githubUser}/repos`);
      let otherRepos = response.data.filter((repo) => {
        if(repo.fork === false) {
          return repo.name !== pinned[0] && repo.name !== pinned[1] &&
          repo.name !== pinned[2] && repo.name !== pinned[3];
        }
      });
      setOtherRepos(otherRepos);
    } catch (error) {
      console.log(error);  
    }
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
        otherRepos.length === 0 ?
        <StyledTypo variant='h5'>Sem repositórios...</StyledTypo>
        :
        <Card elevation={0}>
          
          <ProjectCard name={otherRepos[0]?.name} description={otherRepos[0]?.description}
          html_url={otherRepos[0]?.html_url} language={otherRepos[0]?.language}
          homepage={otherRepos[0]?.homepage}/>
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
              otherRepos.map((item, index) => index !== 0 ?
              <ProjectCard key={item.name} name={item.name} description={item.description}
              html_url={item.html_url} language={item.language} homepage={item.homepage}/>
              : [])
            }
          </Collapse>
        </Card>
      }
    </div>
  );
}

export function Experience() {
  return (
    <>
      <StyledTypo variant="h4" gutterBottom>
        Experiência
      </StyledTypo>
      <Box display='block' component='div'>
        <StyledTypo>Em busca da primeira...</StyledTypo>
        <LinearProgress style={{marginTop: '5px'}}/>
      </Box>
    </>
  );
}

export function MyGithub() {
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