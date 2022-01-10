import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import IconUpdate from '../../../assets/iconUpdate.svg'
import { Container } from './styles';

interface Props extends TouchableOpacityProps { }

const BtnRoundedUpdate: React.FC<Props> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <IconUpdate />
    </Container>
  );
}

export default BtnRoundedUpdate;