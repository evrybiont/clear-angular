'use strict';

angular.module('frontApp', [
  'ngRoute',
  'route-segment',
  'view-segment'
]).
  config(['$locationProvider', '$routeProvider', '$routeSegmentProvider', function($locationProvider, $routeProvider, $routeSegmentProvider) {
    /*$locationProvider.hashPrefix('!');*/

    $routeSegmentProvider
      .when('/', 'welcome')
      .when('/about', 'welcome.about')
      .when('/create-advert', 'welcome.create_advert')
      .when('/create-page', 'welcome.create_page')
      .when('/careers', 'welcome.careers')
      .when('/developers', 'welcome.developers')
      .when('/jobs', 'welcome.jobs')
      .when('/education', 'welcome.education')
      .when('/freelance', 'welcome.freelance')
      .when('/privacy', 'welcome.privacy')
      .segment('welcome', {
        templateUrl: 'views/layouts/welcome.html'
      })
      .within()
      .segment('landpage', {
        default: true,
        templateUrl: 'views/welcome/landpage.html'
      })
      .segment('about', {
        templateUrl: 'views/welcome/about.html'
      })
      .segment('create_advert', {
        templateUrl: 'views/welcome/create_advert.html'
      })
      .segment('create_page', {
        templateUrl: 'views/welcome/create_page.html'
      })
      .segment('careers', {
        templateUrl: 'views/welcome/careers.html'
      })
      .segment('developers', {
        templateUrl: 'views/welcome/developers.html'
      })
      .segment('jobs', {
        templateUrl: 'views/welcome/jobs.html'
      })
      .segment('education', {
        templateUrl: 'views/welcome/education.html'
      })
      .segment('freelance', {
        templateUrl: 'views/welcome/freelance.html'
      })
      .segment('privacy', {
        templateUrl: 'views/welcome/privacy.html'
      })
      .up()
}]);
