import { getTime,add,eachDayOfInterval,intervalToDuration } from "date-fns";


function convertToDate(milis){
    return milis / (1000 * 3600 * 24);
}

export function calculatePercent(
    tanggalTanam, 
    tanggalSekarang = new Date(), 
    bulanPanen
){
    
    // let dayUntilNow = eachDayOfInterval({
    //     start: tanggalTanam,
    //     end: tanggalSekarang
    // }).length;

    // let dayUntilPanen = eachDayOfInterval({
    //     start: tanggalTanam,
    //     end: add(tanggalSekarang, bulanPanen)
    // }).length

    // let dayUntilNow = intervalToDuration({
    //     start: tanggalTanam,
    //     end: tanggalSekarang
    // }).days;

    // let dayUntilPanen = intervalToDuration({
    //     start: tanggalTanam,
    //     end: add(tanggalSekarang, bulanPanen)
    // }).days


    let dayUntilNow = tanggalTanam.getTime() - tanggalSekarang.getTime()

    let dayUntilPanen = tanggalTanam.getTime() - add(tanggalSekarang, bulanPanen).getTime()

    return Math.round((convertToDate(dayUntilNow)/convertToDate(dayUntilPanen))*100);
}