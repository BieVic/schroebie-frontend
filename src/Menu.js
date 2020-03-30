import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import logo from './assets/logo.png';

export default () => (
  <Menu>
    <Container>
      <Menu.Item as="a" header>
        <Image
          size="small"
          src={logo}
          onClick={() => window.location.reload()}
        />
      </Menu.Item>
    </Container>
    <Menu.Item>
    schroebie.gallery@gmail.com
    </Menu.Item>
  </Menu>
);
