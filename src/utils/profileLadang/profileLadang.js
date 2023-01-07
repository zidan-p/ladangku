import { intervalToDuration, add } from "date-fns";

export function generateProfileData({
    name,
    luasLadang ,
    tanggalTanam,
    banyakTanaman,
    umurPanen
}){
    let kepadatan = banyakTanaman / luasLadang; // item/m2
    let umur = intervalToDuration({
        start   : tanggalTanam,
        end     : new Date()
    })
    let tanggalPanen =  add(tanggalTanam, umurPanen)


    return {
        name,
        luasLadang ,
        tanggalTanam,
        banyakTanaman,
        umurPanen,
        kepadatan,
        umur,
        tanggalPanen
    }
}