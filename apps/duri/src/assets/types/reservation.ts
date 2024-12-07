export interface UpcomingReservationProps {
    shopId: number;
    reservationDate: string;
    reserveDday: number; //예약 디데이
    imageURL:string; //매장 이미지
    name: string; //매장 이름
    address: string;
    phone: string;
    kakaoURL: string;
    price: number;
}

export interface LastReservationProps {
    reservationDate: Date;
}