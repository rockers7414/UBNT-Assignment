'use strict';

angular.module('example').directive('unifiConfigureForm', [
  function () {
    return {
      controller: 'ConfigureFormController',
      controllerAs: 'configureFormCtrl',
      scope: {
        onapply: '&'
      },
      template: require('./configureForm.jade')()
    };
  }
]);
