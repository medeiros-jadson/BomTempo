import styled from 'styled-components/native';
import { RobotoBold } from '../Typography';

export const Container = styled.View`
  width: 100%;
  border-radius: 5px;
  align-items: center;
  opacity: .7;
  padding: 30px 52px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContentMinMax = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Wrapper = styled.View``

export const TextTemp = styled(RobotoBold)`
  font-size: 20px;
`
export const ValueTemp = styled(RobotoBold)`
  font-size: 30px;
`
export const TextSensation = styled(RobotoBold)`
  font-size: 15px;
`
export const ValueSensation = styled(RobotoBold)`
  font-size: 50px;
`