'use strict';

angular.module('frontApp', [
  'ngRoute'
]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    /*$locationProvider.hashPrefix('!');*/

  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/landpage', {
      templateUrl: 'views/landpage.html',
      controller: 'LandPageCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
