export function setUserData(data) {
  //validate data
  let bufferData = {
    created_at  : data.created_at,
    email       : data.email  ,
    first_name  : data.first_name,
    isActive    : data.isActive ,
    last_name   : data.last_name ,
    phone       : data.phone,
    updated_at  : data.updated_at,
    user_id     : data.user_id,
    _id         : data._id,
  };

  localStorage.setItem("userProfile", JSON.stringify(bufferData));
}

export function clearUserData() {
  localStorage.removeItem("userProfile");
}
