interface PetStatisticProps {
  agePetStatistic?: {
    standard: string;
    ratio: number;
    count: number;
  }[];

  diseasePetStatistic?: {
    standard: string;
    ratio: number;
    count: number;
  }[];

  characterPetStatistic?: {
    standard: string;
    ratio: number;
    count: number;
  }[];
}

export const PetStatistic = ({
  agePetStatistic,
  characterPetStatistic,
  diseasePetStatistic,
}: PetStatisticProps) => {
    console.log(agePetStatistic, diseasePetStatistic, characterPetStatistic);
  return <div>PetStatistic</div>;
};
