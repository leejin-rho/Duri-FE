interface PetInfoType {
  breed?: string;
  gender?: string;
  weight?: number;
  age?: number;
}

/** "종, 성별, N세, Nkg" 형식으로 리턴  */
export const parsePetInfo = ({
  breed,
  gender,
  weight,
  age,
}: PetInfoType) => {
  const genderText = gender === 'M' ? '남아' : gender === 'F' ? '여아' : undefined;
  const info = [
    breed,
    genderText,
    age !== undefined ? `${age}세` : undefined,
    weight !== undefined ? `${weight}kg` : undefined,
  ]
  return info.filter((i) => i).join(', ');
}