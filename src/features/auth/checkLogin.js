


export function checkLogin(){

    if(JSON.stringify(localStorage.getItem("userProfile"))){
        if(
            (window.location.pathname === "/login") || 
            (window.location.pathname === "/signup")
        ){
            window.location = "/app/pengelolaan"
        }
    }
}