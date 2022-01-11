import styled from 'styled-components/native';
import { css } from 'styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Platform } from 'react-native'

export const Image = styled.ImageBackground`
  flex: 1;
  align-items: center;
  padding: 15px 30px;
  ${Platform.OS == 'ios' && css`
    padding-top: ${getStatusBarHeight() + 15}px;
  `}
`;
