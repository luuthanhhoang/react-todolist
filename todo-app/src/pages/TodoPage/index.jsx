import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { Typography, Button, Grid, TextField } from '@mui/material';
import Tasks from './Tasks';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles({
  paper: {
    padding: 30,
    margin: '0px 100px'
  },
  typography: {
    color: 'red',
    fontWeight: '700 !important'
  }
});

const TodoPage = () => {
  const classes = useStyles();

  const [textTask, setTextTask] = React.useState('');

  const [dataTodo, setDataTodo] = useState([

  ]);

  const handleAddItem = () => {
    let newObject = {
      id: uuidv4(),
      isChecked: false,
      text: textTask
    }
    setDataTodo([
      ...dataTodo,
      newObject
    ]);
    setTextTask('');

  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.typography} variant="h3">My Todo</Typography>
        </Grid>

        <Grid justifyContent="center" alignItems="center" container item xs={12} spacing={2}>
          <Grid item xs={10}>
            <TextField value={textTask} onChange={e => setTextTask(e.target.value)} fullWidth label="Add todo" size="small" />
          </Grid>
          <Grid item xs={2}>
            <Button onClick={handleAddItem} variant="contained" fullWidth>Add</Button>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Tasks dataTodo={dataTodo} setDataTodo={setDataTodo} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoPage
