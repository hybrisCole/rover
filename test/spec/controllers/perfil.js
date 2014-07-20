'use strict';

describe('Controller: PerfilCtrl', function () {

  // load the controller's module
  beforeEach(module('roverAppApp'));

  var PerfilCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerfilCtrl = $controller('PerfilCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
