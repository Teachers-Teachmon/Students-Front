import { create } from 'zustand';

export const useStatusUpdate = create((set, get) => ({
    status: false,
    setStatus: () => set({ status: !get().status }),
}));