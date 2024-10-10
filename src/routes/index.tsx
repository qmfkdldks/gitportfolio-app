import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import particle_1 from "../assets/particle_1.png";
import particle_2 from "../assets/particle_2.png";
import github_logo from "../assets/github.png";

export const Route = createFileRoute("/")({
  component: FormPage,
});

function FormPage() {
  const [github_id, setGitId] = useState("");
  const navigate = useNavigate({ from: "/github/$owner" });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate({ to: "/github/$owner", params: { owner: github_id } });
  };

  return (
    <div className="container form_page">
      <img className="particle_1" src={particle_1} />
      <img className="particle_2" src={particle_2} />

      <h1>Github_ Portfolio</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Github 아이디를 입력하세요."
          value={github_id}
          onChange={(event) => {
            setGitId(event.target.value);
          }}
        />

        <button type="submit">
          <img src={github_logo} style={{ width: "24px" }} />
          <p>내 포트폴리오 유형 지금 알아보기</p>
        </button>
      </form>
    </div>
  );
}
