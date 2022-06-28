import React, { createContext, useReducer } from "react";
import axios from "../utils/axios";
import UserReducer from "../reducer/UserReducer";

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
    try {
      console.log(email);
      const response = await axios.post("/auth/login", {
        email,
        password,
      });
      console.log(response);
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
    } catch (err) {
      /*  dispatch({
        type: "LOGOUT",
        payload: err.response.data.error,
      }); */
    }
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        isAuthenticated: initialState.isAuthenticated,
        user: initialState.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
