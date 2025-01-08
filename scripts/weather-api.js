class WeatherApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://api.openweathermap.org/data/2.5/";
    }

    async getCurrentWeather(cityName) {
        try {
            const getWeatherResponse = await axios.get(
                `${this.baseUrl}weather?appid=${this.apiKey}&q=${cityName}&units=metric`);
            return getWeatherResponse.data;
        } catch (error) {
            console.error("An error occurred while fetching weather data:" + error);
        }
    }

}

const weatherApi = new WeatherApi("27e0594eeb57baa5c4e60de906267828");