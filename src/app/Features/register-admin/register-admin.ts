import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emailValidators } from '../../Shared/Validators/emailValidator';

@Component({
  selector: 'app-register-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './register-admin.html',
  styleUrl: './register-admin.css',
})
export class RegisterAdmin {
  registerAdminForm: FormGroup;
  formInvalid = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerAdminForm = this.formBuilder.group({
      email: ['', [Validators.required, emailValidators()]],
      number: ['', [Validators.required, Validators.min(1),Validators.max(2)]],
    });
  }

  onSubmit(): void {
    if (this.registerAdminForm.valid) {
      console.log('Formulaire :', this.registerAdminForm.value);
    } else {
      this.formInvalid = true;
    }
  }
}
