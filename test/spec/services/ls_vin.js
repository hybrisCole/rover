'use strict';

describe('Service: LSVIN', function () {

  // load the service's module
  beforeEach(module('roverAppApp'));

  // instantiate service
  var LSVIN;
  beforeEach(inject(function (_LSVIN_) {
    LSVIN = _LSVIN_;
  }));

  it('should do something', function () {
    expect(!!LSVIN).toBe(true);
  });

});
