import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../../Core/Services/eventService';

@Component({
  selector: 'app-create-event',
  imports: [ReactiveFormsModule],
  templateUrl: './create-event.html',
  styleUrl: './create-event.css',
})
export class CreateEvent {
  private readonly _eventService = inject(EventService);
  private readonly _router = inject(Router);

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

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedImage = input.files[0];
      this.imageError = false;
    }
  }

  onSubmit(): void {
    if (this.createEventForm.invalid) {
      this.formInvalid = true;
      return;
    }

    const formValue = this.createEventForm.value;

    const eventData = {
      coverImage: null,
      categorieId: formValue.categorieId,
      name: formValue.name,
      description: formValue.description,
      place: formValue.place,
      dateTimeStart: formValue.dateTimeStart,
      dateTimeFinish: formValue.dateTimeFinish,
      minParticipants: formValue.minParticipants,
      maxParticipants: formValue.maxParticipants,
      waitList: formValue.waitList,
      dateLimiteInscription: formValue.dateLimiteInscription,
    };

    this._eventService.createEvent(eventData).subscribe({
      next: () => {
        this._router.navigate(['/evenements']);
      },
      error: () => {
        this.formInvalid = true;
      }
    });
  }
}