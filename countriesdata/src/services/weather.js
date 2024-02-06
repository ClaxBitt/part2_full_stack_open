import axios from "axios";

const WEATHER_API_KEY = import.meta.env.VITE_API_KEY
const URL = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}`

const getCapitalWeather = (capital) => {
  const request = axios.get(`${URL}&q=${capital}`)
  return request.then(response => response.data)
}

export default { getCapitalWeather }