import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface GroomerStoreType {
  groomerId: number;
  setGroomerId: (id: number) => void;
}

// Zustand 상태 생성
const useGroomerStore = create(
  persist<GroomerStoreType>(
    (set) => ({
      groomerId: 0,
      setGroomerId: (groomerId: number) => set({ groomerId }),
    }),
    {
      name: 'groomer-id',
      storage: createJSONStorage(() => sessionStorage), // sessionStorage 사용
    },
  ),
);

export default useGroomerStore;
