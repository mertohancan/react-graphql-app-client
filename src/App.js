import React from 'react';
import { hot } from 'react-hot-loader';
import Router from './routes/Router';
import { AuthProvider } from './context/auth';

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default hot(module)(App);
