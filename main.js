import hue from './hueAPI.js'
import * as constants from './constants.js'
const deskLeft = '6019c7bc-e447-4c66-ba06-76be3d494535';

//get hue lights info
hue.GetHue('device')


//set hue light one off
hue.TurnLight(deskLeft, constants.ON)

//set hue light one on
// hue.TurnLight(deskLeft, constants.ON)
