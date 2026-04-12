export interface TokenInfo{
    token : string;
    passwordChanged : boolean;
}

export interface JwtPayload {
  sub?: string;
  email?: string;
  role?: string;
  exp?: number;
  token: string
}