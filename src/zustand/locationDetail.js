import { create } from 'zustand';

const useLocation = create((set) => ({
    place: '',
    setPlace: (newPlace) => set({ place: newPlace }),
}));

export default useLocation;