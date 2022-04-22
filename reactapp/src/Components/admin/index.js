import React, { useEffect } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { StyledMainDiv } from "../StyledComponents/common";
import { useNavigate } from "react-router-dom";
export default () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("resources");
  }, []);

  return (
    <StyledMainDiv>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="resources">
            Resources
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="team">
            Teams
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="tasks">
            Task Types
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="template">
            Template
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </StyledMainDiv>
  );
};
