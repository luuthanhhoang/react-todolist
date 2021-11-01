import React, { useState } from 'react';
import Task from '../../components/Task'

const Tasks = (props) => {

  const { dataTodo, setDataTodo } = props;

  const deleteTask = (check) => {
    const newData = [];

    for (let x of dataTodo) {
      if (x.id !== check.id) {
        newData.push(x);
      }
    }

    setDataTodo(newData);
  };

  const updateTask = () => {

  };

  const handleChangeCheckbox = (check) => {
    const newData = [];

    for (let x of dataTodo) {
      if (x.id === check.id) {
        newData.push({
          ...x,
          isChecked: !check.isChecked
        })

      } else {
        newData.push(x);
      }
    }

    setDataTodo(newData);
  };


  return <>
    {
      dataTodo?.map((item) => (
        <Task task={item} deleteTask={deleteTask} updateTask={updateTask} handleChange={handleChangeCheckbox} />
      ))
    }
  </>

}

export default Tasks
