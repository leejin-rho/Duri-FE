export const DEFAULT_PET_INFO = {
  petId: -1,
  name: '',
  image: '',
  breed: '',
  age: -1,
  weight: -1,
  gender: '',
  lastGrooming: '',
};

// 성격 매핑
export const PERSONALITY_OPTION_LIST = [
  {
    key: 'character1',
    label: '예민해요',
  },
  {
    key: 'character2',
    label: '낯가려요',
  },
  {
    key: 'character3',
    label: '입질이 있어요',
  },
  {
    key: 'character4',
    label: '사람을 좋아해요',
  },
  {
    key: 'character5',
    label: '얌전해요',
  },
  {
    key: 'character6',
    label: '낯선 손길은 무서워요',
  },
];

//질환 매핑
export const DISEASE_OPTION_LIST = [
  {
    key: 'disease1',
    label: '피부 질환',
  },
  {
    key: 'disease2',
    label: '귀 염증',
  },
  {
    key: 'disease3',
    label: '관절 질환',
  },
  {
    key: 'disease4',
    label: '기저 질환',
  },
  {
    key: 'disease5',
    label: '딱히 없어요',
  },
];

//온보딩용, 정보 조회 페이지용 성별 매핑
export const GENDER_OPTION_LIST = [
  {
    key: 'M',
    label: '왕자님',
  },
  {
    key: 'F',
    label: '공주님',
  },
];

export const NEUTERED_OPTION_LIST = [
  {
    key: true,
    label: '네, 했어요!',
  },
  {
    key: false,
    label: '아니요, 아직 안했어요.',
  },
];
