export interface Coordinates {
  lat: number;
  lon: number;
}

export interface DaumPostcodeResponseType {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  zonecode: string;
}
