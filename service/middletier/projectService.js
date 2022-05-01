const ProjectModel = require("../model/projectModel");

const createProject = async (project) => {
  const uProj = await ProjectModel.createProject(project);
  return uProj;
};

const getAllProject = async () => {
  const projects = await ProjectModel.find({});
  return projects;
};

const getProject = async (id) => {
  const project = await ProjectModel.find({
    _id: id,
  });
  return project;
};

const updateProject = async (id, project) => {
  const uProj = await ProjectModel.findOneAndUpdate(
    {
      _id: id,
    },
    project
  );
  return uProj;
};

const deleteProject = async (id) => {
  const data = await ProjectModel.deleteOne({ _id: id });
  return data;
};

module.exports = {
  createProject,
  updateProject,
  deleteProject,
  getAllProject,
  getProject,
};
