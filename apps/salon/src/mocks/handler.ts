import { BASE_URL } from '@duri-fe/utils';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(BASE_URL+'/quotation/request/approved', () => {
    return HttpResponse.json(
      {
        "success": true,
        "response": [
          {
            "requestId": 0,
            "userId": 0,
            "petId": 0,
            "petImage": "string",
            "petName": "string",
            "petAge": 0,
            "petBreed": "string",
            "petWeight": 0,
            "petNeutering": true,
            "petCharacter": [
              "string"
            ],
            "petDiseases": [
              "string"
            ],
            "totalPrice": 0,
            "status": "string"
          }
        ],
        "error": {
          "message": "string",
          "status": 0
        }
      }
    );
  }),

  http.get(BASE_URL+'/quotation/request/reservation', () => {
    return HttpResponse.json(
      {
        "success": true,
        "response": [
          {
            "requestId": 2,
            "userId": 2,
            "petId": 2,
            "petDetailResponse": {
              "image": "https://example.com/dog2.jpg",
              "name": "초코",
              "age": 3,
              "gender": "F",
              "breed": "푸들",
              "weight": 10,
              "neutering": true,
              "character": [
                "사람을 잘 따름",
                "조용한 성격"
              ],
              "diseases": [
                "딱히 없음"
              ],
              "lastGrooming": "2023-10-14T15:00:00.000+00:00"
            },
            "groomerName": "한지민",
            "groomerImage": "https://example.com/groomer1.jpg",
            "totalPrice": 220,
            "dday": 0,
            "date": "2024-12-07",
            "startTime": "00:31:30",
            "endTime": "00:31:30"
          }
        ],
        "error": null
      }
    )
  })
];