export interface UpcomingReservationType {
  petId: number;
  lastSinceDay: number;
  shopId: number;
  imageURL: string;
  name: string;
  address: string;
  phone: string;
  kakaoURL: string;
  quotationId: number;
  reserveDday: number;
  reservationDate: string;
  price: string;
}

export interface LastReservationProps {
  reservationDate: Date;
}
