import { apiClient } from "./axiosConfig";

export const loginUser = async(data) =>{
    const response = await apiClient.post("/login",data)
    return response.data
}

//get Users 
export const getUsers = async() =>{
    const response = await apiClient.get("/")
    return response.data
}

// checkUser
export const checkUser = async() =>{
    const response = await apiClient.get("/checkUser")
    return response.data
}

// logout
export const logout = async() =>{
    const response = await apiClient.post("/logout")
    return response.data
}
