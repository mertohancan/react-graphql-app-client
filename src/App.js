import React from 'react';
import { hot } from 'react-hot-loader';
import Router from './routes/Router';
import { AuthProvider } from './context/auth';
import { LanguageProvider } from './context/language';

const App = () => (
  <LanguageProvider>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </LanguageProvider>
);

export default hot(module)(App);
