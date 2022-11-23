import { loginUser, getUserProfil, updateUserProfil } from "./ApiServices";

//post request
export function userLogin(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await loginUser({email, password})
            const token = res.data.body.token
            console.log(token);
            resolve(token)
        } catch (error) {
            reject(error)
        }
    })
}

export  async function userProfil(object, headers){
    return new Promise(async (resolve, reject) => {
        try {
            const res = await getUserProfil(object, headers)
            resolve(res)
        } catch (error) {
            reject(error)
        }
      })
}

export  async function updateProfil(object, headers){
    return new Promise(async (resolve, reject) => {
        try {
            const res = await updateUserProfil(object, headers)
            resolve(res)
        } catch (error) {
            reject(error)
        }
      })
}
    