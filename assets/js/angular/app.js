// create the module and name it scotchApp
var App = angular.module('aptusApp', ['ngRoute','ngResource','tien.clndr']);

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

      .when('/vacaciones', {
        templateUrl : './templates/showVacaciones.html',
        controller  : 'DemoCtrl'
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
    return $resource("/profile", {}, {'query': {method: 'GET', isArray: true}});
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

    $scope.TienePermisos= function(user) {
        if (user.isAdmin) {
          return true;
        }
        else{
          return false;
        }
    }
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

App.controller('DemoCtrl',['$scope', function ($scope) {
  $scope.events = [
        { date: moment().add(3, 'days').format(), title: "Happy days" },
        { date: moment().subtract(5, 'days').format(), title: "Good old days" },
        { date: moment().subtract(5, 'days').format(), title: "And some more" }
    ];

    $scope.dynamic = "red";

    $scope.cambiarEstado = function(){
      $scope.dynamic = "red";
    }

    $scope.showEvents = function(events) {
        alert(events.map(function(e) { return e.title }).join("\n"));
    };
    $scope.prueba = function(day,event,idx) {

      if(day.events.length>0) {
          // $(event.target).removeAttr( 'style' );
          // $(event.target).removeClass( 'active' );
          console.log('eliminar');
          console.log(idx);
          console.log($scope.events);

          $scope.events.splice(arrayObjectIndexOf($scope.events, day.events[0].date, "date"),1);








      }
      else {
        console.log('añadir');
        console.log(idx);
        $(event.target).addClass('active');
        $(event.target).css("background-color","blue")
        $scope.events.push({date: day.date.format(), title: "eeee"});
      }

        // if($(event.target).hasClass('active')) {
        //     $(event.target).removeAttr( 'style' );
        //     $(event.target).removeClass( 'active' );
        //     $scope.events.splice($scope.events.indexOf(day.date), 1);
        // }
        // else {
        //   $(event.target).addClass('active');
        //   $(event.target).css("background-color","blue")
        //   $scope.events.push({date: day.date.format(), title: "eeee"});
        // }
    };

//mira los cambios de la variable
    $scope.$watchCollection('events', function() {
      console.log('hey, myVar has changed!');
    });

    $scope.set_color = function(day) {
        // if (day.day > 15) {
        // console.log(day);
        // if (day.event) {
        //   return {
        //                'background-color':'blue',
        //                'color': 'red'};
        //            }

        // var addToArray=true;
        // for(var i=0;i<$scope.events.length;i++){

            if (day.events.length>0) {
                // if($scope.events[i].date===day.events[0].date){

                  return {
                    'background-color':'blue',
                    'color': 'red'};
                // }
            }
          // }
        //
        //     // if($scope.events[i].date===day.date.format()){
        //     //     console.log('si');
        //     //     return {
        //     //       'background-color':'blue',
        //     //       'color': 'red'};
        //     // }
        // }
        // if(addToArray){
        //   $scope.todos.push({text:$scope.formTodoLast, name:$scope.formTodoFirst});
        // }
        // console.log(day.events);
        // console.log($scope.events);
        // console.log($scope.events[date].indexOf(day[0].date));
        // if ($scope.events.indexOf(day)) {
        // console.log('si')
        // }
        // else{
        //     console.log('no')
        // }
        // if ($scope.events.indexOf(day.events.date)) {
        //   return {
        //     'background-color':'blue',
        //     'color': 'red'};
        // }
        // }

    };

    $scope.set_class = function(day) {
      if (day.events.length>0) {
          // if($scope.events[i].date===day.events[0].date){
            console.log('deberia devolver active');
            return
              'active';

          // }
      }
    };

    function arrayObjectIndexOf(myArray, searchTerm, property) {
      for(var i = 0, len = myArray.length; i < len; i++) {
          if (myArray[i][property] === searchTerm) return i;
      }
      return -1;
    };




}]);
