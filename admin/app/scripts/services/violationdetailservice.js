'use strict';

angular.module('tattlrAdminApp')
  .factory('violationDetailService', function () {
    // Service logic
    // ...

    var violation = null;

    // Public API here
    return {
      getViolation: function () {
        return this.violation;
      },
      setViolation: function (v) {
        this.violation = v;
      }
    };
  });
