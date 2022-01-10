import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: .7;
  background-color: ${({ theme }) => theme.colors.primary};
`;
