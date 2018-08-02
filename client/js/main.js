import routing from '../app.config.js';

angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos', 'ui.calendar', 'highcharts-ng', 'ui.bootstrap'])
	.config(routing);
