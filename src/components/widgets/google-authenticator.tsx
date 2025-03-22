import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useGoogleAuthStore } from '../../stores/authenticationStore';

const GoogleAuthenticator = () => {
    const [isSignedIn, setIsSignedIn] = useGoogleAuthStore(useShallow(s => [s.isSignedIn, s.setIsSignedIn]));

    const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY as string;
    const DISCOVERY_DOCS = [
        'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
    ];
    const SCOPES = 'https://www.googleapis.com/auth/calendar.events.readonly';

    useEffect(() => {
        const initClient = () => {
            gapi.client
                .init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                    hosted_domain: 'http://localhost:5173'
                })
                .then(() => {
                    const authInstance = gapi.auth2.getAuthInstance();
                    setIsSignedIn(authInstance.isSignedIn.get());
                    // authInstance.isSignedIn.listen((isSignedIn: boolean) => {
                    //     setIsSignedIn(isSignedIn);
                    //     if (isSignedIn) {
                    //         listUpcomingEvents();
                    //     } else {
                    //         setEvents([]);
                    //     }
                    // });
                    authInstance.then(() => {
                        setIsSignedIn(authInstance.isSignedIn.get());
                        // console.log(...auth);
                        // listUpcomingEvents(new Date());
                    }).catch((_error: any) => {
                        console.error('Error initializing GAPI client:', _error);
                    });
                })
                .catch((error) => {
                    console.error('Error initializing GAPI client:', error);
                });
        };
        gapi.load('client:auth2', initClient);
    }, []);

    const handleAuthClick = () => {
        gapi.auth2.getAuthInstance().signIn();
    };

    const handleSignoutClick = () => {
        gapi.auth2.getAuthInstance().signOut();
    };

    return (
        <div className='absolute top-4 sm:top-20 right-4 sm:right-20 z-10'>
            {isSignedIn ? (
                <button
                    onClick={handleSignoutClick}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                    Sign Out
                </button>
            ) : (
                <button
                    onClick={handleAuthClick}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Sign In
                </button>
            )}
        </div>
    );
}

export default GoogleAuthenticator