const { createMember, getAllMember } = require("../middletier/memberService");

const saveMember = async (req, res) => {
  const member = await createMember(req.body);
  return res.status(200).send(member);
};

const getMembers = async (req, res) => {
  const members = await getAllMember();
  return res.status(200).send(members);
};

module.exports = { saveMember, getMembers };
