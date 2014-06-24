'use strict';

angular
  .module('tattlrAdminApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/violationDetail', {
        templateUrl: 'views/violationdetail.html',
        controller: 'ViolationdetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
