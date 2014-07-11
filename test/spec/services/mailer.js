'use strict';

describe('Service: mailer', function () {

  // load the service's module
  beforeEach(module('roverAppApp'));

  // instantiate service
  var mailer;
  beforeEach(inject(function (_mailer_) {
    mailer = _mailer_;
  }));

  it('should do something', function () {
    expect(!!mailer).toBe(true);
  });

});
