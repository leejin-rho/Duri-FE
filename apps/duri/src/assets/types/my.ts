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

export interface UserInfoType {
  id: number;
  name: string;
  email: string;
  phone: string;
  profileImg: string | null;
  reservationCount: number;
  noShowCount: number;
  stamp: number;
}
