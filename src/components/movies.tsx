import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MovieCard from './movie-card';
import { SearchMovieResponse } from '../definitions.d';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

interface Props {
  data: SearchMovieResponse;
}

const Movies = ({ data }: Props) => {
  const classes = useStyles();

  const { results: movies } = data;

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </Grid>
    </Container>
  );
};

export default Movies;
