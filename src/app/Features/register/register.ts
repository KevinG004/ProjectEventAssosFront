import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  formData = {
    pseudo: '',
    motDePasse: '',
    genre: '',
    dateNaissance: '',
  };

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Formulaire soumis :', this.formData);
    }
  }
}
