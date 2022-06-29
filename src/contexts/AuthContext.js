import React, { createContext, useReducer } from "react";
import axios from "../utils/axios";
import UserReducer from "../reducers/UserReducer";

const initialState = {
  isAuthenticated: false,
  user: null,
};
const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};
export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Async Action
  async function login(email, password) {
    const response = await axios.post("/auth/login", {
      email,
      password,
    });
    const { status, user, authorization } = response.data;
    if (status === "success") {
      setSession(authorization.token.token);
      dispatch({
        type: "LOGIN",
        payload: {
          isAuthenticated: true,
          user: user,
        },
      });
    }
  }

  async function logout() {
    const response = await axios.post("/logout");
    setSession(null);
    dispatch({
      type: "LOGOUT",
    });
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
