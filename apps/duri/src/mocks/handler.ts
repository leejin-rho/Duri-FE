import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://api.example.com/api/user', () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),

  http.get(`https://api.example.com/api/quotation/:quotationId`, () => {
    return HttpResponse.json({
      shopIdx: 'shop-001',
      shopName: 'Duri',
      shopAddress: '서울시 강남구',
      shopImg: 'imgage.png',
      designerName: '김디자이너',
      designerCareer: '5',
      designerAge: '33',
      designerGender: '여성',
      groomingList: [
        { menu: '시술1', price: 50000 },
        { menu: '시술2', price: 30000 },
        { menu: '시술3', price: 70000 },
      ],
      groomingTotalPrice: 150000,
    });
  }),

  http.get(`https://api.example.com/api/coupon`, () => {
    return HttpResponse.json({
      couponName: '10% 할인 쿠폰',
      couponNum: 3,
    });
  }),
];
