import React from "react";
import { StyledColumn, StyledRow } from "../StyledComponents/common";
import MultiSelector from "../common/MultiSelector";

const test = ()=>{
    return <React.Fragment>
        </React.Fragment>
}

const ProjectForm = () => {
  return (
    <div className="container">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <StyledRow className="row position-relative">
          <StyledColumn className="col-6">
            <label htmlFor="fname" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Project Name"
            />
          </StyledColumn>
        </StyledRow>

        <StyledRow className="row position-relative">
          <StyledColumn className="col-6">
            <label htmlFor="lastname" className="form-label">
              Start Date
            </label>
            <input type="date" className="form-control" />
          </StyledColumn>
          <StyledColumn className="col-6">
            <label htmlFor="lastname" className="form-label">
              End Date
            </label>
            <input type="date" className="form-control" />
          </StyledColumn>
        </StyledRow>

        <StyledRow className="row position-relative">
          <StyledColumn className="col-6">
            <label htmlFor="lastname" className="form-label">
              Development End Date
            </label>
            <input type="date" className="form-control" />
          </StyledColumn>
          <StyledColumn className="col-6">
            <label htmlFor="lastname" className="form-label">
              ST End Date
            </label>
            <input type="date" className="form-control" />
          </StyledColumn>
        </StyledRow>
        <StyledRow className="row position-relative">
          <StyledColumn className="col-6">
            <label htmlFor="lastname" className="form-label">
              Teams
            </label>
            <MultiSelector />
          </StyledColumn>
        </StyledRow>
        <br />
        <StyledRow
          style={{ display: "flex", flexWrap: "nowrap", float: "right" }}
        >
          <StyledColumn style={{ marginRight: "0.5em" }}>
            <button className="btn btn-primary">Save</button>
          </StyledColumn>
          <StyledColumn>
            <button className="btn btn-secondary">Cancel</button>
          </StyledColumn>
        </StyledRow>
      </form>
    </div>
  );
};

export default ProjectForm;
