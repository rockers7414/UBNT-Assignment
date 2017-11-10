'use strict';

function ConfigureFormController () {
  this.colors = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Black'
  ];

  this.cities = [
    'Chicago',
    'Seattle',
    'Los Angeles'
  ];
}

ConfigureFormController.$inject = [];

angular.module('example').controller('ConfigureFormController', ConfigureFormController);
