import { Component, inject } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, ValidatorFn, ValidationErrors, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserFirstLogin } from '../../Shared/Models/user-model/user-model-request';
import { authService } from '../../Core/Services/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;
  formInvalid = false;

  private readonly _authService = inject(authService);
  private readonly _router: Router = inject(Router)

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password: string = control.value ?? '';
      const hasUpperCase = /[A-Z]/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (!hasUpperCase || !hasSpecialChar) {
        return { passwordStrength: 'Le mot de passe doit contenir au moins une majuscule et un caractère spécial.' };
      }

      return null;
    };
  }

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      pseudo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      motDePasse: ['', [Validators.required, Validators.minLength(12), this.passwordValidator()]],
      genre: ['', Validators.required],                  
      dateNaissance: ['', Validators.required],                                  
    });
  }

  get pseudo() { return this.registerForm.get('pseudo')!; }          
  get motDePasse() { return this.registerForm.get('motDePasse')!; } 
  get genre() { return this.registerForm.get('genre')!; }         
  get dateNaissance() { return this.registerForm.get('dateNaissance')!; } 

  onSubmit(): void {                                                                   
    if (this.registerForm.valid) {                                                     
      const registerUser: UserFirstLogin = {
        userName: this.registerForm.value.pseudo,
        password: this.registerForm.value.motDePasse,
        birthDate: this.registerForm.value.dateNaissance,
        gender: this.registerForm.value.genre,
      }
      this._authService.firstLoginUser(registerUser).subscribe({
        next: () => {
          this._router.navigate(['accueil'])
        },
        error: () => {
          this.formInvalid = true; 
        }
      })            
    } 
    else {
      this.formInvalid = true;                                                         
    }
  }
}
