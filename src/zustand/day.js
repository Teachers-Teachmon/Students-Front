import { create } from 'zustand';
import dayjs from 'dayjs';

const useDay = create((set) => ({
    today: dayjs().format('YYYY-MM-DD dddd'),
    day:'',
    start:'',
    end:'',
    select:false,
    setDay:(newDay)=>set({day : newDay}),
    setStart:(newStart)=>set({start : newStart}),
    setEnd:(newEnd)=>set({end : newEnd}),
    setSelect:(newSelect)=>set({select : newSelect})
}));

export default useDay;