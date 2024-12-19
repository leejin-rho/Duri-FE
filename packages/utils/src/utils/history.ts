export const historyStr = (experience: number) => {
  if (experience % 12 === 0) {
    return `${experience / 12}년`;
  } else {
    const month = experience % 12;
    const year = (experience - month) / 12;
    if (year === 0) {
      return `${month}개월`;
    }
    return `${year}년 ${month}개월`;
  }
};
