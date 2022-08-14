import hue from './hueAPI.js'
import constants from './constants.json'

//get hue lights info
hue.getHue('lights')

//set hue light one on
hue.setHueLight(1, constants.ON)

//set hue light one off
hue.setHueLight(1, constants.OFF)
