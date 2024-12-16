export interface PetInfoType {
  petId: number;
  imageURL?: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  neutering?: boolean;
  lastGrooming?: string;
}
