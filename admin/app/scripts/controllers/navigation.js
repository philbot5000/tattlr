'use strict';

angular.module('tattlrAdminApp')
  .controller('NavigationCtrl', function ($scope, $modal) {

    $scope.loginModal = function() {
      $modal.open({
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      });
    };

  });
