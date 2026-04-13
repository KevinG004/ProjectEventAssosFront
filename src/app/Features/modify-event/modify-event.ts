import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-event',
  imports: [ReactiveFormsModule],
  templateUrl: './modify-event.html',
  styleUrl: './modify-event.css',
})
export class ModifyEvent implements OnInit {
  modifyEventForm: FormGroup;
  formInvalid = false;
  eventId: number | null = null;

  private readonly _route = inject(ActivatedRoute);

  constructor(private formBuilder: FormBuilder) {
    this.modifyEventForm = this.formBuilder.group({
      categoryId: ['', [Validators.required, Validators.min(1)]],
      nom: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      lieu: [''],
      dateHeureDebut: ['', Validators.required],
      dateHeureFin: ['', Validators.required],
      minParticipants: ['', [Validators.required, Validators.min(1)]],
      maxParticipants: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.eventId = Number(this._route.snapshot.paramMap.get('id'));
  }

  onSubmit(): void {
    if (this.modifyEventForm.invalid) {
      this.formInvalid = true;
      return;
    }
    console.log('Modification valide', this.modifyEventForm.value);
  }
}
