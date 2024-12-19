import { TimeType } from '@duri-fe/utils';

/** hh:mm ~ hh:mm -> TimeType 변경 */
export const getTimeRange = (startTime: string, endTime: string): TimeType => {
  const startHour = parseInt(startTime.split(':')[0]);
  const endHour = parseInt(endTime.split(':')[0]);
  const timeRange: TimeType = {} as TimeType;

  for (let i = 9; i <= 20; i++) {
    const key = `time${i}` as keyof TimeType;
    timeRange[key] = i >= startHour && i <= endHour; // 해당 시간대를 선택 상태로 설정
  }

  return timeRange;
};

/** TimeType -> hh:mm ~ hh:mm 변경 */
export const getTimeStr = (
  timeList: TimeType,
): {
  startTime: string;
  endTime: string;
} => {
  const selectedTime = Object.keys(timeList).filter(
    (key) => timeList[key as keyof TimeType],
  );

  if (selectedTime.length === 0) {
    return { startTime: '', endTime: '' };
  }

  const start = selectedTime[0] || '';
  const end = selectedTime[selectedTime.length - 1] || '';

  const startTime = `${start.slice(4).padStart(2, '0')}:00`;
  const endTime = `${end.slice(4)}:00`;

  return { startTime: startTime, endTime: endTime };
};
