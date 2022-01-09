import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Image = styled.ImageBackground`
  flex: 1;
  align-items: center;
  padding: 0 30px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;
