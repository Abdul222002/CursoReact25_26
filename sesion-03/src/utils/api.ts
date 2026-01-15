//api hara un fecth a mi api para traer todos los platos


export interface Plato {
    id:number,
    nombre:string,
    categoria:string,
    origen:string,
    calorias:number,
    ingredientes:string[],
    imagen:string
}

export const fecthPlatos=async():Promise<Plato[]>=>{
    try {
        const response=await fetch("http://192.168.50.120:1494/api/platos")
        if(!response.ok){
            throw new Error("Error al cargar los platos")
        }
        return await response.json()
    } catch (error) {
        console.log(error)
        return []
    
    }
}