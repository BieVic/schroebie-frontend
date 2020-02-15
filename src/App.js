import React, {Fragment} from 'react';
import './App.css';

import { Container } from "semantic-ui-react";

import LandingPage from './LandingPage';
import Menu from './Menu';

const App = () => (
  <Fragment>
    <Menu />
    <Container>
      <LandingPage />
    </Container>
  </Fragment>
);

export default App;
