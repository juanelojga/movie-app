import React, { useState } from 'react';
import { Grid, Container, Typography, Paper } from '@material-ui/core';
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
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  const onShowDetails = (movie: Movie) => {
    setSelectedMovie(movie);
    setOpenDetails(true);
  };

  return (
    <div>
      {movies.length ? (
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
      ) : (
        <Paper elevation={0}>
          <Typography variant="h5" align="center" gutterBottom>
            No results were found
          </Typography>
        </Paper>
      )}
      <DetailsDialog
        open={openDetails}
        movie={selectedMovie ? selectedMovie : ({} as Movie)}
        handleClose={() => setOpenDetails(false)}
      />
    </div>
  );
};

export default Movies;
