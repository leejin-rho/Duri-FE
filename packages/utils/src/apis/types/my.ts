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
