import axios from "axios";


export async function sendSigninData(data){
    let url = "https://aplikasi-ladangku-production.up.railway.app/user/signup";
    try {
        let {data : result} = await axios.post(url, JSON.stringify(data))
        return {success : true, data : result};

    //catatan untuk ozi, untuk status codeny supaya sesuai dengan kontexnya
    } catch (err) {
        console.error(err);
        if(Array.isArray(err.response.data.error)){
            return {success : true, data : []}
        }
        return {success : false, data : err.response.data}
    }
}


export async function sendLoginData(data){
    let url = "https://aplikasi-ladangku-production.up.railway.app/user/login";
    try {
        let {data : result} = await axios.post(url, JSON.stringify(data))
        return {success : true, data : result};
    } catch (err) {
        console.error(err);
        if(err.response.status === 302){
            return {success : true, data : err.response.data}
        }
        return {success : false, data : []}
    }
}



export function logout(){

}