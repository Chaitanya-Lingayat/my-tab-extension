import { create } from 'zustand';

type GoogleAuthStoreType = {
    isSignedIn: boolean;
    setIsSignedIn: (isSignedIn: boolean) => void;
};

export const useGoogleAuthStore = create<GoogleAuthStoreType>((set) => ({
    isSignedIn: false,
    setIsSignedIn: (isSignedIn) => set({ isSignedIn }),
}));

export const GoogleAuthStore = useGoogleAuthStore.getState;
