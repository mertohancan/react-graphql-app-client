import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { Container } from "semantic-ui-react";
import { AuthProvider } from "./context/auth";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Header from "./components/Header";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="ui container">
          <Container>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Container>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
