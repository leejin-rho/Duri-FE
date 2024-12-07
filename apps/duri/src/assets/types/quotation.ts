export interface QuotationProps {
  salonIdx: string;
  salonName: string;
  salonAddress: string;
  salonImage: string;
  designerName: string;
  designerCareer: string;
  designerAge: number;
  designerGender: string;
  groomingList: { menu: string; price: number }[]; // 배열의 각 요소가 "{menu:"시술 이름", price:"금액"}" 형식의 객체
  groomingTotalPrice: number;
}

export interface RequestItemType {
  quotationId: number;
  createdAt: string;
  expiredAt: string;
  shops: {
    shopId: number;
    shopName: string;
  }[];
  expired: boolean;
}
