const TeamModel = require("../model/teamModel");

const createTeam = async (newTeam) => {
  try {
    const team = await TeamModel.create(newTeam);
    return team;
  } catch (ex) {
    console.log(ex);
  }
};

const getAllTeam = async () => {
  const teams = await TeamModel.find({});
  return teams;
}

module.exports = {
  createTeam,
  getAllTeam,
};
