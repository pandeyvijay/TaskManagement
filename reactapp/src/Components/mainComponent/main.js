import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Home from "../home";
import Container from "./container";
import Menu from "./menu";
import Project from "../project";
import Team from "../team";
import Admin from "../admin";
import Resouces from "../resouces";
import NewTeam from "../team/newTeam";

export default function () {
  return (
    <main className="container__main">
      <Menu />
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="project" element={<Project />}></Route>
          <Route path="team" element={<Team />}></Route>
          <Route path="admin" element={<Admin />}>
            <Route index path="resources" element={<Resouces />}></Route>
            <Route path="team" element={<NewTeam />}></Route>
            <Route path="tasks" element={<h1>Tasks</h1>}></Route>
            <Route path="template" element={<h1>Template</h1>}></Route>
          </Route>
        </Route>
      </Routes>
    </main>
  );
}
