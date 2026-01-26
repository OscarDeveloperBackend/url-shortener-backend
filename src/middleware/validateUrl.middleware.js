const urlValidate = async (req, res, next) => {
  const { url_base } = req.body;

  try {
    const response = await fetch(url_base, { method: "HEAD" });
    if (!response.ok) {
      return res
        .status(400)
        .json({ message: "La URL no respondió correctamente." });
    }

    req.url_base = url_base;
    next();
  } catch (error) {
    return res.status(500).json({ message: "La url es invalida o no existe." });
  }
};

module.exports = urlValidate;
