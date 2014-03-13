/* global app:true */

'use strict';

var app = angular.module('yoyoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
.constant('FIREBASE_URL', 'https://yoyo.firebaseio.com/:id.json');

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html', 
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
