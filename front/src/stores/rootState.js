import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "mainStore",
  state: () => ({
    sliders: [
      { label: 1, value: "style", icon: "style", description: "Description 1" },
      { label: 2, value: "tv", icon: "live_tv", description: "Description 2" },
      {
        label: 3,
        value: "layers",
        icon: "layers",
        description: "Description 3",
      },
      { label: 4, value: "map", icon: "map", description: "Description 4" },
    ],
  }),

  actions: {
    testFn () {
      // console.log('axios', this);
    },
    updateSlide(id, payload) {
      // console.log("updateSlide", id, payload);
      if (!id || !payload) return;

      //   const index = this.findIndexById(id);

      //   if (index !== -1) {
      //     this.sliders[index] = generateFakeData();
      //   }
    },
  },

  getters: {
    slidesGetter: (state) => state.sliders,
  },
});
