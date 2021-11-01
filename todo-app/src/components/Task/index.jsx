import React from 'react';
import { Grid, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

const Task = (props) => {

  const { task,
    deleteTask,
    updateTask, handleChange } = props;

  const listButton = [{
    component: <CreateIcon />,
    action: () => updateTask()
  },
  {
    component: <DeleteIcon />,
    action: () => deleteTask(task)
  }
  ]

  return (
    <Grid justifyContent="space-between" alignItems="center" container>
      <Grid item>
        <FormControlLabel control={<Checkbox checked={task.isChecked} onChange={() => handleChange(task)} />} label={task.text} />
      </Grid>
      <Grid item>
        {
          listButton?.map((item) => (
            <IconButton onClick={item.action}>
              {item.component}
            </IconButton>
          ))
        }
      </Grid>
    </Grid>
  )
}

export default Task
