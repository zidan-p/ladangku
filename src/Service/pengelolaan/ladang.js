import axios from "axios";



export async function getAllLadang(idUser){
    let url = "https://aplikasi-ladangku-production.up.railway.app/user/ladang/all?userid="
    url += idUser;

    try {
        let {data : result} = axios.get(url);
        return {success : true, data : result}
    } catch (error) {
        console.error(error);
        return {success : false, data : []}
    }
}


export async function addLadangToUser(idUser, data){
    let buffer = {
        name,
        kepadatan_tanaman,
        luas_ladang,
        tanggal_tanam,
        perkiraan_panen
    } = data
    let url = "https://aplikasi-ladangku-production.up.railway.app/user/ladang/add?userid="
    url += idUser;

    try {
        let {data : result} = axios.post(url, buffer);
        return {success : true, data : result}
    } catch (error) {
        console.error(error);
        return {success : false, data : []}
    }
}