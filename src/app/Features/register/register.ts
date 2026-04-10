import { Component } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, ValidatorFn, ValidationErrors, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;
  formInvalid = false;

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
      console.log('Formulaire :', this.registerForm.value);                     
    } else {
      this.formInvalid = true;                                                         
    }
  }
}
