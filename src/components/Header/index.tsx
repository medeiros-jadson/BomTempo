import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useAuth } from 'hooks/Auth';
import { Container, Text, Avatar, Menu, TextLogout } from './styles';

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const { user, Logout } = useAuth()

  function handleMenu() {
    if (activeMenu) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }

  async function handleLogout() {
    setActiveMenu(false)
    await Logout()
  }

  return (
    <Container>
      <Text>Olá {user.given_name}, tenha um bom tempo!</Text>
      <TouchableOpacity onPress={() => handleMenu()}>
        <Avatar source={{ uri: user.picture }} />
      </TouchableOpacity>
      {
        activeMenu ?
          <Menu>
            <TouchableOpacity onPress={() => handleLogout()}>
              <TextLogout>Sair</TextLogout>
            </TouchableOpacity>
          </Menu> : null
      }
    </Container>
  );
}

export default Header;
