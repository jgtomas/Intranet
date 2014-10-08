// create the module and name it scotchApp
var App = angular.module('aptusApp', ['ngRoute','ngResource']);

// configure our routes
  App.config(['$routeProvider', function($routeProvider) {
    $routeProvider

      // route for the home page
      .when('/', {
        templateUrl : './templates/home.html',
        controller  : 'homeController'
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

  // App.factory('Home', ['$resource', function($resource) {
  //   return $resource('profile/');
  // }]);
  //
  //
  //

  App.factory("Home", ['$resource', function($resource) {
    return $resource("/profile", {}, {'query': {method: 'GET', isArray: false}});
  }]);

  App.factory("FindAllUsers", ['$resource', function($resource) {
    return $resource("/user/all", {}, {'query': {method: 'GET', isArray: true}});
  }]);



  App.controller('homeController', ['$scope','Home',function($scope, Home) {
    // Home.query(function (data) {
    //   $scope.message = data;
    // });
    Home.query(function(data) {

       $scope.users = data;
      console.log(data);
    });
    // $scope.message = 'JUUUULEN';
  }]);


  // create the controller and inject Angular's $scope
  App.controller('userController', ['$scope','FindAllUsers',function($scope, FindAllUsers) {
    // create a message to display in our view
    FindAllUsers.query(function(data) {
      console.log(data);
      $scope.users = data;
    });
  }]);



App.controller('HeaderController',['$scope','$location', function($scope, $location)
{
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);
