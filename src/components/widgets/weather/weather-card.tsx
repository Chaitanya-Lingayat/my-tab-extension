interface WeatherCardProps {
    weatherType: string;
    city: string;
    day: string;
    temperature: number;
    tempFahrenheit: string;
    icon: JSX.Element;
}

const WeatherCard = ({ city, weatherType, temperature, icon }: WeatherCardProps) => {
    return (
        <div
            className="rounded-lg px-2 py-2 w-full sm:w-40 h-auto sm:h-20 flex flex-col justify-between text-white"
        // style={{ background: 'linear-gradient(135deg, #42a5f5, #00bcd4)' }}
        >
            <div className="flex flex-row justify-between items-center gap-2">
                <div className="flex flex-col justify-between">
                    <p className="text-base sm:text-md font-semibold text-black dark:text-white">{city}</p>
                    <p className="text-xs sm:text-sm text-black dark:text-white">{weatherType}</p>
                    {/* <p className="text-xs">{day}</p> */}
                    <p className="text-lg sm:text-md font-bold text-black dark:text-white">{temperature}°</p>
                    {/* <p className="text-xs">{tempFahrenheit} F</p> */}
                </div>
                <div className="flex flex-col justify-between">
                    {/* <p className="text-sm">{weatherType}</p> */}
                    <span className="h-16 w-16 sm:h-20 sm:w-20">{icon}</span>
                </div>
            </div>
        </div>

    );
};

export default WeatherCard;