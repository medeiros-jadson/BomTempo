import React from 'react';
import {
  Container,
  ContentMinMax,
  TextSensation,
  TextTemp,
  ValueTemp,
  Wrapper,
  ValueSensation
} from './styles';

interface Props {
  min: string,
  max: string,
  sensation: string
}

const ClimateDetails: React.FC<Props> = ({ min, max, sensation }) => {
  return (
    <Container >
      <ContentMinMax>
        <Wrapper>
          <TextTemp>Min</TextTemp>
          <ValueTemp>{min}</ValueTemp>
        </Wrapper>
        <Wrapper>
          <TextTemp>Max</TextTemp>
          <ValueTemp>{max}</ValueTemp>
        </Wrapper>
      </ContentMinMax>
      <TextSensation>Sensação térmica</TextSensation>
      <ValueSensation>{sensation}</ValueSensation>
    </Container>
  );
}

export default ClimateDetails;