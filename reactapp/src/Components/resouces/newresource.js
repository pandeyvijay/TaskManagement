import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useFormState from "./resourceReducer";
import MessageBox from "../common/message";
import Spinner from "../common/spinner";
import { StyledRow, StyledColumn } from "../StyledComponents/common";

const ErrMsg = styled.div`
  display: block;
`;

const enableSubmit = (state) => {
  const { fName, lName, email, password } = state;
  if (!fName.value || fName.error) return false;
  if (!lName.value || lName.error) return false;
  if (!email.value || email.error) return false;
  if (!password.value || password.error) return false;
  return true;
};

const NewMember = () => {
  const [person, updateForm, submitForm, validation, loadTeams] = useFormState({
    fName: { value: "", touched: false, error: "" },
    lName: { value: "", touched: false, error: "" },
    team: { value: [], touched: false, error: "" },
    email: { value: "", touched: false, error: "" },
    password: { value: "", touched: false, error: "" },
    isValidForm: false,
    saveState: "None",
    teams: [],
    loading: false,
  });

  const {
    fName,
    lName,
    team,
    email,
    password,
    isValidForm,
    saveState,
    loading,
    teams,
  } = person;
  const enableBtn = enableSubmit(person);
  const onSubmit = (ev) => {
    ev.preventDefault();
    submitForm(person);
  };

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    updateForm({
      name,
      value,
      isValidForm: true,
      error: validation(name, value),
    });
  };

  useEffect(() => {
    loadTeams();
  }, []);

  return (
    <>
      <div className="container-fluid" style={{ padding: "0.2em" }}>
        {loading || (saveState == "Saving" && <Spinner />)}
        {(saveState == "Saved" || saveState == "SaveFailed") && (
          <MessageBox
            msg={saveState == "Saved" ? "save completed" : "Save Failed"}
            show={true}
            onClose={() => {}}
          ></MessageBox>
        )}
        <StyledRow className="row">
          <h4 style={{ fontWeight: "bold" }}>Add new Resource</h4>
        </StyledRow>
        <form
          onSubmit={onSubmit}
          className="needs-validation position-relative"
          noValidate
        >
          <StyledRow className="row position-relative">
            <StyledColumn className="col-6">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input
                onChange={onChange}
                value={fName.value}
                name="fName"
                type="text"
                className="form-control"
                id="fname"
                placeholder="First Name"
              />
              {isValidForm && fName.error && (
                <ErrMsg className="invalid-tooltip">{fName.error}</ErrMsg>
              )}
            </StyledColumn>
            <StyledColumn className="col-6">
              <label htmlFor="lastname" className="form-label">
                LastName
              </label>
              <input
                onChange={onChange}
                value={lName.value}
                name="lName"
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Last name"
              />
              {isValidForm && lName.error && (
                <ErrMsg className="invalid-tooltip">{lName.error}</ErrMsg>
              )}
            </StyledColumn>
          </StyledRow>
          <StyledRow className="row position-relative">
            <StyledColumn className="col-12">
              <label htmlFor="team" className="form-label">
                Teams
              </label>
              <select
                onChange={onChange}
                value={team.value}
                name="team"
                className="form-select"
              >
                {teams.map((t) => {
                  return <option key={t.key}>{t.value}</option>;
                })}
              </select>
            </StyledColumn>
          </StyledRow>
          <StyledRow className="row position-relative">
            <StyledColumn className="col-12">
              <label htmlFor="email" className="form-label">
                Email-Id
              </label>
              <input
                onChange={onChange}
                value={email.value}
                name="email"
                type="text"
                className="form-control"
                placeholder="Teams"
              />
              {isValidForm && email.error && (
                <ErrMsg className="invalid-tooltip">{email.error}</ErrMsg>
              )}
            </StyledColumn>
          </StyledRow>
          <StyledRow className="row position-relative">
            <StyledColumn className="col-12">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                onChange={onChange}
                value={password.value}
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
              {isValidForm && password.error && (
                <ErrMsg className="invalid-tooltip">{password.error}</ErrMsg>
              )}
            </StyledColumn>
          </StyledRow>
          <br />
          <StyledRow className="row justify-content-center">
            <StyledColumn className="col-auto">
              <button
                disabled={!enableBtn}
                type="submit"
                className="btn btn-primary"
              >
                save
              </button>
            </StyledColumn>
            <StyledColumn className="col-auto">
              <button className="btn btn-secondary">close</button>
            </StyledColumn>
          </StyledRow>
        </form>
      </div>
    </>
  );
};

export default NewMember;
