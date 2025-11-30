import { create } from "zustand";
import { persist } from "zustand/middleware";

// non-persisted store
export const useStore = create<{
  count: number;
  increment: () => void;
  decrement: () => void;
}>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// persisted store
export const usePersistedStore = create<{
  count: number;
  increment: () => void;
  decrement: () => void;
}>()(
  persist((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  }), { name: "zustand" })
);