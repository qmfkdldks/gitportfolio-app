import { Store } from "@tanstack/store";

interface IStore {
  github_username: string,
  trees: string[],
  files: string[],
}

const store = new Store<IStore>({
  github_username: "",
  trees: [],
  files: [],
});

export default store;
