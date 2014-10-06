// create the module and name it scotchApp
var App = angular.module('aptusApp', ['ngRoute']);

// configure our routes
  App.config(['$routeProvider', function($routeProvider) {
    $routeProvider

      // route for the home page
      .when('/', {
        templateUrl : './templates/home.html',
        controller  : 'mainController'
      })

      // route for the about page
      .when('/users', {
        templateUrl : './templates/user.html',
        controller  : 'userController'
      })

      // route for the contact page
      .when('/contact', {
        templateUrl : 'templates/contact.html',
        controller  : 'contactController'
      })

      .otherwise({
        redirectTo: '/'
      });

  }]);


  // create the controller and inject Angular's $scope
  App.controller('userController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look! -- USERS';
  }]);
