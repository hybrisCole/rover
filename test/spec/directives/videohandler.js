'use strict';

describe('Directive: videohandler', function () {

  // load the directive's module
  beforeEach(module('roverAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<videohandler></videohandler>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the videohandler directive');
  }));
});
