import API from '../api'

export async function FetchClimate(postalCode: string, countryCode: string) {
  try {
    return await API.get('/weather', {
      params: {
        zip: postalCode + ',' + countryCode
      }
    })
  } catch (error) {
    console.log(error);
  }
}