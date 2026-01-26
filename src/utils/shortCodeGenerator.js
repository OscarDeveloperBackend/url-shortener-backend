const { nanoid } = require("nanoid");

const generateCode = () => {
  const shortId = nanoid(6);
  return shortId;
};


module.exports= generateCode;
