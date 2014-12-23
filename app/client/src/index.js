'use strict';

require('angular');
require('angular-ui-bootstrap');
require('angular-ui-router');

require('./modules/home');

angular.module('ngstrom', ['ngstrom.home']);
