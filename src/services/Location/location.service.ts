import * as Location from 'expo-location';

export async function GetLocation() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return 'Permission denied';
  }

  let { coords } = await Location.getCurrentPositionAsync({});
  if (coords) {
    const { latitude, longitude } = coords;
    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude
    })
    return response[0];
  }
}