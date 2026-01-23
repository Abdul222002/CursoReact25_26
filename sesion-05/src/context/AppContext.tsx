import { createContext, type ReactNode } from "react";
import type { User } from "../types/AppContextType";



export const AppContext= createContext<AppContextType | null>(null);

interface AppProviderProps{
    children:ReactNode
}

export const AppProvider= ({children}:AppProviderProps) =>{
    const [state, setState] = useState<AppState>(
        {
            user:{
                id: "1",
                name: "Alumno Mañana",
                email: "alumno@mañana.  com",
                avatar: "https://i.pravatar.cc/150?img=22",
                role: "admin"
            },
            theme:"dark",
            laguage:"es"
        }
    )
    //Habra que usar el useEffect para cargar el idioma , theme al iniciar el componente
    
    
    const setUser=(user:User |null)=>{
        setState({...state,user})
        //setState({prev=>({...prev,user}))
    }

    //const setTheme=()
    //const setLanguage=()
    const value={
        ...state,
        setUser
        //setTheme,
        //setLanguage
    }

    return <AppContext value={value}>{children}</AppContext>
}




//Crear un formulario de login con usario sea admin admin@admin.com y pwass 1234 que permitara una ruta llamada dashboard que tendra un boton para cerrar la sesion para el resto de los usuarios solo estra disponible la ruta home /
//utilizar sooner para mostrar un mensaje de bienvenida al inciar sesion y uno de despendida al cerrrar sesion