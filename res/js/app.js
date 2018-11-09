'use strict';
let app = angular.module('TilaWebApp', ['ngRoute']);
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