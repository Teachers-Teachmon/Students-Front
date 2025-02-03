export default function patchDay(day){
    return day.split(" ").slice(0, -1).join(" ");
}