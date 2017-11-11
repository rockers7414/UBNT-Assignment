'use strict';

angular.module('example').filter('join', function() {
  return function (arr) {
    if (!arr) {
      return '';
    }
    return arr.join();
  };
});
