// import { createStore } from "vuex";
import { createStore } from "./gvuex";

const store = createStore({
  state() {
    return {
      count: 666,
    };
  },
  mutations: {
    add(state) {
      console.log("state", state);
      state.count++;
    },
  },
});
export default store;
