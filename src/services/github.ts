import { Octokit } from "octokit";
// import { all_extensions } from "../lib/extensions";
import store from "../store";

const client = new Octokit({ auth: "" });

async function fetchRepos(owner: string, limit: number = 1) {
  const { data } = await client.rest.repos.listForUser({
    username: owner,
    sort: "updated",
    direction: "desc",
    per_page: limit,
  });

  return data;
}

async function fetchFileTree(
  owner: string,
  repo_name: string,
  repo_default_branch: string,
): Promise<string[]> {
  const { data } = await client.rest.git.getTree({
    owner,
    repo: repo_name,
    tree_sha: repo_default_branch,
    // recursive: "true",
  });

  return data.tree.map((t) => t.path || "");
}

function addStoreTrees(paths: string[]) {
  store.setState((state) => {
    return {
      ...state,
      trees: [...state.trees, paths].flat(),
    };
  });
}

export async function fetchFileTrees(owner: string) {
  const repos = await fetchRepos(owner);

  const methods = repos.map((repo) => {
    async function fetch_tree() {
      const paths = await fetchFileTree(owner, repo.name, repo.default_branch || "master");
      addStoreTrees(paths);
      return paths;
    }

    return fetch_tree;
  });

  return (await Promise.all(methods.map((callback) => callback()))).flat();
}

// export async function fetchRandomCodeFiles(
//   owner: string,
//   repository: string,
//   limit: number = 3,
// ) {
//   owner = "qmfkdldks";
//   repository = "moracano";

//   const { data } = await client.rest.repos.getContent({
//     owner,
//     repo: repository,
//     path: "",
//     headers: {
//       accept: "application/vnd.github.object+json",
//     },
//   });

//   const filtered = data.entries.filter((file) => isValidFile(file));
//   // Shuffle array and select 3 files
//   const selected = filtered.sort(() => 0.5 - Math.random()).slice(0, limit);

//   const methods = selected.map((file) => {
//     async function get_content() {
//       const response = await fetch(file.git_url);
//       const data = await response.json();

//       store.setState((state) => {
//         return {
//           ...state,
//           files: [...state.files, data.content],
//         };
//       });
//     }

//     return get_content;
//   });

//   await Promise.all(methods.map((m) => m()));
// }

// function isValidFile(file) {
//   return (
//     file.type == "file" && all_extensions.includes(getFileExtension(file.path))
//   );
// }

// function getFileExtension(filename: string) {
//   return filename.split(".").pop();
// }
