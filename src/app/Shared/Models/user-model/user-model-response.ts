export interface LoginResponse {
  token: string;
  expiration: string;
  passwordChanged: boolean;
}

export interface UserResponse {
  id: string; 
  email: string;
  userName: string;
}

export interface Role {
  id: number;
  name: string;
  description?: string;
  users?: User;
}

export interface User {
  id: string;
  passwordChanged: boolean;
  roleId: number;
  userName?: string;
  email: string;
  password: string;
  birthDate?: string;
  gender?: string; 
  role: Role;
}

export interface UserResponseEmail {
  id: string; 
  userName?: string;
  birthDate?: string; 
  gender?: string; 
  role: Role;
}

export interface UserResponseUserName {
  id: string;
  email?: string;
  birthDate?: string; 
  gender?: string; 
  role: Role;
}

