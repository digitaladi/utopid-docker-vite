import Axios from "../baseUrl";


const userService = {

//utilisateurs profile





//utilisateurs admin

getUsersAdmin : () => {
    return Axios.get("/admin/users")
},


addUserAdmin: (data) => {
return Axios.post("/admin/users/add", data)
}





}

export default userService





