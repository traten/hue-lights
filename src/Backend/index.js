const HueApi = require('./hueAPI.js');
const constants = require('../constants/constants.json');
const HueBridge = require('../constants/HueBridge.json');
const fetch = require('node-fetch');

const DeskLeft = '6019c7bc-e447-4c66-ba06-76be3d494535';

const hue = HueApi(fetch, HueBridge.IPAddress, HueBridge.UserId);

const run = async () => {
  const deviceList = await hue.getDeviceList();
  console.log(deviceList);

  const success = await hue.turnLightState(DeskLeft, constants.ON);
  console.log(success);
};

run();
