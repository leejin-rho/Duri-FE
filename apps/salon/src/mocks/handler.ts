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
];