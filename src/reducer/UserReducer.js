const userReducer = (state, action) => {
  console.log(action);
  switch (action) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
      };

    case "LOGOUT":
      return {
        value: state.value - 1,
      };
  }
};

export default userReducer;
