'use strict';

angular.module('tattlrAdminApp')
  .controller('LoginCtrl', function ($scope, $modalInstance, AuthService) {

    AuthService.getAuthProviders().then(function(result) {
      $scope.authProviders = result.data;
      console.log($scope.authProviders);
    });

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });
