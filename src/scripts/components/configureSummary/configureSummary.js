'use strict';

angular.module('example').directive('unifiConfigureSummary', [
  function () {
    return {
      controller: 'ConfigureSummaryController',
      controllerAs: 'configureSummaryCtrl',
      scope: {
        config: '='
      },
      template: require('./configureSummary.jade')()
    };
  }
]);
