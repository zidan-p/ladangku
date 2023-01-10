import axios from "axios";


export async function getAllKomoditas(){
let url = "https://aplikasi-ladangku-production.up.railway.app/user/commodity/all"

    try {
        let {data : result} = await axios.get(url);
        return {success : true, data : result}
    } catch (error) {
        console.error(error);
        return {success : false, data : []}
    }
}