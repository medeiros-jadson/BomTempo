import React from 'react';
import { Image } from './styles';

const Background: React.FC = ({ children }) => {
  return (
    <Image source={require('../../../assets/background.png')} >
      {children}
    </Image>
  );
}

export default Background;