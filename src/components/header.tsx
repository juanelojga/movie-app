import React, { useState, useRef, useEffect } from 'react';
import { Grid, Typography, Container, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const DEBOUNCE_TIME = 1000;

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}));

interface Props {
  handleQueryMovies: (query: string) => void;
  handleFilterByRating: (rating: number) => void;
}

const Jumbotron: React.FunctionComponent<Props> = ({
  handleQueryMovies,
  handleFilterByRating
}: Props) => {
  const classes = useStyles();

  const [query, setQuery] = useState<string>('');

  const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    debounceTimeoutRef.current = setTimeout(() => {
      handleQueryMovies(query);
    }, DEBOUNCE_TIME);

    return () => {
      if (debounceTimeoutRef && debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [query]);

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Movie application
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Welcome to the local movie theater. Here is our list of recommended
          movies. You can search movies, or filter movies by rating.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item>
              <TextField
                id="movie-search-input"
                label="Search movie"
                variant="outlined"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target) {
                    setQuery(event.target.value);
                  }
                }}
              />
            </Grid>
            <Grid item>
              <Rating
                name="rating-filter-input"
                onChange={(event, newRating) => {
                  handleFilterByRating(newRating ? newRating : 0);
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Jumbotron;
