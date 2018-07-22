//openweathermap.org api key
const API_KEY = 'b97ed3e053159cec42b6e04183589524';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FEATCH_WEATHER';
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  return {
    type: FETCH_WEATHER
  };
}
