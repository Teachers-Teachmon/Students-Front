import { create } from 'zustand';
import dayjs from 'dayjs';

const useDay = create((set) => ({
    today: dayjs().format('YYYY-MM-DD dddd'),
    day:'',
    start:'',
    end:'',
    select:false,
    writeDay : '',
    setDay:(newDay)=>set({day : newDay}),
    setStart:(newStart)=>set({start : newStart}),
    setEnd:(newEnd)=>set({end : newEnd}),
    setSelect:(newSelect)=>set({select : newSelect}),
    setWriteDay:(newWriteDay)=>set({writeDay : newWriteDay})
}));

export default useDay;