import React, { useEffect, useState } from 'react';
import { Adress, TextCity, TextAdress, Loading } from './styles';
import Background from '../../components/Background'
import Header from '../../components/Header';
import ClimateInfo from '../../components/ClimateInfo';
import ClimateDetails from '../../components/ClimateDetails';
import BtnRoundedUpdate from '../../components/BtnRoundedUpdate';
import { GetLocation } from '../../services/Location';
import { Alert } from 'react-native';

interface AdressProps {
  city: String,
  country: String,
  district: String,
  isoCountryCode: String,
  name: String,
  postalCode: String,
  region: String,
  street: String,
  streetNumber: String,
  subregion: String,
  timezone: String,
}

const Main: React.FC = () => {
  const [adress, setAdress] = useState<AdressProps>({} as AdressProps);

  async function getAdress() {
    if (adress.postalCode) {
      setAdress({} as AdressProps)
    }
    const response = await GetLocation()
    if (response == 'Permission denied') {
      Alert.alert('Permissão de localização negada', 'Não é possível continuar')
    } else {
      console.log(response);
      setAdress(response)
    }
  }

  useEffect(() => { getAdress() }, []);

  return (
    <Background>
      < Header />
      {
        adress.postalCode ?
          <>
            <Adress>
              <TextCity>{adress.subregion}, {adress.region}</TextCity>
              <TextAdress>{adress.street}, {adress.district}</TextAdress>
            </Adress>
            <ClimateInfo />
            <ClimateDetails />
            <BtnRoundedUpdate onPress={() => getAdress()} />
          </> :
          <Loading />
      }
    </Background >
  );
}

export default Main;