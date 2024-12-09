import { useGetDetailRequest } from "@duri-fe/utils";

interface DetailRequestProps {
  requestId: number;
}

export const DetailRequest = ({
  requestId,
}: DetailRequestProps) => {
  const { data: request } = useGetDetailRequest(requestId);

  return (
    <div>
      {request?.userName}
    </div>
  );
}