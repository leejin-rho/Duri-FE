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
  quotationReqId: number;
  requestId: number;
  createdAt: Date;
  expiredAt: Date;
  shops: {
    shopId: number;
    shopName: string;
  }[];
  isExpired: boolean;
}

export interface ResponseQuotationType {
  shopDetail: {
    shopName: string;
    shopAddress: string;
    shopPhone: string;
    groomerName: string;
  };
  quotationCreatedAt: string;

  menuDetail: {
    groomingMenu: string[];
    additionalGrooming: string[];
    specialCare: string[];
    designCut: string[];
    otherRequests: string;
  };

  quotation: {
    requestId: number;
    memo: string;
    startDateTime: string;
    endDateTime: string;
    priceDetail: {
      groomingPrice?: number;
      additionalPrice?: number;
      specialCarePrice?: number;
      designPrice?: number;
      customPrice?: number;
      totalPrice: number;
    };
    status?: string;
  };
}
