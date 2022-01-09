import React from 'react';
import { Container, Content, Line, Wrapper, Text, LogoSignIn } from './styles'
import BtnSignInGoogle from '../../components/BtnSignInGoogle'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <LogoSignIn />
        <Wrapper>
          <Line />
          <Text>
            Realize Login
          </Text>
          <Line />
        </Wrapper>
        <BtnSignInGoogle />
      </Content>
    </Container>
  );
}

export default SignIn;