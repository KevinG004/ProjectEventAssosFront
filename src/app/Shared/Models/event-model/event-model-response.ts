export interface EventResponse {
  id: number;
  nom: string;
  description: string;
  lieu: string | null;
  dateHeureDebut: string;
  dateHeureFin: string;
  minParticipants: number;
  maxParticipants: number;
  nbParticipants: number;
  waitList: boolean;
  dateLimiteInscription: string;
  coverImageUrl: string | null;
  categorieId: number;
}

export interface PaginatedEvents {
  items: EventResponse[];
  totalCount: number;
  page: number;
}

export enum StatusEvent {
  EnAttente = 0,
  EnCours = 1,
  Termine = 2,
  Annule = 3
}

export interface EventListResponse {
  coverImage: string | null;
  id: string;
  categorieName: string;
  name: string;
  description: string;
  place: string | null;
  dateTimeStart: string;
  dateTimeFinish: string;
  minParticipants: number;
  maxParticipants: number;
  status: StatusEvent;
  waitList: boolean;
  dateLimiteInscription: string;
  nbInscrits: number;
}

export interface EventDetailsResponse {
  coverImage: string | null;
  id: string;
  categorieName: string;
  name: string;
  description: string;
  place: string | null;
  dateTimeStart: string;
  dateTimeFinish: string;
  minParticipants: number;
  maxParticipants: number;
  status: StatusEvent;
  waitList: boolean;
  dateLimiteInscription: string;
  nbInscrits: number;
  participants: string[];
  waitListEvent: string[];
}
