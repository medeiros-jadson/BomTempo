import React from 'react';
import {
  Container,
  DescriptionClimate,
  TextCelsius,
  TextClimate,
  Wrapper
} from './styles';

interface Props {
  temperature: string,
  description: string
}

const ClimateInfo: React.FC<Props> = ({ temperature, description }) => {
  return (
    <Container>
      <Wrapper>
        <TextClimate>{temperature}</TextClimate>
        <TextCelsius>°C</TextCelsius>
      </Wrapper>
      <DescriptionClimate>{description}</DescriptionClimate>
    </Container>
  );
}

export default ClimateInfo;