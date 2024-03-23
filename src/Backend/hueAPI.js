process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import fetch from "node-fetch";
import * as HueBridge from './HueBridge.js';
const localHueBridge = 'https://' + HueBridge.IPAddress + '/clip/v2/';

const GetDeviceList = async () => {
  const response = await fetch(localHueBridge + 'resource/device', {
    method: 'GET',
    headers: {
      'hue-application-key': HueBridge.UserId,
    }
  });

  const deviceList = await response.json(); //extract JSON from the http response
  return deviceList;
}

const TurnLightState = async(lightRid, state) => {
  const response = await fetch(localHueBridge + 'resource/' + 'light/' + lightRid, {
    method: 'PUT',
    headers:{
      "hue-application-key": HueBridge.UserId,
    },
    body: JSON.stringify({"on": { "on": state}})
  })

  return await response.json();
}

export default {
  GetDeviceList,
  TurnLightState
}
