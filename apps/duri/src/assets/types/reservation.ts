export interface UpcomingReservationProps {
    reservationDate: Date;
    salonImage:string;
    salonName: string;
    salonAddress: string;
    totalPrice: number;
    salonPhone: string;
}

export interface LastReservationProps {
    reservationDate: Date;
}