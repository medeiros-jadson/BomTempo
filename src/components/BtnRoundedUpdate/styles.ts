import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  height: 65px;
  width: 65px;
  align-items: center;
  justify-content: center;
  border-radius: 32.5px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: 25px;
`;
