'use strict';

angular.module('example').directive('unifiConfigureSummary', [
  function () {
    return {
      controller: 'ConfigureSummaryController',
      controllerAs: 'configureSummaryCtrl',
      template: require('./configureSummary.jade')()
    };
  }
]);
