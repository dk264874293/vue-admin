import { ref, inject } from "vue";
import RouterView from "./RouterView.vue";
import RouterLink from "./RouterLink.vue";
const ROUTER_KEY = "__router__";

function createRouter(options) {
  return new Router(options);
}

function useRouter() {
  return inject(ROUTER_KEY);
}

function createWebHashHistory() {
  function bindEvents(fn) {
    window.addEventListener("hashchange", fn);
  }
  return {
    bindEvents,
    url: window.location.hash.slice(1) || "/",
  };
}

class Router {
  constructor(options) {
    console.log("options", options);
    this.history = options.history;
    this.routes = options.routes;
    this.current = ref(this.history.url);

    this.history.bindEvents(() => {
      this.current.value = window.location.hash.slice(1);
    });
  }
  install(app) {
    app.provide(ROUTER_KEY, this);
    app.component("router-view", RouterView);
    app.component("router-link", RouterLink);
  }
}

export { createRouter, useRouter, createWebHashHistory };
