'use strict';

angular.module('tattlrAdminApp')
  .controller('ViolationdetailCtrl', function ($scope, $location, violationDetailService, violationService) {

    $scope.violation = violationDetailService.getViolation();

    $scope.deleteViolation = function(id) {
      violationService.deleteViolation(id);
      $location.path('/');
      console.log(id);
    };
  });
