'use strict';

angular.module('tattlrAdminApp')
  .controller('MainCtrl', function ($scope, $location, violationService, violationDetailService) {

    $scope.loadingViolations = violationService.getViolations().then(function(response) {
      $scope.violations = response.data;

    });

    $scope.viewViolation = function (violation) {

      violationDetailService.setViolation(violation);
      $location.path('violationDetail');

    };
  })

  .controller('ModalInstanceCtrl', function($scope, $modalInstance, violation) {
      $scope.violation = violation;

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };

    });
