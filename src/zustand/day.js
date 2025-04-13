import { create } from 'zustand';
import dayjs from 'dayjs';
import {useState} from "react";

const hour = new Date().getHours();
const minute = new Date().getMinutes();

const changeClass = () =>{
    const time = hour * 60 + minute;
    if(time >= 0 && time <= 16 * 60 + 9) return "7교시";
    else if(time >= 16 * 60 + 10 && time <= 18*60 + 9) return "8~9교시";
    else if(time >= 18*60 + 10 && time <= 24*60) return "10~11교시";
}

const useDay = create((set) => ({
    today: dayjs().format('YYYY-MM-DD dddd'),
    day:'',
    start:'',
    end:'',
    select:false,
    recordDay : '',
    period : "7교시",
    setDay:(newDay)=>set({day : newDay}),
    setStart:(newStart)=>set({start : newStart}),
    setEnd:(newEnd)=>set({end : newEnd}),
    setSelect:(newSelect)=>set({select : newSelect}),
    setRecordDay:(newRecordDay)=>set({recordDay : newRecordDay}),
    updatePeriod: () => set({ period: changeClass() })
}));

export default useDay;