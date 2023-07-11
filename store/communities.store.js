import { create } from "zustand";

import { devtools, persist, createJSONStorage } from "zustand/middleware";

const communitiesStore = (set) => ({
  communities: [],
  loadCommunities: (communitiesData) => {
    set((state) => ({ communities: communitiesData }));
  },
});

const useCommunitiesStore = create(communitiesStore);
// devtools(
//   persist(userStore, {
//     name: "sits-user",
//     storage: createJSONStorage(() => localStorage),
//   })
// )

export default useCommunitiesStore;
