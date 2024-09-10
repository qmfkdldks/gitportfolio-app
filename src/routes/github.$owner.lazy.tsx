import { createLazyFileRoute } from "@tanstack/react-router";
import "../App.css";
import { useCallback, useEffect } from "react";
import { fetchFileTrees, fetchRandomCodeFiles } from "../services/github";
import { fetchDevType } from "../services/gitportfolio";
import store from "../store";

export const Route = createLazyFileRoute("/github/$owner")({
  component: Index,
});

function Index() {
  const { owner } = Route.useParams();

  useEffect(() => {
    async function getDeveloperType() {
      // fetchRandomCodeFiles("qmfkdldks", "moracano");
      const file_tree = await fetchFileTrees(owner);
      const data = await fetchDevType(file_tree);
      console.log("type", data);
    }

    getDeveloperType();
  }, []);

  const onClick = useCallback(() => {}, [store]);

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
