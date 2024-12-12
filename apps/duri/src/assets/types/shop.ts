export interface RegularShopType {
  shopId: number;
  imageURL: string;
  shopName: string;
  rating: number;
  reviewCnt: number;
  visitCnt?: number;
}

export interface RecommendedShopType {
  petId: number;
  recommendFeature: string;
  shopId: number;
  imageURL: string;
  shopName: string;
  address: string;
  phone: string;
  shopTag1: string;
  shopTag2: string;
  score: number;
}
