import { getTime,add,eachDayOfInterval } from "date-fns";


export function calculatePercent(
    tanggalTanam, 
    tanggalSekarang = new Date(), 
    bulanPanen
){
    let dayUntilNow = eachDayOfInterval({
        start: tanggalTanam,
        end: tanggalSekarang
    }).length;

    let dayUntilPanen = eachDayOfInterval({
        start: tanggalTanam,
        end: add(tanggalSekarang, bulanPanen)
    }).length

    return Math.round((dayUntilNow/dayUntilPanen)*100);
}