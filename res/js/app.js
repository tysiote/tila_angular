'use strict';
let app = angular.module('TilaWebApp', ['ngRoute'])
    .directive('setHeight', function($window){
    return{
        link: function(scope, element, attrs){
            element.css('height', $window.outerHeight + 'px');
            //element.height($window.innerHeight/3);
        }
    }
});
app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "main.html"
    })
        .when("/contact", {
            templateUrl: "contact.html"
        })
        .when("/about", {
            templateUrl: "about.html"
        })
        .when("/projects", {
            templateUrl: "projects.html"
        });
});