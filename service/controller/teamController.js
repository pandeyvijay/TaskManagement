const { createTeam, getAllTeam } = require("../middletier/teamService");
const ErrorWrapper = require("../middleware/errorMiddleware");

const saveTeam = ErrorWrapper(async (req, res) => {
  try {
    const team = await createTeam(req.body);
    return res.status(200).send(team);
  } catch (ex) {
    return res.status(400).send(null);
  }
});

const getTeams = ErrorWrapper(async (req, res) => {
  try {
    console.log("teams gets");
    const teams = await getAllTeam();
    return res.status(200).send(teams);
  } catch (ex) {
    return res.status(400).send(ex);
  }
});

module.exports = {
  saveTeam,
  getTeams,
};
