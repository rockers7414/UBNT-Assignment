'use strict';

angular.module('example').config([
  '$urlRouterProvider',
  '$locationProvider',
  function (
    $urlRouterProvider,
    $locationProvider
  ) {
    $urlRouterProvider
      .otherwise('/');
  }
]);
