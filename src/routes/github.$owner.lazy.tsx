import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { fetchFileTrees } from "../services/github";
import { fetchDevType } from "../services/gitportfolio";
import { Rings } from "react-loader-spinner";
import store from "../store";

export const Route = createLazyFileRoute("/github/$owner")({
  component: Index,
});

function Index() {
  const { owner } = Route.useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [developer_type, setDeveloperType] = useState("");

  useEffect(() => {
    async function getDeveloperType() {
      setIsLoading(true);
      // fetchRandomCodeFiles("qmfkdldks", "moracano");
      const file_tree = await fetchFileTrees(owner);
      const data = await fetchDevType(file_tree);
      setDeveloperType(data.developer_type);
      setIsLoading(false);
    }

    getDeveloperType();
  }, []);

  return (
    <div className="p-2">
      <h3>Welcome {owner}!</h3>
      {isLoading && <Rings color="#90e0ef" />}
      {developer_type}
    </div>
  );
}
