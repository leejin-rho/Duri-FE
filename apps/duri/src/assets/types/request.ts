export interface RequestType extends TimeType {
  petId?: number;
  menu: string[];
  addMenu: string[];
  specialMenu: string[];
  design: string[];
  etc: string;
  day: string;
  shopIds: number[];
}

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
