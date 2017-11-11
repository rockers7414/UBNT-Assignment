'use strict';

describe('Directive: unifiConfigureForm', function() {
  var suite = {};

  beforeEach(angular.mock.module('example'));

  beforeEach(inject(function($injector) {
    suite.$compile = $injector.get('$compile');
    suite.location = $injector.get('$location');
    suite.scope = $injector.get('$rootScope').$new();
  }));

  describe('default', function() {
    beforeEach(function() {
      var template = '<unifi-configure-form />';

      suite.element = suite.$compile(template)(suite.scope);
      suite.scope.$apply();
      suite.controller = suite.element.controller('unifiConfigureForm');
    });

    afterEach(function() {
      suite.element.remove();
      suite.scope.$destroy();
      suite = {};
    });

    it('should have labels', function () {
      expect(suite.element.find('.form__label').length).toBe(5);
    });

    it('should have controls', function() {
      expect(suite.element.find('input[type="text"]').length).toBe(2);
      expect(suite.element.find('input[name="colors"]').length).toBe(7);
      expect(suite.element.find('input[name="city"]').length).toBe(3);
      expect(suite.element.find('input#verified').length).toBe(1);
    });

    it('should have buttons', function() {
      expect(suite.element.find('button.appMainButton--success').length).toBe(1);
      expect(suite.element.find('button.appMainButton--transparent').length).toBe(1);
      expect(suite.element.find('button.appMainButton--danger').length).toBe(1);
    });

    it('should reset form when calling reset', function() {
      suite.controller.resetClick();
      expect(JSON.stringify(suite.controller.config)).toBe(JSON.stringify({
        firstName: '',
        LastName: '',
        colors: [],
        city: '',
        verified: false
      }));
    });

    it('should invoke callback when calling apply', function() {
      var isolateScope = suite.element.isolateScope();
      spyOn(suite.controller, 'resetClick');
      spyOn(isolateScope, 'onapply');
      suite.controller.applyClick();
      expect(suite.controller.resetClick).toHaveBeenCalled();
      expect(isolateScope.onapply).toHaveBeenCalled();
    });

    it('should navigate to home when calling cancel', function() {
      suite.location.path('/configure');
      expect(suite.location.path()).toBe('/configure');
      suite.controller.cancelClick();
      expect(suite.location.path()).toBe('/');
    });

    it('should push/remove the color into/from config.', function() {
      expect(JSON.stringify(suite.controller.config.colors)).toBe(JSON.stringify([]));
      suite.controller.colorCheck({ key:'Red', value: false });
      expect(JSON.stringify(suite.controller.config.colors)).toBe(JSON.stringify(['Red']));
      suite.controller.colorCheck({ key:'Red', value: false });
      expect(JSON.stringify(suite.controller.config.colors)).toBe(JSON.stringify([]));
    });
  });
});
