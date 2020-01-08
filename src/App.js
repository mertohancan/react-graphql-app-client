import React from 'react';
import { hot } from 'react-hot-loader/root';
import Router from './routes/Router';
import { AuthProvider } from './context/auth';

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
