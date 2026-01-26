const Url = require("../models/url.model");
const generateCode = require("../utils/shortCodeGenerator");

const getAll = async () => {
  const data = await Url.find();

  return data;
};

const saveUrl = async (url_base) => {
  const shortcode = generateCode();

  const urlDcocument = new Url({
    shortcode,
    url_base,
  });

  const urlSave = await urlDcocument.save();

  return urlSave;
};

const getUrl = async (shortcode) => {
  const urlDcocument = await Url.findOne({ shortcode });

  return urlDcocument;
};

module.exports = { saveUrl, getUrl, getAll };
