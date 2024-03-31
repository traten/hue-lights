const express = require('express');
const HueApi = require('./hueAPI.js');
const constants = require('./constants/constants.json');

module.exports = function (fetch) {
  const hue = HueApi(fetch, process.env.IPAddress, process.env.UserId);
  const app = express();

  app.get('/light/on', (req, res) => {
    let status = hue.turnLightState(process.env.DeskLeft, constants.ON);
    res.status(200).send(status);
  });

  app.get('/light/off', (req, res) => {
    let status = hue.turnLightState(process.env.DeskLeft, constants.OFF);
    res.status(200).send(status);
  });

  return app;
};
