import styled from 'styled-components/native';
import { RobotoBold } from '../Typography';

export const Container = styled.View`
  width: 100%;
  height: 45px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;

export const Text = styled(RobotoBold)`
  font-size: 13px;
`;

export const Avatar = styled.Image`
  height: 45px;
  width: 45px;
  border-radius: 22.5px;
`;

export const Menu = styled.View`
  position: absolute;
  width: 90px;
  height: 45px;
  align-items: center;
  justify-content: center;
  right: 10px;
  top: 45px;
  border-top-left-radius: 30px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TextLogout = styled(RobotoBold)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary};
`;

