import apiClient from "../../../Services/apiClient";

export const updateUser = async (userUpdate)=>{
    return  await apiClient.put('/users', userUpdate)
}