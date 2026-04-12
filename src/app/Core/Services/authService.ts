import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { serviceStorage } from "./serviceStorage"
import {JwtPayload, TokenInfo} from "../../Shared/Models/Token-model/tokenModels";
import { UserFirstLogin, UserLogin, UserRegister } from "../../Shared/Models/user-model/user-model-request";
import { Observable, tap } from "rxjs";
import { environment } from "../../../environments/environment.developement";
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class authService {
    private readonly http: HttpClient = inject(HttpClient);
    private readonly storage: serviceStorage = inject(serviceStorage);

    connectedUser = signal<JwtPayload | null>(null);
    passwordChanged = signal<boolean>(false);

    constructor() {
    this.connectedUser.set(this.storage.getLocal<JwtPayload>("payload") ?? null);
    }

    login(login: UserLogin): Observable<TokenInfo> {
      return this.http.post<TokenInfo>(`${environment.apiUrl}/api/Auth/login`, login)
      .pipe(
          tap((token: TokenInfo) => this.decodeToken(token))
      );
    }
    private decodeToken(token: TokenInfo): void {
      const claims = jwtDecode<JwtPayload>(token.token);
      
      this.connectedUser.set({
        token: token.token,
        sub: claims.sub,
        email: claims.email,
        role: claims.role,
        exp: claims.exp
      });

      this.passwordChanged.set(token.passwordChanged);
      this.storage.setLocal("payload", this.connectedUser());
    }

    signup(signup: UserRegister): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/api/Auth/register`, signup);
    }

    logout() {
    this.connectedUser.set(null);
    this.storage.removeLocal("payload");
    }

    firstLoginUser(firstLogin: UserFirstLogin): Observable<void> {
      const id = this.connectedUser()?.sub;
      return this.http.patch<void>(`${environment.apiUrl}/api/User/${id}`, firstLogin)
    }
}

