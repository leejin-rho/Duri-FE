import { PetInfo } from '@duri-fe/ui';
export interface MyReviewResponseType {
  response: {
    reviewCnt: number;
    reviewList: [
      {
        userId: number;
        userImageURL: string;
        userName: string;
        reviewId: number;
        createdAt: string;
        rating: number;
        shopId: number;
        shopName: string;
        comment: string;
        reviewImageURL: string;
      },
    ];
  };
}

export interface PetListInfo {
  response: {
    petProfileList: PetInfo[];
  };
}

export interface PetInfo {
  id: number;
  name: string;
  image?: string;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  neutering?: boolean;
  lastGrooming?: string | null;
  character: string[];
  diseases: string[];
}

export interface UserInfo {
  response: {
    id: number;
    name: string;
    email: string;
    phone: string;
    profileImg: string | null;
    reservationCount: number;
    noShowCount: number;
    stamp: number;
  };
}
