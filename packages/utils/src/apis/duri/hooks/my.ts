import { useQuery } from "@tanstack/react-query";

import { getMyReviews } from "../my";

export const useGetMyReviews = () => {
    const { data } = useQuery({
      queryKey: ['getUpcomingReservation'],
      queryFn: () => getMyReviews(),
      staleTime: 1000 * 60 * 10,
    });
    return data;
  };