// import WeatherCard from './weather-card';

import { useEffect, useState } from "react";
import WeatherCard from "./weather-card";

// const WeatherWidget = () => {
//     const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

//     useEffect(() => {
//         const fetchWeatherData = async () => {
//             try {
//                 const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=ba3bcee83d9c524a7670e37072a21056&lang=en');
//                 const data = await response.json();
//                 setWeatherData(data);
//             } catch (error) {
//                 console.error('Error fetching weather data:', error);
//             }
//         };

//         fetchWeatherData();
//     }, []);

//     return (
//         <div className="grid grid-cols-2 gap-6 p-10">
//             <WeatherCard
//                 weatherType="Partly Cloudy"
//                 city="New York, USA"
//                 day="Monday"
//                 temperature={22}
//                 tempFahrenheit={71.6}
//                 icon={<svg className="w-12 h-12"><circle cx="24" cy="24" r="12" fill="yellow" /><path d="M24 12v-6M24 48v-6M12 24h-6M48 24h-6" stroke="white" strokeWidth="2" /></svg>}
//             />
//             {/* <WeatherCard
//                 weatherType="Rainy"
//                 city="New York, USA"
//                 day="Wednesday"
//                 temperature={25}
//                 tempFahrenheit={77}
//                 icon={<svg className="w-12 h-12"><path d="M22 30s-4 6-4 8 4 2 4 0-2-8-2-8z" fill="blue" /><circle cx="24" cy="18" r="12" fill="lightblue" /><path d="M22 32l2 8" stroke="white" strokeWidth="2" /></svg>}
//             />
//             <WeatherCard
//                 weatherType="Sunny"
//                 city="New York, USA"
//                 day="Tuesday"
//                 temperature={32}
//                 tempFahrenheit={89.1}
//                 icon={<svg className="w-12 h-12"><circle cx="24" cy="24" r="12" fill="yellow" /><path d="M24 12v-6M24 48v-6M12 24h-6M48 24h-6" stroke="white" strokeWidth="2" /></svg>}
//             />
//             <WeatherCard
//                 weatherType="Cloudy"
//                 city="New York, USA"
//                 day="Monday"
//                 temperature={20}
//                 tempFahrenheit={68.9}
//                 icon={<svg className="w-12 h-12"><circle cx="28" cy="28" r="12" fill="lightgray" /><circle cx="20" cy="24" r="10" fill="gray" /></svg>}
//             /> */}
//         </div>
//     );
// };

// export default WeatherWidget;

interface WeatherData {
    city: string;
    temperature: number;
    tempFahrenheit: string;
    weatherType: string;
    description: string;
    icon: string;
    timestamp: number;
}

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
        getLocationAndWeather();
    }, []);

    const getLocationAndWeather = (): void => {
        fetchWeather();
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(
        //         (position) => {
        //             const latitude = position.coords.latitude;
        //             const longitude = position.coords.longitude;
        //             fetchWeather(latitude, longitude); // Fetch weather data using coordinates
        //         },
        //         (error) => setErrorMessage('Location access denied. Unable to fetch weather data.')
        //     );
        // } else {
        //     setErrorMessage('Geolocation is not supported by this browser.');
        // }
    };

    const fetchWeather = (): void => {
        // const apiKey = 'ba3bcee83d9c524a7670e37072a21056'; // Replace with your OpenWeatherMap API key
        // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        // const url = `https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=ba3bcee83d9c524a7670e37072a21056&lang=en`;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=4a7ca246a7afb3011a9f3346b621b412&lang=en&units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const newWeatherData: WeatherData =
                {
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
            })
            .catch(() => setErrorMessage('Failed to fetch weather data.'));
    };

    const getDayOfWeek = (): string => {
        const options = { weekday: 'long' } as const;
        return new Intl.DateTimeFormat('en-US', options).format(new Date());
    };

    return (
        <div className="">
            <WeatherCard
                weatherType={weatherData?.weatherType || ''}
                city={location || ''}
                day={getDayOfWeek()}
                temperature={Math.round(weatherData?.temperature || 0)}
                tempFahrenheit={weatherData?.tempFahrenheit || ''}
                icon={<img src={`http://openweathermap.org/img/wn/${weatherData?.icon}@2x.png`} alt="weather icon" />}
            />
            {
                errorMessage && <div className="text-red-500">{errorMessage ? errorMessage : 'Loading...'}</div>
            }

        </div>
    );
};

export default WeatherWidget;
