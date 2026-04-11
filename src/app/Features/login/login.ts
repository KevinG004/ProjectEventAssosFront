import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { authService } from '../../Core/Services/authService';
import { UserLogin } from '../../Shared/Models/user-model/user-model-request';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  formInvalid = false;

  private readonly _authService = inject(authService)
  private readonly _router: Router = inject(Router)

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      identifiant: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  onSubmit(): void {
      if (this.loginForm.valid) {
          const login: UserLogin = {
              identifiant: this.loginForm.value.identifiant,
              password: this.loginForm.value.password
          }

          this._authService.login(login).subscribe({
              next: () => {
                  if (!this._authService.passwordChanged()) {
                      this._router.navigate(['register']);
                  } else {
                      this._router.navigate(['accueil']);
                  }
              },
              error: () => {
                  this.formInvalid = true;
              }
          });
      } 
      else{
          this.formInvalid = true;
      }
  }
}
