export const getShortenedAddress = (
  address: string,
  limit: number = 3,
): string => {
  if (!address) return '';
  return address.split(' ').slice(0, limit).join(' ');
};
