import { useQuery } from "@tanstack/react-query";

import { getLastReservation, getUpcomingReservation } from "../reservation";

export const useGetUpcomingReservation = () => {
    const { data } = useQuery({
      queryKey: ['getUpcomingReservation'],
      queryFn: () => getUpcomingReservation(),
      staleTime: 1000 * 60 * 10,
    });
    return data;
  };

  export const useGetLastReservation = () => {
    const { data } = useQuery({
      queryKey: ['getLastReservation'],
      queryFn: () => getLastReservation(),
      staleTime: 1000 * 60 * 10,
    });
    return data;
  };