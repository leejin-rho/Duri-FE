export const parseTimeStr = (time: string) => {
  const date = new Date(time);
  const isPM = date.getHours() >= 12;

  const startHour = isPM ? (date.getHours() - 12).toString() : date.getHours().toString();
  const startMinute = date.getMinutes().toString().padStart(2, '0');
  const startTimeStr = startHour + ':' + startMinute + (isPM ? ' PM' : ' AM');
  
  return startTimeStr;
}