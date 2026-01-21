import { useEffect, useState } from "react";

//T --> Generics
export function useFetch<T>(url:string){
    //aqui guardaremos la data final 
    const [data, setData] = useState<T | null>(null )
    //mostrar o no un loop que diga cargando...
    const [loading, setLoading] = useState<boolean>(true)
    //Por si tenemos errores y fallamos
    const [error, setError] = useState<Error| null>(null)

    //efecto de que cuando cargue el componente(o renderice por primera vez hacemos useEffect) 
    useEffect(() => {
        setLoading(true)
        setError(null)
        //Creamos un mando a distacia para abortar el fetch
        const controller=new AbortController();
        // signal es una señal que va por el cable del fetch
        const{ signal } = controller
        const fetchData= async()=>{
            try {
                //Hacemos la llamada y pasamos la señal de cancelacion
                const response=await fetch(url,{signal})
                if(!response.ok){
                    setError(error as Error)
                    throw new Error("Error al cargar los datos")
                }
                const result=await response.json()
                setData(result)
                setError(null)
                setLoading(false)
            } catch (error) {
                setError(error as Error)
            }finally{
                setLoading(false)
            }
        }
        //******* UNO DE LOS ERRORES MAS UTILIZADOS ES QUE NO LLAMAIS A LA FUNCION DENTRO DE UseEsffect */
        fetchData()
        // el return se ejecuta cuando se va a desmontar el componente
        return () => {
            controller.abort()
        }
    }, [url])

    return {data, loading, error}
} 