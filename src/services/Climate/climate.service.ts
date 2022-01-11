import API from '../api'

export async function FetchClimate(subregion: string) {
  try {
    return await API.get('/weather', {
      params: {
        q: subregion
      }
    })
  } catch (error) {
    console.log(error);
  }
}