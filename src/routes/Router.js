import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import { Container } from 'semantic-ui-react';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Header from '../components/Header';
import { HOME, LOGIN, REGISTER } from './Paths';

const Router = () => (
  <BrowserRouter>
    <div className="ui container">
      <Container>
        <Header />
        <Route exact path={HOME} component={Home} />
        <Route exact path={LOGIN} component={Login} />
        <Route exact path={REGISTER} component={Register} />
      </Container>
    </div>
  </BrowserRouter>
);

export default Router;
