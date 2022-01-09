import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  height: 50px;
  width: 287px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;