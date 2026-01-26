const urlService = require("../services/url.services");

const getAllUrl = async (req, res) => {
  try {
    const data = await urlService.getAll();
    if (data.lengt === 0) {
      return res.status(404).json({ message: "No hay data." });
    }
    return res.status(200).json(data);
  } catch (error) {}
};

const createUrlShort = async (req, res) => {
  try {
    const url_base = req.url_base;
    const result = await urlService.saveUrl(url_base);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error creando la URL" });
  }
};

const redirectUrl = async (req, res) => {
  const { code } = req.params;
  try {
    const result = await urlService.getUrl(code);
    if (!result) {
      return res.status(404).json({ message: "Codigo invalido no existe." });
    }
    res.redirect(301, result.url_base);
  } catch (error) {
    res.status(500).json({ error: "Error al redirigir ala URL." });
  }
};

module.exports = { createUrlShort, redirectUrl, getAllUrl };
