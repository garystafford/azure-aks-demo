;(function (ng) {
  'use strict';

  ng.module('voterClientApp')
    .constant('EnvironmentConfig', {
      // 'apiUrl': 'http://localhost',
      // 'apiPort': '8099',
      'apiUrl': 'http://api.voter-demo.com'
    });
}(window.angular));
