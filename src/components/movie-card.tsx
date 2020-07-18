import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';

import { Movie } from '../definitions';
import { MOVIE_IMAGE_BASE_URL } from '../constants';

const OVERVIEW_MAX_LENGTH = 100;

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '350px'
  },
  cardRating: {
    marginTop: 'auto'
  }
}));

const truncate = (text: string): string => {
  return text.length > OVERVIEW_MAX_LENGTH
    ? `${text.slice(0, OVERVIEW_MAX_LENGTH).trim()}...`
    : text;
};

const MovieCard = ({ poster_path, title, vote_average, overview }: Movie) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={`${MOVIE_IMAGE_BASE_URL}/${poster_path}`}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography paragraph>{truncate(overview)}</Typography>
          <div className={classes.cardRating}>
            <Typography variant="body2">Rating</Typography>
            <Rating name="vote-average" value={vote_average / 2} readOnly />
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            More details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MovieCard;
