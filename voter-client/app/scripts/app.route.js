;(function (ng) {
  'use strict';

  ng.module('voterClientApp')
    .config([
      '$routeProvider',
      function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'views/voter.html',
            controller: 'VoterController',
            controllerAs: 'voter'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));
