import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventService } from '../../Core/Services/eventService';
import { EventResponse } from '../../Shared/Models/event-model/event-model-response';

@Component({
  selector: 'app-evenements',
  imports: [DatePipe, RouterLink],
  templateUrl: './evenements.html',
  styleUrl: './evenements.css',
})
export class Evenements implements OnInit {
  private readonly _eventService = inject(EventService);

  readonly pageSize = 10;

  events = signal<EventResponse[]>([]);
  currentPage = signal<number>(1);
  totalCount = signal<number>(0);
  loading = signal<boolean>(false);
  error = signal<boolean>(false);

  totalPages = computed(() => Math.ceil(this.totalCount() / this.pageSize));

  pages = computed(() => {
    const total = this.totalPages();
    return Array.from({ length: total }, (_, i) => i + 1);
  });

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.loading.set(true);
    this.error.set(false);

    this._eventService.getEvents(this.currentPage()).subscribe({
      next: (data) => {
        this.events.set(data.events);
        this.totalCount.set(data.nbreEvenements);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages() || page === this.currentPage()) return;
    this.currentPage.set(page);
    this.loadEvents();
  }
}
