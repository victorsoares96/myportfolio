import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { 
  Box, 
  Typography, 
  Avatar, 
  Container, 
  Button,
  Link,
  Grid,
  Paper
} from '@material-ui/core';
import axios from 'axios';
import { useStyles } from './styles';
import { config, userAuth } from '../config';

/* Icones */
import Twitter from '../../assets/twitter.png';

const ref = React.createRef();

export function CurriculoPDF() {
  const classes = useStyles();
  const { 
    name,
    programmer,
    about,
    contact,
    education,
    languages,
    socialMedias,
    skills
  } = config;
  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    async function loadAvatar() {
      const response = await axios.get('https://api.github.com/users/victorsoares96', userAuth);
      setAvatar(response.data.avatar_url);
    }
    loadAvatar();
  }, []);

  const SocialMediasItem = ({socialMediaName, socialMediaLink, icon}) => (
    <Box style={{display: 'flex', alignItems: 'center'}} component="div" display="inline">
      <img src={Twitter}/>
      <Link href={socialMediaLink} className={classes.socialMediasText}>
        {socialMediaName}
      </Link>
    </Box>
  );
  const SideBar = () => (
    <Container className={classes.sideBar}>
      <Box component='div' justifyContent='center' style={{display: 'flex', padding: '15px'}}>
        <Avatar alt='Victor Soares' src={avatar} className={classes.avatar}/>
      </Box>
      <Typography variant='subtitle1' align='center' className={classes.name}>
        {name}
      </Typography>
      <Typography variant='subtitle2' align='center' className={classes.work}>
        {`"${programmer}"`}
      </Typography>
      <Box component='div' className={classes.aboutText}>
        {about}
      </Box>
      <Box component='div' className={classes.socialMedias}>
        {socialMedias.map((item) => 
          <SocialMediasItem socialMediaName={item.name} socialMediaLink={item.link} icon={item.socialIcon}/>)}
      </Box>
    </Container>
  );
  function MainReposList() {
    const { pinnedRepos } = config;
    const [mainRepos, setMainRepos] = useState([]);
    async function getRepoByName(name) {
      const response = await axios.get(`https://api.github.com/users/victorsoares96/repos`, userAuth);
      (response.data).map((item) => {
        if(item.name === name) {
          setMainRepos(oldRepos => [...oldRepos, item]);
        }
      });
    }
    
    useEffect(() => {
      async function load() {
        await pinnedRepos.map(async (item) => await getRepoByName(item));
      }
      load();
    }, []);
    const RepoItem = ({name, description}) => (
      <>  
        <Typography variant='h6' className={classes.label}>{name}</Typography>
        <Typography variant='body1' className={classes.label}>
          {description}
        </Typography>
      </>
    );
    return (
      <Container style={{margin: '15px', display: 'block', textAlign: 'left'}}>
        <Typography variant='h4' className={classes.label}>Projetos</Typography>
        <Box component='div' display='block' style={{margin: '15px'}}>
          {mainRepos.map((item) => <RepoItem name={item.name} description={item.description}/>)}
        </Box>
      </Container>
    );
  }
  return (
    <>
    <Pdf targetRef={ref} filename="João Victor Moreira Soares.pdf">
      {({ toPdf }) => 
        <Button variant='contained' onClick={toPdf}>
          Generate PDF
        </Button>
      }
    </Pdf>
    <div className={classes.container} ref={ref}>
    <Grid container spacing={1}>
        <Grid style={{height: '1122.519685px'}} item xs={12} sm={4}>
          <SideBar/>
        </Grid>
        <Grid style={{height: '1122.519685px'}} item xs={12} sm={8}>
          <MainReposList/>
        </Grid>
      </Grid>
    </div>
    </>
  );
}
