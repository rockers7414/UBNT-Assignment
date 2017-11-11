'use strict';

function ConfigureFormController($scope, $state) {
  this.colorCheck = function(color) {
    var idx = this.config.colors.indexOf(color.key);
    if (idx > -1) {
      this.config.colors.splice(idx, 1);
    } else {
      this.config.colors.push(color.key);
    }
  };

  this.resetClick = function() {
    this.colors = [
      { key:'Red', value: false },
      { key:'Orange', value: false },
      { key:'Yellow', value: false },
      { key:'Green', value: false },
      { key:'Blue', value: false },
      { key:'Purple', value: false },
      { key:'Black', value: false }
    ];
    this.cities = [
      'Chicago',
      'Seattle',
      'Los Angeles'
    ];
    this.config = {
      firstName: '',
      LastName: '',
      colors: [],
      city: '',
      verified: false
    };
  };

  this.applyClick = function() {
    var _value = JSON.parse(JSON.stringify(this.config));
    $scope.onapply({value: _value});
    this.resetClick();
  };

  this.cancelClick = function() {
    $state.go('home');
  };

  this.resetClick();
}

ConfigureFormController.$inject = ['$scope', '$state'];

angular.module('example').controller('ConfigureFormController', ConfigureFormController);
