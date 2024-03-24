module.exports = function (fetch, ipAddress, userId) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  const localHueBridge = 'https://' + ipAddress + '/clip/v2/';

  return {
    getDeviceList: async () => {
      const response = await fetch(localHueBridge + 'resource/device', {
        method: 'GET',
        headers: {
          'hue-application-key': userId
        }
      });

      const deviceList = await response.json();
      return deviceList;
    },

    turnLightState: async (lightRid, state) => {
      const response = await fetch(localHueBridge + 'resource/' + 'light/' + lightRid, {
        method: 'PUT',
        headers: {
          'hue-application-key': userId
        },
        body: JSON.stringify({ on: { on: state } })
      });

      return await response.json();
    }
  };
};
