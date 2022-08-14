import fetch from "node-fetch";

import HueBridge from './HueBridge.json';
const localHueBridge = 'http://' + HueBridge.IPAddress + '/api/' + HueBridge.UserId + '/'

const getHue = async (request) => {
  const response = await fetch(localHueBridge + request + '/', {
    method: 'GET'
  });
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson)
}

const setHueLight = async(lightNumber, state) => {
  const response = await fetch(localHueBridge + 'lights/' + lightNumber + '/state', {
    method: 'PUT',
    body: JSON.stringify({"on": state})
  })
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson)
}


export default {
  getHue,
  setHueLight
}
