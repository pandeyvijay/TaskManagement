const TeamModel = require("../model/teamModel");

const createTeam = async (newTeam) => {
  console.log(newTeam);
  try {
    const team = await TeamModel.create(newTeam);
    return team;
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = {
  createTeam,
};
