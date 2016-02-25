var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '../views/templates/home.html'
        })
        .when('/jamie', {
            templateUrl: '../views/templates/jamie.html',
            controller: 'buttonController'
        })
        .when('/claire', {
            templateUrl: '../views/templates/claire.html',
            controller: 'buttonController'
        })
        .when('/jackrandall', {
            templateUrl: '../views/templates/jackrandall.html',
            controller: 'buttonController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);


