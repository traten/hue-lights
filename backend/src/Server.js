const express = require('express');
const constants = require('./constants/constants.json');

module.exports = function (fetch, hue) {
  const app = express();

  app.get('/light/on', (req, res) => {
    const status = hue.turnLightState(process.env.DeskLeft, constants.ON);
    res.status(200).send(status);
  });

  app.get('/light/off', (req, res) => {
    const status = hue.turnLightState(process.env.DeskLeft, constants.OFF);
    res.status(200).send(status);
  });

  return app;
};
