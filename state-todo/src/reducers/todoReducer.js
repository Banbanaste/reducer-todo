export const initState = ["my first Todo"];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(state, [...state, action.payload]);
      return [...state, action.payload];
    default:
      return state;
  }
};
