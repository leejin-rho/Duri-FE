export interface RegularShopProps {
  shopIdx: string;
  shopName: string;
  shopImg: string;
  shopScore?: number;
  shopReview?: number;
}

export interface RecommendeShopProps extends RegularShopProps {
  shopAddress: string;
  shopTag: string[];
}
