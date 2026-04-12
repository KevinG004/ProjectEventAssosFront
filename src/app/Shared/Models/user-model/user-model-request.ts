export interface User {
  userName: string;
  birthDate: Date; 
  gender: string; 
}

export interface UserFirstLogin {
  userName: string;
  password: string;
  birthDate: Date; 
  gender: string;
}

export interface UserLogin {
  identifiant: string;
  password: string;
}

export interface UserRegister {
  email: string;
  roleId: number;
}