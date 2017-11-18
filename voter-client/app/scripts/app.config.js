;(function (ng) {
  'use strict';

  ng.module('voterClientApp')
    .config([
      '$locationProvider',
      function ($locationProvider) {

        $locationProvider.html5Mode(true);

      }
    ]);
}(window.angular));
