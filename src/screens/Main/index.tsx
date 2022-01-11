import React, { useEffect, useState } from 'react';
import { Adress, TextCity, TextAdress, Loading } from './styles';
import Background from '../../components/Background'
import Header from '../../components/Header';
import ClimateInfo from '../../components/ClimateInfo';
import ClimateDetails from '../../components/ClimateDetails';
import BtnRoundedUpdate from '../../components/BtnRoundedUpdate';
import { GetLocation } from '../../services/Location/location.service';
import { FetchClimate } from '../../services/Climate/climate.service';
import { Alert } from 'react-native';
import { AdressDTO } from '../../dtos/AdressDTO';
import { ClimateDTO } from '../../dtos/ClimateDTO'


const Main: React.FC = () => {
  const [adress, setAdress] = useState<AdressDTO>({} as AdressDTO);
  const [climate, setClimate] = useState<ClimateDTO>({} as ClimateDTO)

  async function getAdressAndClimate() {
    if (adress.postalCode || climate.cod) {
      setAdress({} as AdressDTO)
      setClimate({} as ClimateDTO)
    }

    const responseLocation = await GetLocation()
    if (responseLocation == 'Permission denied') {
      Alert.alert('Permissão de localização negada', 'Não é possível continuar')
    } else {
      const { data } = await FetchClimate(responseLocation.subregion)
      setClimate(data)
      setAdress(responseLocation)
    }
  }

  useEffect(() => { getAdressAndClimate() }, []);

  return (
    <Background>
      < Header />
      {
        adress.postalCode && climate.cod ?
          <>
            <Adress>
              <TextCity>{adress.subregion}, {adress.region}</TextCity>
              <TextAdress>{adress.street}, {adress.district}</TextAdress>
            </Adress>
            <ClimateInfo
              temperature={climate.main.temp.toFixed(0)}
              description={climate.weather[0].description}
            />
            <ClimateDetails
              min={climate.main.temp_min.toFixed(0)}
              max={climate.main.temp_max.toFixed(0)}
              sensation={climate.main.feels_like.toFixed(0)}
            />
          </> :
          <Loading />
      }
      <BtnRoundedUpdate onPress={() => getAdressAndClimate()} />
    </Background >
  );
}

export default Main;