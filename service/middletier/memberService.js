const MemberModel = require("../model/memberModel");

const createMember = async (member) => {
  return await MemberModel.create(member);
};

const getAllMember = async () => {
  return await MemberModel.find({});
};

module.exports = {
  createMember,
  getAllMember,
};
