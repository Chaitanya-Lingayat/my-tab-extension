import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import EventList from './event-list';
import { useGoogleAuthStore } from '../../stores/authenticationStore';

const GoogleEvents: React.FC = () => {
    const [events, setEvents] = useState([]);

    const isSignedIn = useGoogleAuthStore(s => s.isSignedIn);
    const listUpcomingEvents = (date: Date) => {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);

        // Set to end of the day
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        gapi.client.calendar.events
            .list({
                calendarId: 'primary',
                timeMin: startOfDay.toISOString(),
                timeMax: endOfDay.toISOString(),
                showDeleted: false,
                singleEvents: true,
                orderBy: 'startTime',
            })
            .then((response: any) => {
                const events = response.result.items;
                setEvents(events);
            })
            .catch((error: any) => {
                console.error('Error fetching events:', error);
            });
    };

    useEffect(() => {
        if (isSignedIn) {
            listUpcomingEvents(new Date());
        }
    }, [isSignedIn]);

    return (
        <>
            {/* Events List */}
            {isSignedIn && (
                <EventList events={events} />
            )}
        </>
    );
};

export default GoogleEvents;
