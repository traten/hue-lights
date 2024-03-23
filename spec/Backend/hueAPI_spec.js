describe('hueAPI', () => {
  const HueApi = require('../../src/Backend/hueAPI.js');
  const HueBridge = require('../../src/constants/HueBridge.json')
  const fetchMock = require('fetch-mock')
  const HueApiMock = require('../mocks/HueApi_Mock.js')
  let hue;
  let hueApiMock;

  beforeEach(() => {
    hue = HueApi();
    hueApiMock = HueApiMock();
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('should return a device list', async () => {
    const mockResponse = hueApiMock.getDevice();
    fetchMock.get('https://' + HueBridge.IPAddress + '/clip/v2/resource/device', mockResponse, {
      method: 'GET',
      headers: {
        'hue-application-key': HueBridge.UserId,
      }
    });

    const data = await hue.getDeviceList();

    expect(fetchMock.called()).toBe(true);
    expect(data).toEqual(mockResponse);
  });
})
