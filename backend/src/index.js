const HueApi = require('./hueAPI.js');
const constants = require('./constants/constants.json');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const hue = HueApi(fetch, process.env.IPAddress, process.env.UserId);

const run = async () => {
  const deviceList = await hue.getDeviceList();
  console.log(deviceList);

  const success = await hue.turnLightState(process.env.DeskLeft, constants.ON);
  console.log(success);
};

run();
