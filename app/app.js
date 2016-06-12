'use strict';

var app = angular.module('frontApp', [
  'ngRoute',
  'route-segment',
  'view-segment',
  'angular-jquery-validate'
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
        templateUrl: 'views/welcome/landpage.html',
        controller: 'LandpageCtrl'
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

app.config(function ($jqueryValidateProvider) {
    $jqueryValidateProvider.setDefaults({
   errorPlacement: function (error, element) {

   },
   showErrors: function (errorMap, errorList) {
     this.defaultShowErrors();

     // destroy tooltips on valid elements
     $("." + this.settings.validClass).tooltip("destroy");
     $("." + this.settings.validClass).tooltip("destroy");
     $("." + this.settings.validClass).removeClass("s-error");

     // add/update tooltips
     for (var i = 0; i < errorList.length; i++) {
         var error = errorList[i];

         if ($("#" + error.element.id).attr("data-original-title")) {
             if (!($("#" + error.element.id).attr("data-original-title") == error.message)) {
               /*$("#" + error.element.id).tooltip("destroy");*/
                 $("#" + error.element.id).tooltip({
                     placement: "left",
                     template: '<div class="tooltip tooltip-error" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
                 }).attr("data-original-title", error.message);
                 $("#" + error.element.id).tooltip("show");
             }
         }
         else if (error.element.type == 'radio') {
           $("#" + error.element.id).closest('.btn-group').tooltip({
             trigger: "focus",
             placement: "left",
             template: '<div class="tooltip tooltip-error" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
           }).attr("data-original-title", error.message);
         }
         else {
             $("#" + error.element.id).tooltip({
                 trigger: "focus",
                 placement: "left",
                 template: '<div class="tooltip tooltip-error" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
             }).attr("data-original-title", error.message);
         }
         $("#" + error.element.id).addClass('s-error');
     }
   }
  });

  $jqueryValidateProvider.addMethod("time24", function (value, element) {
   return /^([01]?[0-9]|2[0-3])(:[0-5][0-9]){2}$/.test(value);
  }, "Invalid time format.");

  $jqueryValidateProvider.addMethod("time24WithoutSeconds", function (value, element) {
   return /^([0-1]\d|2[0-3]):([0-5]\d)/.test(value);
  }, "Invalid time format.");
});
