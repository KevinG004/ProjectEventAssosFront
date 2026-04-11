import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emailValidators } from '../../Shared/Validators/emailValidator';
import { authService } from '../../Core/Services/authService';
import { Router } from '@angular/router';
import { UserRegister } from '../../Shared/Models/user-model/user-model-request';

@Component({
  selector: 'app-register-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './register-admin.html',
  styleUrl: './register-admin.css',
})
export class RegisterAdmin {
  private readonly _authService = inject(authService)
  private readonly _router: Router = inject(Router)

  registerAdminForm: FormGroup;
  formInvalid = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerAdminForm = this.formBuilder.group({
      email: ['', [Validators.required, emailValidators()]],
      roleId: ['', [Validators.required, Validators.min(1), Validators.max(2)]],
    });
  }

  onSubmit(): void {
    
    if (this.registerAdminForm.valid) {
      const register : UserRegister = {
        email: this.registerAdminForm.value.email,
        roleId: this.registerAdminForm.value.roleId
      }

      this._authService.signup(register).subscribe({
        next: () => {
            this._router.navigate(['login'])
        },
        error: () => {
            this.formInvalid = true;
        }
      })
    } 
    else{
      this.formInvalid = true;
    }
  }
}
