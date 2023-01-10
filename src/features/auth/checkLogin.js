


export function checkLogin(){

    if(JSON.parse(localStorage.getItem("userProfile"))){

        console.log()
        if(
            (window.location.pathname === "/login") || 
            (window.location.pathname === "/signup")
        ){
            window.location = "/app/pengelolaan"
        }
    }
}



export function checkLoged(){
    if(!JSON.parse(localStorage.getItem("userProfile"))){
        window.location.pathname = "/login"
    }
}
