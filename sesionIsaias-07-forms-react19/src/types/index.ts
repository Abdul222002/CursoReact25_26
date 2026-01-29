export interface FormState {
  error: string | null;
  success: string | null;
}

export interface TodoData {
  nombre: string;
  fecha: string;
}

// export interface Login {
  export interface Login{
    email:string,
    password:string
  }
// }

// export interface Register {
  export interface Register{
    email:string,
    password:string,
    confirmPassword:string
  }
// }