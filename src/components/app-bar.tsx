import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  }
}));

const CustomAppBar: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Movie application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
