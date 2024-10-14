import { createLazyFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchFileTrees } from "../services/github";
import { fetchDevType } from "../services/gitportfolio";
import { toJpeg } from 'html-to-image';

import card_src from "../assets/card_template.png";
import developer_types from "../lib/types";
import loading_image from "../assets/loading.png";
import particle_3 from "../assets/particle_3.png";
import download from "../assets/download.png";

import uiux from "../assets/uiux.jpeg";
import tester from "../assets/tester.jpg";
import master from "../assets/master.jpg";
import build from "../assets/build.jpeg";
import documentation from "../assets/documentation.jpeg";

const PROFILE_IMAGES = {
  "1": uiux,
  "2": master,
  "3": tester,
  "4": build,
  "5": documentation
}

export const Route = createLazyFileRoute("/github/$owner")({
  component: Index,
});

function Index() {
  const { owner } = Route.useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [developer_type, setDeveloperType] = useState("");
  const [developer_description, setDeveloperDescription] = useState("");
  const [profile, setProfile] = useState("");
  const ref = useRef<HTMLDivElement>(null)

  const onDownloadClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toJpeg(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'gitportfolio.jpeg'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.error(err)
      })
  }, [ref])

  useEffect(() => {
    async function getDeveloperType() {
      setIsLoading(true);
      // fetchRandomCodeFiles("qmfkdldks", "moracano");
      const file_tree = await fetchFileTrees(owner);
      const data = await fetchDevType(file_tree);

      const enum_value = data.developer_type;

      const title = developer_types[enum_value]["ko"]["title"];
      const description = developer_types[enum_value]["ko"]["description"];
      setProfile(PROFILE_IMAGES[enum_value as keyof typeof PROFILE_IMAGES]);

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
    <div className="container" ref={ref}>
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

      <p>https://gitportfolio-app.vercel.app</p>
      <button onClick={onDownloadClick}>
        <img src={download} />
        <p>내 핸드폰에 저장하기</p>
      </button>
    </div>
  );
}
