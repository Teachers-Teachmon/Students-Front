import { create } from 'zustand';
import dayjs from 'dayjs';

const useDay = create(() => ({
    day: dayjs().format('YYYY-MM-DD dddd'),
}));

export default useDay;