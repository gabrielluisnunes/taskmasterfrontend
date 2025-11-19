import { create } from 'zustand';

interface UserProfile {
    name: string;
    title: string; 
    avatarUrl: string;
    isLoggedIn: boolean;
}


interface AppState {
    user: UserProfile;
    notificationsCount: number;
    
    
    login: (name: string, title: string, avatarUrl: string) => void;
    logout: () => void;
    incrementNotifications: (count: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
    
    user: {
        name: 'Gabriel',
        title: 'Dev',
        avatarUrl: 'https://i.pravatar.cc/150?img=5', 
        isLoggedIn: true,
    },
    notificationsCount: 0,

    
    login: (name, title, avatarUrl) => set({ 
        user: { name, title, avatarUrl, isLoggedIn: true } 
    }),
    
    logout: () => set({ 
        user: { name: '', title: '', avatarUrl: '', isLoggedIn: false } 
    }),

    incrementNotifications: (count) => set((state) => ({ 
        notificationsCount: state.notificationsCount + count 
    })),
}));