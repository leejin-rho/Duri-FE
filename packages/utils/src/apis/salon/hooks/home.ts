import { getClosetGrooming } from "@duri-fe/utils";
import { useQuery } from "@tanstack/react-query";

/** 진행중인 시술 */
export const useGetClosetGrooming = () => {
  const { data, isPending } = useQuery({
    queryKey: ['getClosetGrooming'],
    queryFn: () => getClosetGrooming(),
    enabled: true,
    staleTime: Infinity,
  })

  return { data, isPending };
}