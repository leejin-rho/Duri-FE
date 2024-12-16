import { BASE_URL } from '@duri-fe/utils';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(BASE_URL + '/quotation/request/new', () => {
    return HttpResponse.json({
      success: true,
      response: [
        {
          requestId: 2,
          userId: 2,
          petId: 2,
          petImage:
            'https://s3-alpha-sig.figma.com/img/8c29/fc5b/55e75730409ed6ff39b368807143b832?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flUI1B-Bl~5cwqSYAgqYroBEts6ZN4Aa4zT0Nm91CHF0RsdVBLPESYMk~JviN3gbPl0ameQj8IEh5GiloS~6AtuxIhsQpWxEewYe~BrjtcHGpO0NU4Vq5HcWgI0v~o1NvS6dXNkLqVh~nxvf807K~ufbnaSOg6Du4IFzEbxmhAQS~Peb3I2~zn-g5yoRpFKkEwIbaaYr3NdGQ8XCgB~7j0Qb9yeTnYjrj25EjaO~QBumJ-aztNLkdj2Hw228~8GueNT9ttrI884wIeetJe36TXFknK-d8cjxrEdk3DPF8pqFYcuLNmztrPVNH0wUOqySp6MF~8cxRlEPJoKvLB3IiQ__',
          petName: '초코',
          petAge: 3,
          petGender: 'F',
          petBreed: '푸들',
          petWeight: 10,
          petNeutering: true,
          petCharacter: ['string'],
          petDiseases: ['string'],
          totalPrice: 0,
          status: 'string',
        },
      ],
      error: {
        message: 'string',
        status: 0,
      },
    });
  }),

  http.get(BASE_URL + '/quotation/request/approved', () => {
    return HttpResponse.json({
      success: true,
      response: [
        {
          requestId: 2,
          userId: 2,
          petId: 2,
          petImage:
            'https://s3-alpha-sig.figma.com/img/8c29/fc5b/55e75730409ed6ff39b368807143b832?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flUI1B-Bl~5cwqSYAgqYroBEts6ZN4Aa4zT0Nm91CHF0RsdVBLPESYMk~JviN3gbPl0ameQj8IEh5GiloS~6AtuxIhsQpWxEewYe~BrjtcHGpO0NU4Vq5HcWgI0v~o1NvS6dXNkLqVh~nxvf807K~ufbnaSOg6Du4IFzEbxmhAQS~Peb3I2~zn-g5yoRpFKkEwIbaaYr3NdGQ8XCgB~7j0Qb9yeTnYjrj25EjaO~QBumJ-aztNLkdj2Hw228~8GueNT9ttrI884wIeetJe36TXFknK-d8cjxrEdk3DPF8pqFYcuLNmztrPVNH0wUOqySp6MF~8cxRlEPJoKvLB3IiQ__',
          petName: '초코',
          petAge: 3,
          petGender: 'F',
          petBreed: '푸들',
          petWeight: 10,
          petNeutering: true,
          petCharacter: ['string'],
          petDiseases: ['string'],
          totalPrice: 0,
          status: 'string',
          requestCreatedAt: '2024-12-07T09:31:48.965428',
        },
      ],
      error: {
        message: 'string',
        status: 0,
      },
    });
  }),

  http.get(BASE_URL + '/quotation/request/reservation', () => {
    return HttpResponse.json({
      success: true,
      response: [
        {
          requestId: 2,
          userId: 2,
          petId: 2,
          petDetailResponse: {
            image:
              'https://s3-alpha-sig.figma.com/img/8c29/fc5b/55e75730409ed6ff39b368807143b832?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flUI1B-Bl~5cwqSYAgqYroBEts6ZN4Aa4zT0Nm91CHF0RsdVBLPESYMk~JviN3gbPl0ameQj8IEh5GiloS~6AtuxIhsQpWxEewYe~BrjtcHGpO0NU4Vq5HcWgI0v~o1NvS6dXNkLqVh~nxvf807K~ufbnaSOg6Du4IFzEbxmhAQS~Peb3I2~zn-g5yoRpFKkEwIbaaYr3NdGQ8XCgB~7j0Qb9yeTnYjrj25EjaO~QBumJ-aztNLkdj2Hw228~8GueNT9ttrI884wIeetJe36TXFknK-d8cjxrEdk3DPF8pqFYcuLNmztrPVNH0wUOqySp6MF~8cxRlEPJoKvLB3IiQ__',
            name: '초코',
            age: 3,
            gender: 'F',
            breed: '푸들',
            weight: 10,
            neutering: true,
            character: ['사람을 잘 따름', '조용한 성격'],
            diseases: ['딱히 없음'],
            lastGrooming: '2023-10-14T15:00:00.000+00:00',
          },
          groomerName: '한지민',
          groomerImage:
            'https://s3-alpha-sig.figma.com/img/f20d/81d2/49c56662ac9bb09ec774324f866934de?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AgiZSnY6SflgT2CFcJNQF5jYXiDfc68oxS1ywO3JOBgKaVo9fCC94iVxi3G1kKGPxxErBv~xg0dov5JS97OAC0Q7XeAboylEXD0WcQypOOrqnAHsezCHutMDk-wWK1BylcTziztuOVOnL6v4Xu00LjNCpm5Sgogqto-bxs6p-jkq4UkKDWf5IWuh096Jn2W4ypOKQEXBnDGGkp57z5pvHWyWH9nROJS8xv0ORsbtyt-QUXbBGzIZ53i-~lfemuQm5wyAUh72xn5F0WwQv687glBwZXZ6KsDOVCee~SW1Wvito6Kn~96PXVtDsbZRWADP3tadWT3hv2DcAqUt7Aeb~Q__',
          totalPrice: 220,
          dday: 0,
          date: '2024-12-07',
          startTime: '2024-12-12T06:53:16.989Z',
          endTime: '2024-12-12T06:53:16.989Z',
        },
      ],
      error: null,
    });
  }),

  http.get(BASE_URL + '/quotation/request/reservation/complete', () => {
    return HttpResponse.json({
      success: true,
      response: [
        {
          requestId: 2,
          userId: 2,
          petId: 2,
          petDetailResponse: {
            image:
              'https://s3-alpha-sig.figma.com/img/8c29/fc5b/55e75730409ed6ff39b368807143b832?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flUI1B-Bl~5cwqSYAgqYroBEts6ZN4Aa4zT0Nm91CHF0RsdVBLPESYMk~JviN3gbPl0ameQj8IEh5GiloS~6AtuxIhsQpWxEewYe~BrjtcHGpO0NU4Vq5HcWgI0v~o1NvS6dXNkLqVh~nxvf807K~ufbnaSOg6Du4IFzEbxmhAQS~Peb3I2~zn-g5yoRpFKkEwIbaaYr3NdGQ8XCgB~7j0Qb9yeTnYjrj25EjaO~QBumJ-aztNLkdj2Hw228~8GueNT9ttrI884wIeetJe36TXFknK-d8cjxrEdk3DPF8pqFYcuLNmztrPVNH0wUOqySp6MF~8cxRlEPJoKvLB3IiQ__',
            name: '초코',
            age: 3,
            gender: 'F',
            breed: '푸들',
            weight: 10,
            neutering: true,
            character: ['사람을 잘 따름', '조용한 성격'],
            diseases: ['딱히 없음'],
            lastGrooming: '2023-10-14T15:00:00.000+00:00',
          },
          groomerName: '한지민',
          groomerImage:
            'https://s3-alpha-sig.figma.com/img/f20d/81d2/49c56662ac9bb09ec774324f866934de?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AgiZSnY6SflgT2CFcJNQF5jYXiDfc68oxS1ywO3JOBgKaVo9fCC94iVxi3G1kKGPxxErBv~xg0dov5JS97OAC0Q7XeAboylEXD0WcQypOOrqnAHsezCHutMDk-wWK1BylcTziztuOVOnL6v4Xu00LjNCpm5Sgogqto-bxs6p-jkq4UkKDWf5IWuh096Jn2W4ypOKQEXBnDGGkp57z5pvHWyWH9nROJS8xv0ORsbtyt-QUXbBGzIZ53i-~lfemuQm5wyAUh72xn5F0WwQv687glBwZXZ6KsDOVCee~SW1Wvito6Kn~96PXVtDsbZRWADP3tadWT3hv2DcAqUt7Aeb~Q__',
          totalPrice: 220,
          dday: 0,
          date: '2024-12-07',
          startTime: '2024-12-12T06:53:16.989Z',
          endTime: '2024-12-12T06:53:16.989Z',
        },
      ],
      error: {
        message: 'string',
        status: 0,
      },
    });
  }),

  http.get(BASE_URL + '/quotation/2', () => {
    return HttpResponse.json({
      success: true,
      response: {
        shopDetail: {
          shopName: '강남 미용샵',
          shopAddress: '서울시 강남구',
          shopPhone: '02-123-4567',
          groomerName: '한지민',
        },
        quotationCreatedAt: '2024-12-07T09:31:48.965428',
        petDetail: {
          image: 'https://example.com/dog2.jpg',
          name: '초코',
          age: 3,
          gender: 'F',
          breed: '푸들',
          weight: 10,
          neutering: true,
          character: ['사람을 잘 따름', '조용한 성격'],
          diseases: ['딱히 없음'],
          lastGrooming: '2023-10-14T15:00:00.000+00:00',
        },
        menuDetail: {
          groomingMenu: ['string'],
          additionalGrooming: ['stringaa'],
          specialCare: ['stringaa'],
          designCut: ['stringaa'],
          otherRequests: 'stringaaa',
          day: '2024-12-06',
          time9: false,
          time10: false,
          time11: false,
          time12: false,
          time13: true,
          time14: true,
          time15: true,
          time16: true,
          time17: false,
          time18: false,
        },
        quotation: {
          requestId: 2,
          priceDetail: {
            groomingPrice: 220,
            additionalPrice: 220,
            specialCarePrice: 220,
            designPrice: 220,
            customPrice: 220,
            totalPrice: 220,
          },
          memo: '2222string',
          startDateTime: '2024-12-07T00:31:30.495',
          endDateTime: '2024-12-07T00:31:30.495',
        },
        status: '결제 완료',
      },
      error: null,
    });
  }),
];
