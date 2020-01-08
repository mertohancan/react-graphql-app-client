import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import Router from './routes/Router';
import { AuthProvider } from './context/auth';

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
