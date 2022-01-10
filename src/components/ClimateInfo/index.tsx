import React from 'react';
import {
  Container,
  DescriptionClimate,
  TextCelsius,
  TextClimate,
  Wrapper
} from './styles';

const ClimateInfo: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <TextClimate>24</TextClimate>
        <TextCelsius>°C</TextCelsius>
      </Wrapper>
      <DescriptionClimate>Nublado</DescriptionClimate>
    </Container>
  );
}

export default ClimateInfo;