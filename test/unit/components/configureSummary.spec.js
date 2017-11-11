'use strict';

describe('Directive: unifiConfigureSummary', function() {
  var suite = {};

  beforeEach(angular.mock.module('example'));

  beforeEach(inject(function($injector) {
    suite.$compile = $injector.get('$compile');
    suite.scope = $injector.get('$rootScope').$new();
  }));

  describe('default', function() {
    beforeEach(function() {
      var template = '<unifi-configure-summary />';

      suite.element = suite.$compile(template)(suite.scope);
      suite.scope.$apply();
      suite.controller = suite.element.controller('unifiConfigureSummary');
    });

    afterEach(function() {
      suite.element.remove();
      suite.scope.$destroy();
      suite = {};
    });

    it('should have labels', function () {
      expect(suite.element.find('.label--right').length).toBe(5);
    });

    it('should have result', function () {
      expect(suite.element.find('.value').length).toBe(5);
    });
  });
});
