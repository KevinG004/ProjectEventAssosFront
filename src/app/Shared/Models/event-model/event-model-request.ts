export interface EventCreate {
  coverImage: File | null;
  categorieId: number;
  name: string;
  description: string;
  place: string | null;
  dateTimeStart: string;
  dateTimeFinish: string;
  minParticipants: number;
  maxParticipants: number;
  waitList: boolean;
  dateLimiteInscription: string;
}

export interface EventUpdate {
  categoryId: number;
  nom: string;
  description: string;
  lieu: string | null;
  dateHeureDebut: string;
  dateHeureFin: string;
  minParticipants: number;
  maxParticipants: number;
  image?: File;
}
