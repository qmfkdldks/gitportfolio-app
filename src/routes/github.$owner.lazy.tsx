import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { fetchFileTrees } from "../services/github";
import { fetchDevType } from "../services/gitportfolio";
import card_src from "../assets/card_template.png";
import developer_types from "../lib/types";
import loading_image from "../assets/loading.png";
import particle_3 from "../assets/particle_3.png";
import download from "../assets/download.png";
import profile from "../assets/profile.png";

export const Route = createLazyFileRoute("/github/$owner")({
  component: Index,
});

function Index() {
  const { owner } = Route.useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [developer_type, setDeveloperType] = useState("");
  const [developer_description, setDeveloperDescription] = useState("");

  useEffect(() => {
    async function getDeveloperType() {
      setIsLoading(true);
      // fetchRandomCodeFiles("qmfkdldks", "moracano");
      const file_tree = await fetchFileTrees(owner);
      const data = await fetchDevType(file_tree);

      const enum_value = data.developer_type;

      const title = developer_types[enum_value]["ko"]["title"];
      const description = developer_types[enum_value]["ko"]["description"];

      setDeveloperType(title);
      setDeveloperDescription(description);
      setIsLoading(false);
    }

    getDeveloperType();
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <div className="loading_container">
          <img className="loading" src={loading_image} />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <img src={particle_3} className="particle_3" />

      <div className="result">
        <h1>Gitportfolio 분석 결과</h1>
        <img src={profile} className="profile" />
        <img src={card_src} className="card_image" />
        <div className="caption">
          <h4>{developer_type}</h4>
          <p>{developer_description}</p>
        </div>
      </div>

      <button>
        <img src={download} />
        <p>내 핸드폰에 저장하기</p>
      </button>
    </div>
  );
}
