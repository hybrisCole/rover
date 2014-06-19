'use strict';

describe('Controller: Vista3Ctrl', function () {

  // load the controller's module
  beforeEach(module('roverApp'));

  var Vista3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Vista3Ctrl = $controller('Vista3Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
