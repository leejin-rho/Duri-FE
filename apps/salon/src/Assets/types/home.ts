export interface ClosetGroomingType {
  petId: number;
  petName: string;
  breed: string;
  gender: string;
  age: number;
  weight: number;
  memo: string;
  userId: number;
  userPhone: string;
  quotationId: number;
  startTime: string;
  complete: boolean;
  isNow: boolean | null;
}