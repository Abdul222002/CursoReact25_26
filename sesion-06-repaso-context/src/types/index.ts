//Tipos globales o los estados globales
export interface FamilyState {
    mensaje:string,
    contador:number
}

//Acciones a realizar
export interface FamilyActions {
    setMensaje:(mensaje:void)=>void,
    incrementarContador:()=>void,
    decrementarContador:()=>void
}

//Exportar los tipos

export type FamilyContextType= FamilyState & FamilyActions;