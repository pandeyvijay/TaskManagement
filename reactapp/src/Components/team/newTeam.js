import React, { useEffect, useState } from "react";
import { StyledRow, StyledColumn } from "../StyledComponents/common";
import MultiSelector from "../common/MultiSelector";
import axios from "axios";

const saveTeam = async (name, memberIds, projectId) => {
  debugger;
  return await axios.post("http://localhost:3333/team", {
    name,
    memberIds,
    projectId,
  });
};

const NewTeam = () => {
  const [membersOptions, setMembersOptions] = useState([]);
  const [selMembers, setSelMembers] = useState([]);
  const [name, setName] = useState("");
  const [project, setProject] = useState("");

  const onSave = () => {
    if (!name) return alert("enter name");
    if (!project) return alert("enter project");
    const memberIds = selMembers.map((m) => m.key);
    saveTeam(name, memberIds, project);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const members = await axios.get("http://localhost:3333/member");
        const options = members.data.map((d) => {
          return {
            key: d._id,
            value: d.firstName + " " + d.lastName,
          };
        });
        setMembersOptions(options);
      } catch {}
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    debugger;
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "project") {
      setProject(e.target.value);
    }
  };

  const onTeamSelectionChange = (selVal, checked) => {
    const { key, value } = selVal;
    setSelMembers((opts) => {
      if (!checked) {
        return opts.filter((o) => o.key !== key);
      }
      return [...opts, selVal];
    });
  };

  return (
    <>
      <div className="container-fluid">
        <StyledRow className="row">
          <StyledColumn className="col" sty>
            <label htmlFor="teamName" className="form-label">
              Team Name
            </label>
            <input
              name="name"
              style={{
                display: "inline-block",
                marginLeft: "1em",
                width: "50%",
              }}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="teamName"
              placeholder="TeamName"
              value={name}
            />
          </StyledColumn>
        </StyledRow>
        <StyledRow className="row">
          <StyledColumn className="col">
            <label htmlFor="project" className="form-label">
              Project
            </label>
            <select
              name="project"
              onChange={handleChange}
              class="form-select"
              aria-label="select project"
              style={{
                display: "inline-block",
                marginLeft: "1em",
                width: "50%",
              }}
              value={project}
            >
              <option selected value={0}>
                select project
              </option>
              <option value={"1"}>P2</option>
              <option value={"2"}>P3</option>
            </select>
          </StyledColumn>
        </StyledRow>
        <StyledRow className="row">
          <StyledColumn className="col">
            <label htmlFor="members" className="form-label">
              Members
            </label>
            <MultiSelector
              selectEvent={onTeamSelectionChange}
              options={membersOptions}
              customStyles={{
                marginLeft: "1em",
                display: "inline-block",
              }}
              selectedOption={selMembers}
            />
          </StyledColumn>
        </StyledRow>
        <br></br>
        <StyledRow className="row justify-content-center">
          <button
            onClick={onSave}
            style={{ width: "auto" }}
            className="btn btn-primary"
          >
            Save
          </button>
        </StyledRow>
      </div>
    </>
  );
};

export default NewTeam;
