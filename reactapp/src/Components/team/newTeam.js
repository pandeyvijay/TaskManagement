import React from "react";
import { StyledRow, StyledColumn } from "../StyledComponents/common";
import MultiSelector from "../common/MultiSelector";

const NewTeam = () => {
  return (
    <>
      <div className="container-fluid">
        <StyledRow className="row">
          <StyledColumn className="col" sty>
            <label htmlFor="teamName" className="form-label">
              Team Name
            </label>
            <input
              style={{
                display: "inline-block",
                marginLeft: "1em",
                width: "50%",
              }}
              type="text"
              className="form-control"
              id="teamName"
              placeholder="TeamName"
            />
          </StyledColumn>
        </StyledRow>
        <StyledRow className="row">
          <StyledColumn className="col">
            <label htmlFor="project" className="form-label">
              Project
            </label>
            <select
              class="form-select"
              aria-label="select project"
              style={{
                display: "inline-block",
                marginLeft: "1em",
                width: "50%",
              }}
            >
              <option selected value="-1">
                P1
              </option>
              <option value={1}>P2</option>
              <option value={2}>P3</option>
            </select>
          </StyledColumn>
        </StyledRow>
        <StyledRow className="row">
          <StyledColumn className="col">
            <label htmlFor="members" className="form-label">
              Members
            </label>
            <MultiSelector
              option={[
                { key: 1, value: "first" },
                { key: 2, value: "first1" },
                { key: 3, value: "first2" },
                { key: 4, value: "first3" },
                { key: 5, value: "first4" },
                { key: 6, value: "first5" },
                { key: 7, value: "first6" },
                { key: 8, value: "first7" },
                { key: 9, value: "first8" },
              ]}
              customStyles={{
                marginLeft: "1em",
                display: "inline-block",
              }}
            />
          </StyledColumn>
        </StyledRow>
      </div>
    </>
  );
};

export default NewTeam;
