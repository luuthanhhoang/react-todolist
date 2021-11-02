const initialState = {
  dataTodo: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      const newList = [...state.dataTodo];
      newList.push(action.payload);
      return {
        ...state,
        dataTodo: newList,
      };
    }
    default:
      return state;
  }
};
export default taskReducer;
