export const getTask = () => ({
  type: "GET",
});

export const addTask = (newObject) => ({
  type: "ADD",
  payload: newObject,
});

export const deleteTask = (objectDelete) => ({
  type: "DELETE",
  payload: objectDelete,
});
