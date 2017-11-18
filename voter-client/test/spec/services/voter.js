'use strict';

xdescribe('VoterService', function() {
  var _VoterService;

  beforeEach(module('voterClientApp'));

  beforeEach(inject(function($injector) {
    _VoterService = $injector.get('VoterService');
  }));

  describe('instance', function() {
    it('should have the right prop for the instance', function() {
      var _something = new _VoterService();

      expect(_something.something).toEqual(123);
    });
  });

  describe('isValid', function() {
    it('should return true', function() {
      var _something = new _VoterService();

      expect(_something.isValid()).toBeTruthy();
    });
  });
});
