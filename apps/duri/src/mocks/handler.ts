import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://api.example.com/api/v1/user', () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),

  http.get(`https://api.example.com/api/v1/quotation/:quotationId`, () => {
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

  http.get(`https://api.example.com/api/v1/coupon`, () => {
    return HttpResponse.json({
      couponName: '10% 할인 쿠폰',
      couponNum: 3,
    });
  }),

  http.get('https://api.example.com/api/v1/shop/regular', () => {
    return HttpResponse.json([
      {
        shopIdx: '1',
        shopName: '댕댕샵',
        shopImg:
          'https://s3-alpha-sig.figma.com/img/be2d/15b9/6d6d9c56fd4e47388fa79cdfb8f3c4b6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1cOpSTMbxxMWxuaqTEsv4id96BVzSloxASEzxOzX87IO8neIKfYCuO8K04E5O8RniSoRCRo7JIlyuYn0AZd6Nda2W7tS8rN36WT7Ewzg-bnozvaUzH5Low6mzAGqUFhQY558k~oAoKolnCTzLEb1DSKR3Zq3Gj073fUrLrxyNnQmXqtbmMObX39c-Flw0~8kzap-ls787b58MKEnfTQ1AVHB8o-Y2~2mQWpFCMY8iKMjIsk84ToA0LhLmiGf5XkRLEtZwwWXFqsTXm0OFB2m~3uqsxFBkuW3gootLBj2ocEp400Za4j8C-IAFj1lNqPeoW9rpLdKLh0xOvoftqeaQ__',
        shopScore: 4.9,
        shopReview: 120,
      },
      {
        shopIdx: '2',
        shopName: '멍뭉샵',
        shopImg:
          'https://s3-alpha-sig.figma.com/img/be2d/15b9/6d6d9c56fd4e47388fa79cdfb8f3c4b6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1cOpSTMbxxMWxuaqTEsv4id96BVzSloxASEzxOzX87IO8neIKfYCuO8K04E5O8RniSoRCRo7JIlyuYn0AZd6Nda2W7tS8rN36WT7Ewzg-bnozvaUzH5Low6mzAGqUFhQY558k~oAoKolnCTzLEb1DSKR3Zq3Gj073fUrLrxyNnQmXqtbmMObX39c-Flw0~8kzap-ls787b58MKEnfTQ1AVHB8o-Y2~2mQWpFCMY8iKMjIsk84ToA0LhLmiGf5XkRLEtZwwWXFqsTXm0OFB2m~3uqsxFBkuW3gootLBj2ocEp400Za4j8C-IAFj1lNqPeoW9rpLdKLh0xOvoftqeaQ__',
        shopScore: 4.1,
        shopReview: 10,
      },
    ]);
  }),

  http.get('https://api.example.com/api/v1/shop/recommend', () => {
    return HttpResponse.json([
      {
        shopIdx: '1',
        shopName: '댕댕샵',
        shopImg:
          'https://s3-alpha-sig.figma.com/img/be2d/15b9/6d6d9c56fd4e47388fa79cdfb8f3c4b6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1cOpSTMbxxMWxuaqTEsv4id96BVzSloxASEzxOzX87IO8neIKfYCuO8K04E5O8RniSoRCRo7JIlyuYn0AZd6Nda2W7tS8rN36WT7Ewzg-bnozvaUzH5Low6mzAGqUFhQY558k~oAoKolnCTzLEb1DSKR3Zq3Gj073fUrLrxyNnQmXqtbmMObX39c-Flw0~8kzap-ls787b58MKEnfTQ1AVHB8o-Y2~2mQWpFCMY8iKMjIsk84ToA0LhLmiGf5XkRLEtZwwWXFqsTXm0OFB2m~3uqsxFBkuW3gootLBj2ocEp400Za4j8C-IAFj1lNqPeoW9rpLdKLh0xOvoftqeaQ__',
        shopAddress: '경기도 수원시 망포동',
        shopTag: ['노견전문', '소형견'],
      },
      {
        shopIdx: '2',
        shopName: '멍뭉샵',
        shopImg:
          'https://s3-alpha-sig.figma.com/img/be2d/15b9/6d6d9c56fd4e47388fa79cdfb8f3c4b6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1cOpSTMbxxMWxuaqTEsv4id96BVzSloxASEzxOzX87IO8neIKfYCuO8K04E5O8RniSoRCRo7JIlyuYn0AZd6Nda2W7tS8rN36WT7Ewzg-bnozvaUzH5Low6mzAGqUFhQY558k~oAoKolnCTzLEb1DSKR3Zq3Gj073fUrLrxyNnQmXqtbmMObX39c-Flw0~8kzap-ls787b58MKEnfTQ1AVHB8o-Y2~2mQWpFCMY8iKMjIsk84ToA0LhLmiGf5XkRLEtZwwWXFqsTXm0OFB2m~3uqsxFBkuW3gootLBj2ocEp400Za4j8C-IAFj1lNqPeoW9rpLdKLh0xOvoftqeaQ__',
        shopAddress: '경기도 수원시 망포동',
        shopTag: ['노견전문', '소형견'],
      },
    ]);
  }),

  http.get('https://api.example.com/api/v1/pet', () => {
    return HttpResponse.json(
      {
        petId:1,
        petName: "멍이",
        petImage: 'https://s3-alpha-sig.figma.com/img/be2d/15b9/6d6d9c56fd4e47388fa79cdfb8f3c4b6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1cOpSTMbxxMWxuaqTEsv4id96BVzSloxASEzxOzX87IO8neIKfYCuO8K04E5O8RniSoRCRo7JIlyuYn0AZd6Nda2W7tS8rN36WT7Ewzg-bnozvaUzH5Low6mzAGqUFhQY558k~oAoKolnCTzLEb1DSKR3Zq3Gj073fUrLrxyNnQmXqtbmMObX39c-Flw0~8kzap-ls787b58MKEnfTQ1AVHB8o-Y2~2mQWpFCMY8iKMjIsk84ToA0LhLmiGf5XkRLEtZwwWXFqsTXm0OFB2m~3uqsxFBkuW3gootLBj2ocEp400Za4j8C-IAFj1lNqPeoW9rpLdKLh0xOvoftqeaQ__',
        breed: "시츄",
        gender: "여아",
        age: "7살",
        weight: "1.4"
      },
    );
  }),
];
