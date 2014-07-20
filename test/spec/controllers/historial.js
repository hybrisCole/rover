'use strict';

describe('Controller: HistorialCtrl', function () {

  // load the controller's module
  beforeEach(module('roverAppApp'));

  var HistorialCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HistorialCtrl = $controller('HistorialCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
