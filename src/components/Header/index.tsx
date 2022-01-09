import React from 'react';
import { Container, Text, Avatar } from './styles';

const Header: React.FC = () => {
  const image = { uri: 'https://avatars.githubusercontent.com/u/28719627?v=4' }
  return (
    <Container>
      <Text>Bem vindo Jadson, tenha um bom tempo!</Text>
      <Avatar source={image} />
    </Container>
  );
}

export default Header;