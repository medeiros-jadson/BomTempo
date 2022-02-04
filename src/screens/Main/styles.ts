import styled from 'styled-components/native';
import { RobotoBold } from 'components/Typography';
import { ActivityIndicator } from 'react-native'

export const Adress = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;
export const TextCity = styled(RobotoBold)`
  font-size: 20px;
`;
export const TextAdress = styled(RobotoBold)`
  font-size: 13px;
`;
export const Loading = styled(ActivityIndicator).attrs({
  size: 'large',
  color: '#FFFF'
})`
  margin-top: 30%;
`
