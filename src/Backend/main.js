// import hue from './hueAPI.js'
// import * as constants from '../constants/constants.js'
const HueApi = require('./hueAPI.js')
const constants = require('../constants/constants.json');

const DeskLeft = '6019c7bc-e447-4c66-ba06-76be3d494535';

let hue = HueApi();

const runMain = async () => {
  const deviceList = await hue.getDeviceList()
  console.log(deviceList)

  const success = await hue.turnLightState(DeskLeft, constants.ON)
  console.log(success)
}


runMain();
