import React, { createContext, useReducer } from "react";

const AuthContext = createContext({
  user: null,
  // eslint-disable-next-line no-unused-vars
  login: data => {},
  logout: () => {}
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload
      };

    case "LOGOUT":
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  function login(userData) {
    dispatch({
      type: "LOGİN",
      payload: userData
    });
  }

  function logout() {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
