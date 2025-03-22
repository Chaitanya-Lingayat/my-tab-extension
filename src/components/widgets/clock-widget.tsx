import { useEffect, useState } from 'react';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;

const ClockWidget = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time: Date) => {
        const hours = time.getHours();
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        const isPM = hours >= 12;
        const formattedHours = (hours % 12 || 12).toString().padStart(2, '0'); // Convert to 12-hour format

        return `${formattedHours}:${minutes}:${seconds} ${isPM ? 'PM' : 'AM'}`;
    };

    const formatDate = (time: Date) => {
        return time.toLocaleDateString(undefined, options); // Format like "Thursday, June 9 2022"
    };

    return (
        <div className="dark:text-white text-black rounded-lg py-2 px-1 w-full sm:w-56">
            <p className="text-2xl sm:text-4xl font-bold text-accent">{formatTime(time)}</p>
            <p className="text-sm sm:text-l mt-1">{formatDate(time)}</p>
        </div>
    );
};

export default ClockWidget;
