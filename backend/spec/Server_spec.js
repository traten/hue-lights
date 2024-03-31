describe('server', () => {
  const Server = require('../src/Server.js');
  const request = require('supertest');
  let server;

  beforeEach((done) => {
    server = Server(fetch).listen(done);
  });

  afterEach((done) => {
    server.close(done);
  });

  it('should request to turn the light on when sending /light/on', (done) => {
    request(server)
      .get('/light/on')
      .expect(200)
      .end((error) => (error) ? done.fail(error) : done());
  });

  it('should request to turn the light off when sending /light/off', (done) => {
    request(server)
      .get('/light/off')
      .expect(200)
      .end((error) => (error) ? done.fail(error) : done());
  });
});
