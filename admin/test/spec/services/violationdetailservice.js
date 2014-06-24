'use strict';

describe('Service: violationDetailService', function () {

  // load the service's module
  beforeEach(module('tattlrAdminApp'));

  // instantiate service
  var violationDetailService;
  beforeEach(inject(function (_violationDetailService_) {
    violationDetailService = _violationDetailService_;
  }));

  it('should do something', function () {
    expect(!!violationDetailService).toBe(true);
  });

});
