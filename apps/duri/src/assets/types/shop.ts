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
  shopName: string;
  address: string;
  phone: string;
  shopTags: string[];
}
