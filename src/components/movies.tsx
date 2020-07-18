import React, { useState } from 'react';
import { Grid, Container, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MovieCard from './movie-card';
import DetailsDialog from './details-dialog';
import { SearchMovieResponse, Movie } from '../definitions.d';

const filterByRating = (rating: number, voteAverage: number) => {
  const maxRating = rating * 2;
  const minRating = rating * 2 - 2;
  return rating ? voteAverage > minRating && voteAverage <= maxRating : true;
};

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

interface Props {
  data: SearchMovieResponse;
  ratingFilterValue: number;
}

const Movies = ({ data, ratingFilterValue }: Props) => {
  const classes = useStyles();

  const { results: movies } = data;

  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie>({} as Movie);

  const onShowDetails = (movie: Movie) => {
    setSelectedMovie(movie);
    setOpenDetails(true);
  };

  return (
    <div>
      {movies.length ? (
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {movies
              .filter((movie) =>
                filterByRating(ratingFilterValue, movie.vote_average)
              )
              .sort((a, b) => b.vote_average - a.vote_average)
              .map((movie) => (
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
        movie={selectedMovie}
        handleClose={() => setOpenDetails(false)}
      />
    </div>
  );
};

export default Movies;
