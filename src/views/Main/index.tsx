import React from 'react';
import { Adress, TextCity, TextAdress } from './styles';
import Background from '../../components/Background'
import Header from '../../components/Header';
import ClimateInfo from '../../components/ClimateInfo';
import ClimateDetails from '../../components/ClimateDetails';
import BtnRoundedUpdate from '../../components/BtnRoundedUpdate';

const Main: React.FC = () => {
  return (
    <Background>
      <Header />
      <Adress>
        <TextCity>Araguaína - TO</TextCity>
        <TextAdress>Rua Macieira n°600 Araguaína-Sul</TextAdress>
      </Adress>
      <ClimateInfo />
      <ClimateDetails />
      <BtnRoundedUpdate />
    </Background>
  );
}

export default Main;