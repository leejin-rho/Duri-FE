export interface TimeType {
  time9: boolean;
  time10: boolean;
  time11: boolean;
  time12: boolean;
  time13: boolean;
  time14: boolean;
  time15: boolean;
  time16: boolean;
  time17: boolean;
  time18: boolean;
}

export interface RequestProps extends TimeType {
  petId?: number;
  menu: string[];
  addMenu: string[];
  specialMenu: string[];
  design: string[];
  etc: string;
  day: Date;
  shopIds: number[];
}

export interface NewRequestListResponse {
  response: {
    requestId: number;
    userId: number;
    petId: number;
    petImage: string;
    petName: string;
    petAge: number;
    petBreed: string;
    petNeutering: boolean;
    petCharacter: string[];
    petDiseases: string[];
    requestCreatedAt: Date | string | null
  }
}