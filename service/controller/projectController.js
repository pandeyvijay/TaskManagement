const projectService = require("../middletier/projectService");
const ErrorWrapper = require("../middleware/errorMiddleware");

const createNewProject = ErrorWrapper(async (req, res) => {
  try {
    const project = await projectService.createProject(req.body);
    return res.status(200).send(project);
  } catch (ex) {
    return res.status(400).send(ex);
  }
});

const updateProject = ErrorWrapper(async (req, res) => {
  try {
    const { _id } = req.params;
    const project = await projectService.updateProject(_id, req.body);
    return res.status(200).send(project);
  } catch (ex) {
    return res.status(400).send(ex);
  }
});

const deleteProject = ErrorWrapper(async (req, res) => {
  try {
    const { _id } = req.params;
    const project = await projectService.deleteProject(_id);
    return res.status(200).send(project);
  } catch (ex) {
    return res.status(400).send(ex);
  }
});

const getProject = ErrorWrapper(async (req, res) => {
  try {
    const { _id } = req.params;
    const project = await projectService.getProject(_id);
    return res.status(200).send(project);
  } catch (ex) {
    return res.status(400).send(ex);
  }
});

const getAllProject = ErrorWrapper(async (req, res) => {
  try {
    const projects = await projectService.getAllProject();
    return projects;
  } catch (ex) {
    return res.status(400).send(ex);
  }
});

module.exports = {
  createNewProject,
  updateProject,
  deleteProject,
  getAllProject,
  getProject,
};
