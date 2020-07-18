import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  DialogContent,
  Card,
  DialogActions,
  Button,
  DialogTitle,
  Dialog,
  CardContent,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@material-ui/core';

import { Movie } from '../definitions';
import { MOVIE_IMAGE_BASE_URL } from '../constants';

const useStyles = makeStyles({
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  }
});

interface Props {
  open: boolean;
  movie: Movie;
  handleClose: () => void;
}

const DetailsDialog = ({ open, movie, handleClose }: Props) => {
  const classes = useStyles();

  const {
    poster_path,
    title,
    overview,
    original_title,
    original_language,
    release_date
  } = movie;

  const rows = [
    { label: 'Title', value: title },
    { label: 'Original title', value: original_title },
    { label: 'Overview', value: overview },
    { label: 'Language', value: original_language },
    { label: 'Release date', value: release_date }
  ];

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="more-details-dialog-title"
      open={open}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="more-details-dialog-title">More details</DialogTitle>
      <DialogContent>
        <Card>
          <CardMedia
            className={classes.cardMedia}
            image={`${MOVIE_IMAGE_BASE_URL}/${poster_path}`}
            title={title}
          />
          <CardContent>
            <Table aria-label="details-table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.label}>
                    <TableCell component="th" scope="row">
                      {row.label}
                    </TableCell>
                    <TableCell>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsDialog;
