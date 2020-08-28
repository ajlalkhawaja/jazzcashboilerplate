import React from 'react';
import logo from './logo.svg';
import Navigation from './modules/common/components/Navigation/Navigation';
import Router from './Router';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <Router />
      </Container>
    </div>
  );
}

export default App;
