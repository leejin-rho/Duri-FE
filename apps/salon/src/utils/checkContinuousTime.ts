import { TimeType } from "@salon/assets/types/quotation";

/** 연속된 시간인지 확인 */
export const checkContinuousTime = (reservationTimeList: TimeType, requestDay: string) => {
  const selectedTime = Object.keys(reservationTimeList).filter(
    (key) => reservationTimeList[key as keyof TimeType]
  )

  if (selectedTime.length === 0) {
    return { isEmpty: true, startDateTime: '', endDateTime: '' };
  }

  const start = selectedTime[0] || '';
  const end = selectedTime[selectedTime.length - 1] || '';

  if (!start || !end) {
    return { isCountinuous: false, startDateTime: '', endDateTime: '' };
  }

  let isCountinuous = true;
  for (let i = 0; i < selectedTime.length - 1; i++) {
    const curr = parseInt(selectedTime[i].slice(4));
    const next = parseInt(selectedTime[i + 1].slice(4));
    if (next !== curr + 1) {
      isCountinuous = false;
      break;
    }
  }
  const startDateTime = `${requestDay}T${start.slice(4).padStart(2, '0')}:00:00Z`;
  const endDateTime = `${requestDay}T${end.slice(4).padStart(2, '0')}:59:59Z`;

  return { isCountinuous, startDateTime, endDateTime };
}