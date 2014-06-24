'use strict';

describe('Controller: ViolationdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('tattlrAdminApp'));

  var ViolationdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViolationdetailCtrl = $controller('ViolationdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
