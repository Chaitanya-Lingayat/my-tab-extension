import { useEffect, useState } from "react";
import WeatherCard from "./weather-card";

interface WeatherData {
    city: string;
    temperature: number;
    tempFahrenheit: string;
    weatherType: string;
    description: string;
    icon: string;
    timestamp: number;
}

const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=${OPEN_WEATHER_API_KEY}&lang=en&units=metric`

const WeatherWidget: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [location, setLocation] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const isDataOld = (timestamp: number): boolean => {
        const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
        return Date.now() - timestamp > oneDay;
    };

    useEffect(() => {
        // Check if there is existing weather data in localStorage
        const storedWeatherData = localStorage.getItem('weatherInfo');
        if (storedWeatherData) {
            const parsedData: WeatherData = JSON.parse(storedWeatherData);
            if (!isDataOld(parsedData.timestamp)) {
                // If data is not older than 24 hours, use the stored data
                setWeatherData(parsedData);
                setLocation(`${parsedData.city}`);
                return;
            }
        }
        // Fetch new weather data if no valid data is stored
        fetchWeather();
    }, []);

    const fetchWeather = async (): Promise<void> => {
        try {
            const response = await fetch(WEATHER_API_URL);
            const data = await response.json();

            const newWeatherData: WeatherData = {
                city: data.name,
                temperature: data.main.temp,
                tempFahrenheit: (data.main.temp * 9 / 5 + 32).toFixed(1),
                weatherType: data.weather[0].main,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                timestamp: Date.now()
            }

            setWeatherData(newWeatherData);
            setLocation(`${data.name}, ${data.sys.country}`);
            localStorage.setItem('weatherInfo', JSON.stringify(newWeatherData));
        } catch (error) {
            setErrorMessage('Failed to fetch weather data.');
        }
    };

    const getDayOfWeek = (): string => {
        const options = { weekday: 'long' } as const;
        return new Intl.DateTimeFormat('en-US', options).format(new Date());
    };

    return (
        <div className="">
            {weatherData && <WeatherCard
                weatherType={weatherData?.weatherType || ''}
                city={location || ''}
                day={getDayOfWeek()}
                temperature={Math.round(weatherData?.temperature || 0)}
                tempFahrenheit={weatherData?.tempFahrenheit || ''}
                icon={<img src={`http://openweathermap.org/img/wn/${weatherData?.icon}@2x.png`} alt="weather icon" />}
            />}
            {
                errorMessage && <div className="text-red-500">{errorMessage ? errorMessage : 'Loading...'}</div>
            }

        </div>
    );
};

export default WeatherWidget;
