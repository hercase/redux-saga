const initialState = {
  name: "Hernan Casé"
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};
