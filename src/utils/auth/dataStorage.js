



export function setUserData(data){
    localStorage.setItem("userProfile", JSON.stringify(data));
}

export function clearUserData(){
    localStorage.removeItem("userProfile");
}