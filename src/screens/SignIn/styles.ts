import styled from 'styled-components/native';
import Logo from '../../../assets/logo.svg';
import { RobotoBold } from '../../components/Typography';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const Content = styled.View`
  align-items: center;
`;
export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
`;
export const Line = styled.View`
  height: 1px;
  width: 90px;
  margin-top: 7px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
export const Text = styled(RobotoBold)`
  font-size: 12px;
  margin: 0 18px;
`;
export const LogoSignIn = styled(Logo)`
  margin-bottom: 32px;
`