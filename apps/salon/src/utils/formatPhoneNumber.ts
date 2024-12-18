export const formatPhoneNumber = (value: string): string => {
  // 숫자만 남기기
  const phoneNumber = value.replace(/[^0-9]/g, '');

  if (phoneNumber.length < 8) {
    return phoneNumber;
  }

  if (phoneNumber.startsWith('02')) {
    return phoneNumber.replace(/(\d{2})(\d{3,4})(\d{4})/, '$1-$2-$3');
  } else if (phoneNumber.length <= 10) {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  } else {
    return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  }
};
