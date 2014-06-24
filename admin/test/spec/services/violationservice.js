'use strict';

describe('Service: violationService', function () {

  // load the service's module
  beforeEach(module('tattlrAdminApp'));

  // instantiate service
  var violationService;
  beforeEach(inject(function (_violationService_) {
    violationService = _violationService_;
  }));

  it('should do something', function () {
    expect(!!violationService).toBe(true);
  });

});
