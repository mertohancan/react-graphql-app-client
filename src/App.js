import React from 'react';
import Router from './routes/Router';
import { AuthProvider } from './context/auth';

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default App;
