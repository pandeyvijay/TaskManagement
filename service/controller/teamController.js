const { createTeam } = require("../middletier/teamService");

const saveTeam = async (req, res) => {
  try {
    const team = await createTeam(req.body);
    return res.status(200).send(team);
  } catch (ex) {
    return res.status(400).send(null);
  }
};

module.exports = {
  saveTeam,
};
