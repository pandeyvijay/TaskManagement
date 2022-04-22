const MemberModel = require("../model/memberModel");

const saveMember = async (req, res) => {
  await MemberModel.create(req.body);
  return res.status(200).send();
};

module.exports = { saveMember };
