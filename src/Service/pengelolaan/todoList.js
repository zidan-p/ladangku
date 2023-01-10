import axios from "axios";



export async function fetchTodoList(idUser){
    let url = "https://aplikasi-ladangku-production.up.railway.app/user/ladang/gettodo?userid="+idUser;

    try {
        let {data} = await axios.get(url);
        console.log(data);
        return data
    } catch (error) {
        console.error(error)
    }

}