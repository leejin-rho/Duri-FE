import { create } from 'zustand';

interface GroomerStoreType {
  groomerId: number;
  setGroomerId: (id: number) => void;
}

const useGroomerStore = create<GroomerStoreType>((set) => ({
  groomerId: 0,
  setGroomerId: (id: number) => set({ groomerId: id }),
}));

export default useGroomerStore;
