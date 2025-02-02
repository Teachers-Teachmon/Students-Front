import { create } from 'zustand';

const useLocation = create((set) => ({
    place: '', // 초기값 설정
    setPlace: (newPlace) => set({ place: newPlace }),
}));

export default useLocation;