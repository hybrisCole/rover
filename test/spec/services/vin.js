'use strict';

describe('Service: vin', function () {

  // load the service's module
  beforeEach(module('roverAppApp'));

  // instantiate service
  var vin;
  beforeEach(inject(function (_vin_) {
    vin = _vin_;
  }));

  it('should do something', function () {
    expect(!!vin).toBe(true);
  });

});
