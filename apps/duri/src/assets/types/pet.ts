export interface PetInfoType {
  petId: number;
  image?: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  neutering?: boolean;
  lastGrooming?: string;
}
