process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import fetch from "node-fetch";
import * as HueBridge from './HueBridge.js';
const localHueBridge = 'https://' + HueBridge.IPAddress + '/clip/v2/';

const GetHue = async (resource) => {
  const response = await fetch(localHueBridge + 'resource/' + resource, {
    method: 'GET',
    headers: {
      'hue-application-key': HueBridge.UserId,
    }
  });
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson)
}

const TurnLight = async(lightRid, state) => {
  console.log(localHueBridge + 'resource/' + 'light/' + lightRid)
  const response = await fetch(localHueBridge + 'resource/' + 'light/' + lightRid, {
    method: 'PUT',
    headers:{
      "hue-application-key": HueBridge.UserId,
    },
    body: JSON.stringify({"on": { "on": state}})
  })
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson)
}

export default {
  GetHue,
  TurnLight
}
