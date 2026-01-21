import { API_CONFIG, type Plato } from "../../types"

//api hara un fecth a mi api para traer todos los platos
export const fecthPlatos=async():Promise<Plato[]>=>{
    const url=`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PLATOS}`
    try {
        const response=await fetch(url)
        if(!response.ok){
            throw new Error("Error al cargar los platos")
        }
        return await response.json()
    } catch (error) {
        console.log(error)
        throw error
    }
}