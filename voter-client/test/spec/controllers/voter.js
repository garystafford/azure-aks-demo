'use strict';

describe('voterClientApp', function() {
  beforeEach(module('voterClientApp'));

  var CONTROLLER_NAME = 'VoterController';
  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('init', function() {
    var $scope, controller;

    it('should create the controller correctly', inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      controller = $controller(CONTROLLER_NAME, {$scope: $scope});
    }));
  });

  // http://www.bradoncode.com/blog/2015/07/25/tip-unit-test-promise-angular/
  describe('Testing $q directly', function () {
    var deferred;
    var $q;
    var $scope;

    beforeEach(inject(function($controller, _$q_, _$rootScope_, VoterService) {
      $q = _$q_;
      $scope = _$rootScope_;
      deferred = _$q_.defer();

      // Use a Jasmine Spy to return the deferred promise
      spyOn(VoterService, 'getCandidates').and.returnValue(deferred.promise);

      $controller(CONTROLLER_NAME, {
        $scope: $scope, VoterService: VoterService
      });
    }));

    it('should resolve promise', function () {
      var response;

      deferred.promise.then(function(data) {
        response = data;
      });

      deferred.resolve('Returned OK!');
      $scope.$apply();
      expect(response).toBe('Returned OK!');
    });
  });
});

