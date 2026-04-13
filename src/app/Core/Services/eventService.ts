import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.developement';
import { PaginatedEvents } from '../../Shared/Models/event-model/event-model-response';
import { EventCreate } from '../../Shared/Models/event-model/event-model-request';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly http: HttpClient = inject(HttpClient);

  getEvents(page: number = 1): Observable<PaginatedEvents> {
    const params = new HttpParams().set('page', page.toString());
    return this.http.get<PaginatedEvents>(`${environment.apiUrl}/api/Event`, { params });
  }

  createEvent(eventData: EventCreate): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/api/Event`, eventData);
  }
}