export interface RegularShopType {
    shopId: number;
    imageURL: string;
    shopName: string;
    rating: number;
    reviewCnt: number;
    visitCnt: number;
}

export interface RecommendeShopType {
  shopId: number;
  imageURL: string;
  name: string;
  address: string;
  phone: string;
  shopTag1: string;
  shopTag2: string;
}
