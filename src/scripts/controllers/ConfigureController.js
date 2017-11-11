'use strict';

function ConfigureController (
  translateResolver
) {
  translateResolver.resolve('example');

  this.config = {};

  this.onApply = function(value) {
    this.config = value;
  };
}

ConfigureController.$inject = [
  'translateResolver'
];

angular.module('example').controller('ConfigureController', ConfigureController);
