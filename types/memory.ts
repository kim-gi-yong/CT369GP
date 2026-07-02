export interface MemoryForm {
  name: string;
  birthDate: string;
  deathDate: string;
  introduction: string;
  photo: File | null;
}

export interface Memory {
  id: string;
  name: string;
  birthDate: string;
  deathDate: string;
  introduction: string;
  photoUrl: string;
  createdAt: string;
}