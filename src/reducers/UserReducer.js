const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;

    case "LOGOUT":
      return {
        isAuthenticated: false,
        user: null,
      };
  }
};

export default userReducer;
