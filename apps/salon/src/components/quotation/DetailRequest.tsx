import { Flex, PetInfo } from "@duri-fe/ui";
import { useGetDetailRequest } from "@duri-fe/utils";

interface DetailRequestProps {
  requestId: number;
}

export const DetailRequest = ({
  requestId,
}: DetailRequestProps) => {
  const { data: request } = useGetDetailRequest(requestId);

  if (!request) return null;

  return (
    <Flex direction="column" width={337}>
      <PetInfo
        name={request.pet.name}
        breed={request.pet.breed}
        age={request.pet.age}
        weight={request.pet.weight}
        gender={request.pet.gender}
      />
    </Flex>
  );
}