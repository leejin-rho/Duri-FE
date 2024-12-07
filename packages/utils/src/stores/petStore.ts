import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface PetInfoProps {
  id: number;
  name: string;
  image: string | null;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  neutering: boolean;
  lastGrooming: Date | null;
}

interface PetStore {
  pet: PetInfoProps | null;
  setPetInfo: (pet: PetInfoProps) => void;
}

export const usePetStore = create(
  persist<PetStore>(
    (set) => ({
      pet: null,
      setPetInfo: (pet) => set({ pet }),
    }),
    {
      name: 'pet-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
