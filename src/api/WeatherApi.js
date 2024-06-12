export const getWeather = async (city) => {
    const key = "d2b3e04d71524e12b7a185108242005"
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes&lang=es`
    const response = await fetch(url)
    const weather = await response.json()

    return weather
}