module.exports = function() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  const fetch = require('node-fetch')
  const HueBridge = require('../constants/HueBridge.json')
  const localHueBridge = 'https://' + HueBridge.IPAddress + '/clip/v2/';

  return {
    getDeviceList: async () => {
      const response = await fetch(localHueBridge + 'resource/device', {
        method: 'GET',
        headers: {
          'hue-application-key': HueBridge.UserId,
        }
      });

      const deviceList = await response.json(); //extract JSON from the http response
      return deviceList;
    },

    turnLightState: async(lightRid, state) => {
      const response = await fetch(localHueBridge + 'resource/' + 'light/' + lightRid, {
        method: 'PUT',
        headers:{
          "hue-application-key": HueBridge.UserId,
        },
        body: JSON.stringify({"on": { "on": state}})
      })

      return await response.json();
    }
  }
}
