import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <CircularProgress color="secondary" />
      <Typography varinat="h5" component="h5">
          Loading ...
      </Typography>
    </div>
  );
}
