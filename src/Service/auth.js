import axios from "axios";


export async function sendSigninData(data){
    let url = "https://aplikasi-ladangku-production.up.railway.app/user/signup";
    try {
        let {data : result} = await axios.post(url, JSON.stringify(data))
        return {success : true, data : result};
    } catch (err) {
        console.error(err);
        return {success : false, data : []}
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