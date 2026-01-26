const Url = require("../models/url.model");

const urlExist = async (req, res, next) => {
  const { url_base } = req.body;

  const urlExists = await Url.findOne({ url_base });
  if (urlExists) {
    return res.status(200).json(urlExists); 
  }

  next(); 
};

module.exports = urlExist;
