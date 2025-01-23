import { create } from 'zustand';

const useLocation = create((set) => ({
    place: '과학실', // 초기값 설정
    setPlace: (newPlace) => set({ place: newPlace }),
}));

export default useLocation;