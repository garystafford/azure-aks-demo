;(function (ng) {
  'use strict';

  ng.module('voterClientApp')
    .constant('EnvironmentConfig', {
      // 'apiUrl': 'http://localhost',
      'apiUrl': 'http://voter',
      'apiPort': '8099'
    });
}(window.angular));
