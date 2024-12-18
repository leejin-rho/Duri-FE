import { format } from 'date-fns';

export const DEFAULT_REQUEST_INFO = {
  petId: undefined,
  menu: [],
  addMenu: [],
  specialMenu: [],
  design: [],
  etc: '',
  day: format(new Date(), 'yyyy-MM-dd'),
  time9: false,
  time10: false,
  time11: false,
  time12: false,
  time13: false,
  time14: false,
  time15: false,
  time16: false,
  time17: false,
  time18: false,
  shopIds: [],
};
