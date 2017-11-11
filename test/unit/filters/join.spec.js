'use strict';

describe('Filter: join', function() {
  var filter;

  beforeEach(angular.mock.module('example'));

  beforeEach(inject(function(joinFilter) {
    filter = joinFilter;
  }));

  it('should join elements of an array', function() {
    expect(filter(['a', 'b'])).toBe('a,b');
  });
});
