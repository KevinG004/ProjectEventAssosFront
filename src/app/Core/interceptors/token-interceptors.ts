import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { authService } from '../Services/authService';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const token = inject(authService).connectedUser()?.token;

  if (!token) return next(req);
  
  const secured = req.clone({ setHeaders: { Authorization: `bearer ${token}` } });
  return next(secured);
};