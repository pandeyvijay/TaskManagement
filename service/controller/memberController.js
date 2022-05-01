const { createMember, getAllMember } = require("../middletier/memberService");
const ErrorWrapper = require("../middleware/errorMiddleware");

const saveMember = ErrorWrapper(async (req, res) => {
  const member = await createMember(req.body);
  return res.status(200).send(member);
});

const getMembers = ErrorWrapper(async (req, res) => {
  const members = await getAllMember();
  return res.status(200).send(members);
});

module.exports = { saveMember, getMembers };
