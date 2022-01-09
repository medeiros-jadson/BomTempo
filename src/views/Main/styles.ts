import styled from 'styled-components/native';

export const Adress = styled.View`
  align-items: center;
  margin-bottom: 56px;
`;

export const TextCity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoBold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`
