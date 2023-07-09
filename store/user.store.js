import { create } from "zustand";

import { devtools, persist, createJSONStorage } from "zustand/middleware";

const userStore = (set) => ({
  user: {},
  addUser: (userData) => {
    console.log("store", userData);
    set((state) => ({ user: userData }));
  },
  removeUser: () => {
    set((state) => ({ user: {} }));
  },
});

const useUserStore = create(userStore);
// devtools(
//   persist(userStore, {
//     name: "sits-user",
//     storage: createJSONStorage(() => localStorage),
//   })
// )

export default useUserStore;
