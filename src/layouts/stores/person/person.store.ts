import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/session-storage.storage";

interface PersonState {
  fistName: string;
  lastName: string;
}

interface Actions {
  setFistName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeAPi: StateCreator<PersonState & Actions> = (set) => ({
  fistName: "",
  lastName: "",
  setFistName: (value: string) => set((state) => ({ fistName: value })),
  setLastName: (value: string) => set((state) => ({ lastName: value })),
});

export const usePersonStore = create<PersonState & Actions>()(
  persist(storeAPi, {
    name: "person-storege",
    storage: customSessionStorage,
  }),
);
