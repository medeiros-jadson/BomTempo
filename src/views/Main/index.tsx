import React from 'react';
import { Adress, TextCity } from './styles';
import Background from '../../components/Background'
import Header from '../../components/Header';

const Main: React.FC = () => {
  return (
    <Background>
      <Header />

      <Adress>
        <TextCity>Araguaína - TO</TextCity>
        {/* <TextAdress>Rua Macieira n°600 Araguaína-Sul</TextAdress> */}
      </Adress>

      {/* <Climate>
        <Wrapper>
          <TextClimate>Araguaína - TO</TextClimate>
          <TextCelsius>°C</TextCelsius>
        </Wrapper>
        <DescriptionClimate>Nublado</DescriptionClimate>
      </Climate> */}

    </Background>
  );
}

export default Main;