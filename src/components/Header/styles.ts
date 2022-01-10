import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 45px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
`;
export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.robotoBold};
  font-size: 12px;
`
export const Avatar = styled.Image`
  height: 45px;
  width: 45px;
  border-radius: 22.5px;
`

