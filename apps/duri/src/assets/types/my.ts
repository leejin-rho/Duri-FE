export interface ReviewType {
  userId: number;
  userImageURL: string;
  comment: string;
  reviewId: number;
  createdAt: string;
  shopId: number;
  shopName: string;
  reviewImageURL: string;
}

export interface ReviewDetailType extends ReviewType {
  userName: string;
  rating: number;
  comment: string;
}
