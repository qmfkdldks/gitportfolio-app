import { Store } from "@tanstack/store";

const store = new Store({
  github_username: "",
  trees: [],
  files: [],
});

export default store;
