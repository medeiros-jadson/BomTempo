import React from 'react';
import { useAuth } from '../../hooks/Auth';
import { Container, Text, Avatar } from './styles';

const Header: React.FC = () => {

  const { user } = useAuth()

  return (
    <Container>
      <Text>Olá {user.given_name}, tenha um bom tempo!</Text>
      <Avatar source={{ uri: user.picture }} />
    </Container>
  );
}

export default Header;