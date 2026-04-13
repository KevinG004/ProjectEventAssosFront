import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  imports: [ReactiveFormsModule],
  templateUrl: './create-event.html',
  styleUrl: './create-event.css',
})
export class CreateEvent {
  createEventForm: FormGroup;
  formInvalid = false;
  selectedImage: File | null = null;
  imageError = false;
  imagePreview: string | null = null;

  constructor(private formBuilder: FormBuilder) {
    this.createEventForm = this.formBuilder.group({
      categorieId: ['', [Validators.required, Validators.min(1)]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      place: [''],
      dateTimeStart: ['', Validators.required],
      dateTimeFinish: ['', Validators.required],
      minParticipants: ['', [Validators.required, Validators.min(1)]],
      maxParticipants: ['', [Validators.required, Validators.min(1)]],
      waitList: [false],
      dateLimiteInscription: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.selectedImage) {
      this.imageError = true;
    }

    if (this.createEventForm.invalid || !this.selectedImage) {
      this.formInvalid = true;
      return;
    }

    console.log('Formulaire valide', this.createEventForm.value, this.selectedImage);
  }
}
