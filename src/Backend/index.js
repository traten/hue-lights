const HueApi = require('./hueAPI.js');
const constants = require('../constants/constants.json');
const HueBridge = require('../constants/HueBridge.json');
const fetch = require('node-fetch');

const hue = HueApi(fetch, HueBridge.IPAddress, HueBridge.UserId);

const run = async () => {
  const deviceList = await hue.getDeviceList();
  console.log(deviceList);

  const success = await hue.turnLightState(HueBridge.DeskLeft, constants.ON);
  console.log(success);
};

run();
