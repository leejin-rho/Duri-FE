import { RequestDetailProps } from "../types";

export const defaultRequestDetailData: RequestDetailProps = {
  "userName": "이영희",
  "userPhone": "010-2345-6789",
  "pet": {
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
  "groomer": {
    "image": "https://example.com/groomer1.jpg",
    "name": "한지민",
    "history": 5,
    "info": "강아지 전문 미용사입니다."
  },
  "quotationDetails": {
    "groomingMenu": "string",
    "additionalGrooming": "stringaa",
    "specialCare": "stringaa",
    "designCut": "stringaa",
    "otherRequests": "stringaaa",
    "day": "2024-12-06",
    "time9": false,
    "time10": false,
    "time11": false,
    "time12": false,
    "time13": true,
    "time14": true,
    "time15": true,
    "time16": true,
    "time17": false,
    "time18": false
  }
}