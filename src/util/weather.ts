import axios from "axios";
import {getCachedWeatherData, setCachedWeatherData} from "@/util/database";

const apiKey = process.env.WEATHER_API_KEY
const getLocationKey = async (lat_lon: { lat: string, lon: string }) => {
    const locationKeyResult = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=${lat_lon.lat},${lat_lon.lon}&apikey=${apiKey}`)

    if (!locationKeyResult.data) {
        throw new Error("unable to fetch location key")
    }

    return locationKeyResult.data["Key"];
}

export const getWeatherForecast = async (lat_lon: { lat: string, lon: string }) => {

    const cachedForecastResult = await getCachedWeatherData()
    if (cachedForecastResult !== null) {
        return cachedForecastResult
    }

    const key = await getLocationKey(lat_lon)

    const forecastResult = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey}&metric=true`)

    if (!forecastResult.data) {
        throw new Error("unable to fetch location key")
    }

    await setCachedWeatherData(forecastResult.data)
    return forecastResult.data;
}