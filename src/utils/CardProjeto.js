import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { getRepoLanguageImage } from './getRepoLanguageImage';
import { StyledTypo } from '../styles';

/* Icones */
import CodeIcon from '@material-ui/icons/Code';
import TvIcon from '@material-ui/icons/Tv';

const useStyle = makeStyles((theme) => ({
  card: {
    marginTop: 20,
    marginBottom: 20
  },
  button: {
    textTransform: 'none',
    fontWeight: 600,
    color: 'inherit'
  },
  media: {
    height: 340,
  },
}));

export function CardProjeto({ name, description, html_url, language, homepage }) {
  const classes = useStyle();
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
    <Button href={homepage} disabled={homepage == null ? true : false} 
    className={classes.button} color="inherit" size="small" startIcon={<TvIcon />}>
      Preview
    </Button>
    </CardActions>
    </Card>
  );
}