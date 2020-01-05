import React, { createContext, useReducer } from 'react';

const AuthContext = createContext({
  user: null,
  // eslint-disable-next-line no-unused-vars
  login: data => {},
  logout: () => {},
});

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

const AuthProvider = props => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  const login = userData => {
    dispatch({
      type: 'LOGİN',
      payload: userData,
    });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AuthContext.Provider value={{ user: state.user, login, logout }} {...props} />;
};

export { AuthContext, AuthProvider };
