'use strict';

angular.module('tattlrAdminApp')
  .factory('violationService', function ($http) {
    // Public API here
    return {
      deleteViolation: function (id) {
        return $http.delete('http://tattlr.azurewebsites.net/api/report/'+id);
      },
      getViolations: function() {
        return $http.get('http://tattlr.azurewebsites.net/api/report/');
      }
    };
  });
