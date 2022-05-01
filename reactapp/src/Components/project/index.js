import React from "react";
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%" }}>
      <h3 style={{ display: "inline" }}>Project</h3>
      <button
        onClick={() => {
          navigate("/project/projForm");
        }}
        className="btn btn-primary"
        style={{ display: "inline-block", float: "right" }}
      >
        Create New Project
      </button>
    </div>
  );
}

export default Project;
