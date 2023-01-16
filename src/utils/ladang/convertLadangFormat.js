import { parseISO, intervalToDuration, lastDayOfMonth, add, format } from "date-fns"


let dataexample = {
    id      : 1,
    profile : {
        name            : "ladang bawang",
        luasLadang      : 12000,
        tanggalTanam    : new Date(2022, 10, 12),
        banyakTanaman   : 30000,
        umurPanen       : {months: 3},
        jenisKomoditas  : "bawang merah"

    }        
}

let dbExample = {
    "LadangId": "63ba11594a994326bf1079fb",
        "name": "ladang tes",
        "kepadatan_tanaman": 5,
        "luas_ladang": 200,
        "komoditas": [],
        "todolist": [],
        "tanggal_tanam": "2023-01-08T00:00:00Z",
        "perkiraan_panen": "2023-02-10T00:00:00Z"
}

export function convertBackendToFrontendLadangFormat(ladang){
    let ladangFormated = {
        id      : ladang.LadangId,
        profile : {
            name            : ladang.name,
            luasLadang      : ladang.luas_ladang,
            tanggalTanam    : parseISO(ladang.tanggal_tanam),
            perkiraanPanen  : parseISO(ladang.perkiraan_panen),
            jenisKomoditas  : ladang.komoditas[0]?.name ?? "Loading...",
            banyakTanaman   : ladang.luas_ladang * ladang.kepadatan_tanaman,
            umurTanaman     : intervalToDuration({
                start           : parseISO(ladang.tanggal_tanam),
                end             : new Date()
            }),
            umurPanen       : intervalToDuration({
                start           : parseISO(ladang.tanggal_tanam),
                end             : parseISO(ladang.perkiraan_panen)
            })
        },
        todoList: ladang.todolist
    }

    return ladangFormated;
}


let ex = {
    "name":"ladang tes",
    "kepadatan_tanaman":5,
    "luas_ladang": 200,
    "tanggal_tanam":"2023-01-08",
    "perkiraan_panen":"2023-02-10"
}



export function convertFrontendToBackendLadangFormat(formLadang){
    let ladangFormated = {
        name : formLadang.namaLadang,
        kepadatan_tanaman : Math.ceil(parseInt(formLadang.jumlahTanaman) / parseInt(formLadang.luasLadang)),
        luas_ladang : parseInt(formLadang.luasLadang),
        tanggal_tanam : format(new Date(), "Y-MM-dd"),
        perkiraan_panen : format(add(new Date(), {months: formLadang.durasiPanen}), "Y-MM-dd")
    }

    console.log(ladangFormated);

    return ladangFormated
}