'use strict';

describe('Controller: AccesorioCtrl', function () {

  // load the controller's module
  beforeEach(module('roverAppApp'));

  var AccesorioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccesorioCtrl = $controller('AccesorioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
