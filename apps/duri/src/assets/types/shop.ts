export interface RegularShopProps {
  salonIdx: string;
  salonName:string;
  salonImage: string;
  salonScore?: number;
  salonReviewCount?: number;
}

export interface RecommendeShopProps extends RegularShopProps{
  salonAddress: string;
  salonTag: string[];
}