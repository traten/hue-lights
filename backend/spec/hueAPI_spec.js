describe('hueAPI', () => {
  const HueApi = require('../src/hueAPI.js');
  const constants = require('../src/constants/constants.json');
  const fetchMock = require('fetch-mock').sandbox();
  const IPAddress = '192.163.0.0';
  const UserId = '2';
  const LightRid = '10';
  let hue;

  beforeEach(() => {
    hue = HueApi(fetchMock, IPAddress, UserId);

    fetchMock.restore();
  });

  it('should request the device list', async () => {
    fetchMock.getOnce('https://' + IPAddress + '/clip/v2/resource/device', {}, {
      method: 'GET',
      headers: {
        'hue-application-key': UserId
      }
    });

    await hue.getDeviceList();

    expect(fetchMock.called()).toBe(true);
  });

  it('should request to turn the light on', async () => {
    fetchMock.put('https://' + IPAddress + '/clip/v2/resource/light/' + LightRid, {}, {
      method: 'PUT',
      headers: {
        'hue-application-key': UserId
      },
      body: { on: { on: true } }
    });

    await hue.turnLightState(LightRid, constants.ON);

    expect(fetchMock.called()).toBe(true);
  });
});
