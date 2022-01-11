import axios from 'axios';
const { API_BASE } = process.env
const { APPID } = process.env

const api = axios.create({
  baseURL: API_BASE,
  params: {
    appid: APPID,
    lang: 'pt_br',
    units: 'metric'
  }
});

export default api

