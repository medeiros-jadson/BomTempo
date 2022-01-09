import React from 'react';
import { Container } from './styles';
import { TouchableOpacityProps } from 'react-native'
import Google from '../../../assets/google.svg'

interface Props extends TouchableOpacityProps { }

const BtnSignInGoogle: React.FC<Props> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <Google />
    </Container>
  );
}

export default BtnSignInGoogle;