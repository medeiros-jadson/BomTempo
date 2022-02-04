import React from 'react';
import { Container, Content, Line, Wrapper, Text, LogoSignIn } from './styles'
import BtnSignInGoogle from 'components/BtnSignInGoogle'
import { useAuth } from 'hooks/Auth';
import { Alert } from 'react-native';

const SignIn: React.FC = () => {
  const { signInWithGoogle } = useAuth()

  async function HandleSignIn() {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.log('SignIn/index.tsx line 13 ~ error ~' + error);
      Alert.alert('Atenção', 'Não foi possível realizar login')
    }
  }
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
        <BtnSignInGoogle onPress={() => HandleSignIn()} />
      </Content>
    </Container>
  );
}

export default SignIn;
