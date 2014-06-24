'use strict';

angular.module('tattlrAdminApp')
  .factory('AuthService', function ($http) {

    return {
      getAuthProviders: function() {
        return $http.get('http://tattlr.azurewebsites.net/api/account/ExternalLogins?returnUrl=/');
      },
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
