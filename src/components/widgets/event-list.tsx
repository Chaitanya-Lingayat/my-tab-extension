import React from 'react';

interface Event {
    id: string;
    summary?: string;
    start: { dateTime?: string; date?: string };
    end: { dateTime?: string; date?: string };
    location?: string;
    description?: string;
}

interface EventListProps {
    events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
    if (!events || events.length === 0) {
        return <p className="text-center text-gray-500">No events for this date.</p>;
    }

    return (
        <div className="w-full">
            <div className="p-2">
                {events.map((event) => (
                    <div key={event.id} className="p-0.5">
                        <h3 className="text-sm font-semibold text-accent dark:text-accent">
                            {event.summary || 'No Title'}
                        </h3>
                        <p className="text-white dark:text-white text-xs">
                            {formatEventTime(event.start)} - {formatEventTime(event.end)}
                        </p>
                        {event.location && (
                            <p className="text-white dark:text-white text-xs">
                                <span className="font-semibold">Location:</span> {event.location}
                            </p>
                        )}
                        {/* {event.description && (
                            <p className="text-gray-700 mt-2">{event.description}</p>
                        )} */}
                    </div>
                ))}
            </div>
        </div>
    );
};

const formatEventTime = (eventTime: { dateTime?: string; date?: string }): string => {
    if (!eventTime) return '';
    const date = eventTime.dateTime || eventTime.date;
    if (!date) return '';
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    return new Date(date).toLocaleString(undefined, options);
};

export default EventList;