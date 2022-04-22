import React from "react";
import { StyledModalDiv } from "../StyledComponents/common";

export default () => {
  return (
    <StyledModalDiv>
      <div
        style={{
          top: "50%",
          left: "50%",
          position: "fixed",
        }}
        className="text-center"
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </StyledModalDiv>
  );
};
