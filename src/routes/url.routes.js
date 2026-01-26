const express = require("express");
const routes = express.Router();
const validateUrl = require('../middleware/validateUrl.middleware')
const urlExist = require('../middleware/urlExist.middleware')
const urlControllers= require('../controllers/url.controllers')

routes.get('/all',urlControllers.getAllUrl)
routes.post("/",urlExist,validateUrl,urlControllers.createUrlShort);
routes.get("/:code",urlControllers.redirectUrl);

module.exports = routes;
