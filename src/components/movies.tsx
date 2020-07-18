import React, { useState } from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MovieCard from './movie-card';
import DetailsDialog from './details-dialog';
import { SearchMovieResponse, Movie } from '../definitions.d';

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

  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie>(movies[0]);

  const onShowDetails = (movie: Movie) => {
    setSelectedMovie(movie);
    setOpenDetails(true);
  };

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleShowDetails={() => onShowDetails(movie)}
            />
          ))}
        </Grid>
      </Container>
      <DetailsDialog
        open={openDetails}
        movie={selectedMovie}
        handleClose={() => setOpenDetails(false)}
      />
    </div>
  );
};

export default Movies;
