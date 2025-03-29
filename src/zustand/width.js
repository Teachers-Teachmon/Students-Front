import { create } from 'zustand';
import { useEffect } from 'react';

export const useWidth = create((set) => ({
    width: window.innerWidth,
    setWidth: (width) => set({ width })
}));