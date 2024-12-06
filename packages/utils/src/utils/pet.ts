/** "종, 성별, N세, Nkg" 형식으로 리턴  */
export const parsePetInfo = (
  breed: string,
  gender: string,
  weight: number,
  age: number,
) => {
  const genderText = gender === 'M' ? '남아' : gender === 'F' ? '여아' : '-';

  return `${breed}, ${genderText}, ${age}세, ${weight}kg`;
}