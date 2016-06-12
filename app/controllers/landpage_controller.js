'use strict';

angular.module('frontApp')
  .controller('LandpageCtrl', function($scope) {
    $scope.user = {};
    $scope.years = [];
    $scope.days = [];

    $scope.signinformvalidate = {
      rules: {
        signin_user_email: {
          required: true
        },
        signin_user_password: {
          required: true
        }
      }
    };

    $scope.signupformvalidate = {
      rules: {
        user_first_name: {
          required: true
        },
        user_surname: {
          required: true
        },
        user_email: {
          required: true
        },
        user_password: {
          required: true
        },
        user_confirm_password: {
          required: true
        },
        user_month: {
          required: true
        },
        user_day: {
          required: true
        },
        user_year: {
          required: true
        },
        user_gender: {
          required: true
        }
      },
      messages: {
        user_gender: 'Please select your gender'
      },
      validateOnInit: true
    };

    $scope.createUser = function(user) {
      if (!$('#signupForm').valid()) {
        return false
      }

      alert('success!');
      console.log(user);
    };

    $scope.signInUser = function(user) {
      alert('success!');
      console.log(user);
    };

    var setBirthData = function() {
      $scope.months = [
        {id: 1, name: 'Jan'},{id: 2, name: 'Feb'},
        {id: 3, name: 'Mar'},{id: 4, name: 'Apr'},
        {id: 5, name: 'May'},{id: 6, name: 'Jun'},
        {id: 7, name: 'Jul'},{id: 8, name: 'Aug'},
        {id: 9, name: 'Sep'},{id: 10, name: 'Oct'},
        {id: 11, name: 'Nov'},{id: 12, name: 'Dec'},
      ];

      for(var i=1;i<32;i++) {
        $scope.days.push(i);
      }

      var year = new Date().getFullYear();

      $scope.years.push(year);
      for(var i=1;i<112;i++) {
        $scope.years.push(year - i);
      }
    };

    setBirthData();
  });
