import { useEffect, useState } from 'react';

const useClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (_time: Date) => {
        const hours = _time.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
        const minutes = _time.getMinutes().toString().padStart(2, '0');
        const seconds = _time.getSeconds().toString().padStart(2, '0');
        const day = _time.getDate().toString().padStart(2, '0');
        const month = (_time.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
        const year = _time.getFullYear();
        return { hours: formattedHours, minutes, seconds, day, month, year, ampm };
    };

    return formatTime(time);
}

const Clock = () => {
    const { hours, minutes, seconds, day, month, year, ampm } = useClock();
    return (
        <div className="flex space-y-4 text-white gap-4">
            <div className="flex space-x-4">
                <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                    <p className="text-4xl">{day}</p>
                    <span>date</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                    <p className="text-4xl">{month}</p>
                    <span>month</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                    <p className="text-4xl">{year}</p>
                    <span>year</span>
                </div>
            </div>
            <div className="flex space-x-4">
                <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                    <p className="text-4xl">{hours}</p>
                    <span>hours</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                    <p className="text-4xl">{minutes}</p>
                    <span>min</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                    <p className="text-4xl">{seconds}</p>
                    <span>sec</span>
                </div>
                <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                    <p className="text-4xl">{ampm}</p>
                    {/* <span>AM/PM</span> */}
                </div>
            </div>
        </div>
    )
}

export default Clock