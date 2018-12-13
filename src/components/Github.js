import React from "react";
import { FaGithub } from "react-icons/fa";

const Github = ({ repo, size, color }) => {
  return (
    <div className="repo-github">
      <a href={repo} className="link-repo">
        <FaGithub color={color ? color : "grba(0,0,0,0.8)"} size={size} />
      </a>
    </div>
  );
};

export default Github;
