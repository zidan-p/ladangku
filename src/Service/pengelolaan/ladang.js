import axios from "axios";
import { convertFrontendToBackendLadangFormat } from "../../utils/ladang/convertLadangFormat";
import { generateTodoList } from "../../utils/ladang/generateTodoList";


export async function getAllLadang(idUser){
    let url = "https://aplikasi-ladangku-production.up.railway.app/user/ladang/all?userid="
    url += idUser;

    try {
        let {data : result} = await axios.get(url);
        return {success : true, data : result}
    } catch (error) {
        console.error(error);
        return {success : false, data : []}
    }
}


export async function addLadangToUser(idUser, data){
    let {
        name,
        kepadatan_tanaman,
        luas_ladang,
        tanggal_tanam,
        perkiraan_panen
    } = data;

    let buffer = {
        name,
        kepadatan_tanaman,
        luas_ladang,
        tanggal_tanam,
        perkiraan_panen
    } 

    let url = "https://aplikasi-ladangku-production.up.railway.app/user/ladang/add?userid="
    url += idUser;

    try {
        let {data : result} = await axios.post(url, buffer);
        return {success : true, data : result}
    } catch (error) {
        console.error(error);
        return {success : false, data : []}
    }
}


export async function addKommoditasToLadang(idUser,indexLadang, idKomoditas){
    
    let url = `https://aplikasi-ladangku-production.up.railway.app/user/ladang/commodity?userid=${idUser}&commodity=${idKomoditas}&ladang=${indexLadang}`

    try {
        axios.post(url);
    } catch (error) {
        console.error(error);
    }
}

//anjay emang
export async function addTodoListToLadang(userId, indexLadang, todoList = []){
    let url = 
    `https://aplikasi-ladangku-production.up.railway.app/user/ladang/addtodolist?userid=${userId}&ladang=${indexLadang}`

    try {
        todoList.forEach(todo => {
            axios.post(url, JSON.stringify(todo));
        })
    } catch (error) {
        console.error(error);
    }

}

//length asli, karena saya menggunakan lengh untuk index selanjutnya
export async function addLadang(idUser, data, ladangLength){
    let url = "https://aplikasi-ladangku-production.up.railway.app/user/ladang/add?userid="+idUser;
    const {profileLadang, todoList} = data;

    console.log(profileLadang, ladangLength, )
    console.log(generateTodoList(todoList ?? [],profileLadang.durasiPanen));

    try {
        let {data : result} = await axios.post(url, JSON.stringify(convertFrontendToBackendLadangFormat(profileLadang)));
        await addKommoditasToLadang(idUser, ladangLength, profileLadang.jenisTanaman);
        console.log(generateTodoList(todoList,profileLadang.durasiPanen));
        await addTodoListToLadang(idUser, ladangLength, generateTodoList(todoList ?? [],profileLadang.durasiPanen))

    } catch (error) {
        console.log(error);
    }

    // fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(profileLadang)
    // })
    // .then(res => res.json())
    // .then(result => console.log(result))
    // .catch(err => console.error(err))


}