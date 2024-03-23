import hue from './hueAPI.js'
import * as constants from './../constants/constants.js'
const DeskLeft = '6019c7bc-e447-4c66-ba06-76be3d494535';

//get hue lights info
const deviceList = await hue.GetDeviceList()
console.log(deviceList)

const success = await hue.TurnLightState(DeskLeft, constants.ON)
console.log(success)
