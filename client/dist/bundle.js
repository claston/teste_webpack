webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header text-center\">\n\t<h1>{{foto.titulo}}</h1>\n</div>\n\n<p ng-show=\"mensagem.length\" class=\"alert alert-info\">{{mensagem}}</p>\n\n<form novalidate name=\"formulario\" class=\"row\" ng-submit=\"submeter()\">\n\t<div class=\"col-md-6\">\n\t\t<div class=\"form-group\">\n\t\t\t<label>Título</label>\n\t\t\t<input name=\"titulo\" class=\"form-control\" ng-model=\"foto.titulo\" required>  \n\n\t\t\t<span ng-show = \"formulario.$submitted && formulario.titulo.$error.required\"\n\t\t\t\tclass=\"form-control alert-danger\">\n\t\t\t\tTítulo obrigatório\n\t\t\t</span>\n\t\t\t<span ng-show=\"formulario.$submitted && formulario.titulo.$error.maxlength\" \n\t\t\t\tclass=\"form-control alert-danger\">\n\t\t\t\tNo máximo 20 caracteres!\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>URL</label>\n\t\t\t<input name=\"url\" class=\"form-control\" ng-model=\"foto.url\" required>\n\n\t\t\t<span ng-show = \"formulario.$submitted && formulario.url.$error.required\" \n\t\t\t\tclass=\"form-control alert-danger\">\n\t\t\t\tURL obrigatória\n\t\t\t</span> \n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>Descrição</label>\n\t\t\t<textarea name=\"descricao\" class=\"form-control\" ng-model=\"foto.descricao\">\n\t\t\t</textarea>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label>Grupo</label>\n\t\t\t<select name=\"grupo\" ng-model=\"foto.grupo\" class=\"form-control\" \n\t\t\t\t\trequired ng-controller=\"GruposController\" \n\t\t\t\t\tng-options=\"grupo._id as (grupo.nome | uppercase) for grupo in grupos\">\n\t\t\t\t<option value=\"\">Escolha um grupo</option>\n\t\t\t</select>\n\t\t\t<span ng-show=\"formulario.$submitted && formulario.grupo.$error.required\" \n\t\t\t\tclass=\"form-control alert-danger\">\n\t\t\t\tGrupo obrigatório\n\t\t\t</span>\n\t\t</div>\n\n\t\t<button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"formulario.$invalid\">\n\t\t\tSalvar\n\t\t</button>\n\t\t<a href=\"./\" meu-focus class=\"btn btn-primary\">Voltar</a>\n\t\t<hr>\n\t</div>\n\t<div class=\"col-md-6\">\n\t\t<minha-foto url=\"{{foto.url}}\" titulo=\"{{foto.titulo}}\"></minha-foto>\n\t</div>\n</form>";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\t<h1 class=\"text-center\">Alurapic</h1>\n</div>\n\n<p ng-show=\"mensagem.length\" class=\"alert alert-info\">\n\t{{mensagem}}\n</p>\n\n<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t\t<form>\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t<a href=\"./fotos/new\" class=\"btn btn-primary\" type=\"button\">\n\t\t\t\t\t\tNova foto\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t\t<input class=\"form-control\" placeholder=\"filtrar pelo título da foto\" \n\t\t\t\t\tng-model=\"filtro\" ng-model-options=\"{ debounce: 500 }\">\n\t\t</form>\n\t</div> <!-- fim col-md-12 -->\n</div> <!-- fim row -->\n\n<div class=\"row\">\n    <meu-painel class=\"col-md-2 painel-animado\" ng-repeat=\"foto in fotos | filter: filtro\" titulo=\"{{foto.titulo}}\">\n        <minha-foto url=\"{{foto.url}}\" alt=\"{{foto.titulo}}\"></minha-foto>\n\n\t\t<a class=\"btn btn-primary btn-block\" href=\"./fotos/edit/{{foto._id}}\">\n\t\t\tEditar\n\t\t</a>\n\t\t<meu-botao-perigo nome=\"Remover\" acao=\"remover(foto)\">Remover</meu-botao-perigo>\n    </meu-painel>\n</div>\n<meus-titulos></meus-titulos>\n\n\n<highchart id=\"teste\" config=\"chartConfig\" ></highchart>\n\t\n\n\n<div style=\"display:inline-block; min-height:290px;\">\n\t<div uib-datepicker ng-model=\"dt\" class=\"well well-sm\" datepicker-options=\"options\"></div>\n</div>\n\n<div id=\"meu-calendario\">\n\n\n\t<div ui-calendar=\"calendarConfig.calendar\" calendar=\"myCalendar\" ng-model=\"eventSources\"></div>\n\t\n</div>\n\n\n";

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_main_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_controllers_fotos_controller_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_controllers_fotos_controller_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_controllers_fotos_controller_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_controllers_foto_controller_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_controllers_foto_controller_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_controllers_foto_controller_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_controllers_grupos_controller_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_controllers_grupos_controller_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__js_controllers_grupos_controller_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_directives_minhas_diretivas_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_directives_minhas_diretivas_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_directives_minhas_diretivas_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_services_meus_servicos_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_services_meus_servicos_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__js_services_meus_servicos_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bootstrap_dist_css_bootstrap_theme_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bootstrap_dist_css_bootstrap_theme_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bootstrap_dist_css_bootstrap_theme_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bootstrap_js_modal_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bootstrap_js_modal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_bootstrap_js_modal_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_fullcalendar_dist_fullcalendar_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_fullcalendar_dist_fullcalendar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_fullcalendar_dist_fullcalendar_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_ui_calendar_src_calendar_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_ui_calendar_src_calendar_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular_ui_calendar_src_calendar_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__css_efeitos_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__css_efeitos_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__css_efeitos_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__partials_foto_html__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__partials_foto_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__partials_foto_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__partials_principal_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__partials_principal_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__partials_principal_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__css_teste_scss__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__css_teste_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__css_teste_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_highcharts_css_highcharts_css__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_highcharts_css_highcharts_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_highcharts_css_highcharts_css__);






















/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config_js__ = __webpack_require__(6);


angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'ngResource', 'meusServicos', 'ui.calendar', 'highcharts-ng', 'ui.bootstrap']).config(__WEBPACK_IMPORTED_MODULE_0__app_config_js__["a" /* default */]);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routing;

routing.$inject = ['$routeProvider', '$locationProvider'];

function routing($routeProvider, $locationProvider) {

	$routeProvider.when('/fotos', {
		//templateUrl: 'partials/principal.html',
		template: __webpack_require__(2),
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/new', {
		//templateUrl: 'partials/foto.html',
		template: __webpack_require__(1),
		controller: 'FotoController'
	});

	$routeProvider.when('/fotos/edit/:fotoId', {
		//templateUrl: 'partials/foto.html',
		template: __webpack_require__(1),
		controller: 'FotoController'
	});

	$routeProvider.otherwise({ redirectTo: '/fotos' });

	$locationProvider.html5Mode(true);
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

angular.module('alurapic').controller('FotosController', ['$scope', '$timeout', 'recursoFoto', function ($scope, $timeout, recursoFoto) {

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	$scope.options = {
		//customClass: getDayClass,
		minDate: new Date(),
		showWeeks: true
	};

	$scope.eventSources = [];

	$scope.calendarConfig = {
		calendar: {
			height: "100%"
		}
	};

	$timeout(function () {
		console.log($scope.myCalendar);
	}, 1);

	var barConfig = {
		options: {
			chart: {
				type: 'column'
			}
		},
		series: []
		//$scope.chartConfig = barConfig;
	};var data = [{ data: [10, 3, 16, 56, 42, 67, 24, 33] }];

	$scope.chartConfig = barConfig;

	$scope.chartConfig.series = data;

	recursoFoto.query(function (fotos) {
		$scope.fotos = fotos;
		console.log($scope.myCalendar);
	}, function (erro) {
		console.log(erro);
	});

	$scope.remover = function (foto) {

		recursoFoto.delete({ fotoId: foto._id }, function () {
			var indiceDaFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceDaFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
		}, function (erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
		});
	};
}]);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

angular.module('alurapic').controller('FotoController', ['$scope', 'recursoFoto', '$routeParams', 'cadastroDeFotos', function ($scope, recursoFoto, $routeParams, cadastroDeFotos) {

	$scope.foto = {};
	$scope.mensagem = '';

	if ($routeParams.fotoId) {
		recursoFoto.get({ fotoId: $routeParams.fotoId }, function (foto) {
			$scope.foto = foto;
		}, function (erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível obter a foto';
		});
	}

	$scope.submeter = function () {

		if ($scope.formulario.$valid) {
			cadastroDeFotos.cadastrar($scope.foto).then(function (dados) {
				$scope.mensagem = dados.mensagem;
				if (dados.inclusao) $scope.foto = {};
			}).catch(function (erro) {
				$scope.mensagem = erro.mensagem;
			});
		}
	};
}]);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('alurapic').controller('GruposController', function ($scope, $http) {
	$http.get(`${"http://localhost:5000"}/v1/grupos`).success(function (grupos) {
		$scope.grupos = grupos;
	}).error(function (erro) {
		console.log(erro);
	});
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

angular.module('minhasDiretivas', []).directive('meuPainel', function () {

    var ddo = {};

    ddo.restrict = "AE";
    ddo.transclude = true;

    ddo.scope = {
        titulo: '@'
    };

    // ddo.templateUrl = 'js/directives/meu-painel.html';

    ddo.template = '<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title text-center">{{titulo}}</h3></div><div class="panel-body" ng-transclude></div></div>';

    return ddo;
}).directive('minhaFoto', function () {

    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';

    return ddo;
}).directive('meuBotaoPerigo', function () {
    var ddo = {};
    ddo.restrict = "E";
    ddo.scope = {
        nome: '@',
        acao: '&'
    };
    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

    return ddo;
}).directive('meuFocus', function () {
    var ddo = {};
    ddo.restrict = "A";

    ddo.link = function (scope, element) {
        scope.$on('fotoCadastrada', function () {
            element[0].focus();
        });
    };

    return ddo;
}).directive('meusTitulos', function () {
    var ddo = {};
    ddo.restrict = 'E';
    ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
    ddo.controller = function ($scope, recursoFoto) {
        recursoFoto.query(function (fotos) {
            $scope.titulos = fotos.map(function (foto) {
                return foto.titulo;
            });
        });
    };
    return ddo;
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('meusServicos', ['ngResource']).factory('recursoFoto', function ($resource) {

	return $resource(`${"http://localhost:5000"}/v1/fotos/:fotoId`, null, {
		'update': {
			method: 'PUT'
		}
	});
}).factory("cadastroDeFotos", function (recursoFoto, $q, $rootScope) {

	var evento = 'fotoCadastrada';

	var service = {};

	service.cadastrar = function (foto) {
		return $q(function (resolve, reject) {

			if (foto._id) {
				recursoFoto.update({ fotoId: foto._id }, foto, function () {

					$rootScope.$broadcast(evento);
					resolve({
						mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
						inclusao: false
					});
				}, function (erro) {
					console.log(erro);
					reject({
						mensagem: 'Não foi possível atualizar a foto ' + foto.titulo
					});
				});
			} else {
				recursoFoto.save(foto, function () {
					$rootScope.$broadcast(evento);
					resolve({
						mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
						inclusao: true
					});
				}, function (erro) {
					console.log(erro);
					reject({
						mensagem: 'Não foi possível incluir a foto ' + foto.titulo
					});
				});
			}
		});
	};
	return service;
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*
*  AngularJs Fullcalendar Wrapper for the JQuery FullCalendar
*  API @ http://arshaw.com/fullcalendar/
*
*  Angular Calendar Directive that takes in the [eventSources] nested array object as the ng-model and watches it deeply changes.
*       Can also take in multiple event urls as a source object(s) and feed the events per view.
*       The calendar will watch any eventSource array and update itself when a change is made.
*
*/

angular.module('ui.calendar', [])
  .constant('uiCalendarConfig', {})
  .controller('uiCalendarCtrl', ['$scope', '$timeout', '$locale', function($scope, $timeout, $locale){

      var sourceSerialId = 1,
          eventSerialId = 1,
          sources = $scope.eventSources,
          extraEventSignature = $scope.calendarWatchEvent ? $scope.calendarWatchEvent : angular.noop,

          wrapFunctionWithScopeApply = function(functionToWrap){
              var wrapper;

              if (functionToWrap){
                  wrapper = function(){
                      // This happens outside of angular context so we need to wrap it in a timeout which has an implied apply.
                      // In this way the function will be safely executed on the next digest.

                      var args = arguments;
                      var _this = this;
                      $timeout(function(){
                        functionToWrap.apply(_this, args);
                      });
                  };
              }

              return wrapper;
          };

      this.eventsFingerprint = function(e) {
        if (!e._id) {
          e._id = eventSerialId++;
        }
        // This extracts all the information we need from the event. http://jsperf.com/angular-calendar-events-fingerprint/3
        return "" + e._id + (e.id || '') + (e.title || '') + (e.url || '') + (+e.start || '') + (+e.end || '') +
          (e.allDay || '') + (e.className || '') + extraEventSignature(e) || '';
      };

      this.sourcesFingerprint = function(source) {
          return source.__id || (source.__id = sourceSerialId++);
      };

      this.allEvents = function() {
        // return sources.flatten(); but we don't have flatten
        var arraySources = [];
        for (var i = 0, srcLen = sources.length; i < srcLen; i++) {
          var source = sources[i];
          if (angular.isArray(source)) {
            // event source as array
            arraySources.push(source);
          } else if(angular.isObject(source) && angular.isArray(source.events)){
            // event source as object, ie extended form
            var extEvent = {};
            for(var key in source){
              if(key !== '_uiCalId' && key !== 'events'){
                 extEvent[key] = source[key];
              }
            }
            for(var eI = 0;eI < source.events.length;eI++){
              angular.extend(source.events[eI],extEvent);
            }
            arraySources.push(source.events);
          }
        }

        return Array.prototype.concat.apply([], arraySources);
      };

      // Track changes in array by assigning id tokens to each element and watching the scope for changes in those tokens
      // arguments:
      //  arraySource array of function that returns array of objects to watch
      //  tokenFn function(object) that returns the token for a given object
      this.changeWatcher = function(arraySource, tokenFn) {
        var self;
        var getTokens = function() {
          var array = angular.isFunction(arraySource) ? arraySource() : arraySource;
          var result = [], token, el;
          for (var i = 0, n = array.length; i < n; i++) {
            el = array[i];
            token = tokenFn(el);
            map[token] = el;
            result.push(token);
          }
          return result;
        };
        // returns elements in that are in a but not in b
        // subtractAsSets([4, 5, 6], [4, 5, 7]) => [6]
        var subtractAsSets = function(a, b) {
          var result = [], inB = {}, i, n;
          for (i = 0, n = b.length; i < n; i++) {
            inB[b[i]] = true;
          }
          for (i = 0, n = a.length; i < n; i++) {
            if (!inB[a[i]]) {
              result.push(a[i]);
            }
          }
          return result;
        };

        // Map objects to tokens and vice-versa
        var map = {};

        var applyChanges = function(newTokens, oldTokens) {
          var i, n, el, token;
          var replacedTokens = {};
          var removedTokens = subtractAsSets(oldTokens, newTokens);
          for (i = 0, n = removedTokens.length; i < n; i++) {
            var removedToken = removedTokens[i];
            el = map[removedToken];
            delete map[removedToken];
            var newToken = tokenFn(el);
            // if the element wasn't removed but simply got a new token, its old token will be different from the current one
            if (newToken === removedToken) {
              self.onRemoved(el);
            } else {
              replacedTokens[newToken] = removedToken;
              self.onChanged(el);
            }
          }

          var addedTokens = subtractAsSets(newTokens, oldTokens);
          for (i = 0, n = addedTokens.length; i < n; i++) {
            token = addedTokens[i];
            el = map[token];
            if (!replacedTokens[token]) {
              self.onAdded(el);
            }
          }
        };
        return self = {
          subscribe: function(scope, onChanged) {
            scope.$watch(getTokens, function(newTokens, oldTokens) {
              if (!onChanged || onChanged(newTokens, oldTokens) !== false) {
                applyChanges(newTokens, oldTokens);
              }
            }, true);
          },
          onAdded: angular.noop,
          onChanged: angular.noop,
          onRemoved: angular.noop
        };
      };

      this.getFullCalendarConfig = function(calendarSettings, uiCalendarConfig){
          var config = {};

          angular.extend(config, uiCalendarConfig);
          angular.extend(config, calendarSettings);
         
          angular.forEach(config, function(value,key){
            if (typeof value === 'function'){
              config[key] = wrapFunctionWithScopeApply(config[key]);
            }
          });

          return config;
      };

    this.getLocaleConfig = function(fullCalendarConfig) {
      if (!fullCalendarConfig.lang || fullCalendarConfig.useNgLocale) {
        // Configure to use locale names by default
        var tValues = function(data) {
          // convert {0: "Jan", 1: "Feb", ...} to ["Jan", "Feb", ...]
          var r, k;
          r = [];
          for (k in data) {
            r[k] = data[k];
          }
          return r;
        };
        var dtf = $locale.DATETIME_FORMATS;
        return {
          monthNames: tValues(dtf.MONTH),
          monthNamesShort: tValues(dtf.SHORTMONTH),
          dayNames: tValues(dtf.DAY),
          dayNamesShort: tValues(dtf.SHORTDAY)
        };
      }
      return {};
    };
  }])
  .directive('uiCalendar', ['uiCalendarConfig', function(uiCalendarConfig) {
    return {
      restrict: 'A',
      scope: {eventSources:'=ngModel',calendarWatchEvent: '&'},
      controller: 'uiCalendarCtrl',
      link: function(scope, elm, attrs, controller) {

        var sources = scope.eventSources,
            sourcesChanged = false,
            eventSourcesWatcher = controller.changeWatcher(sources, controller.sourcesFingerprint),
            eventsWatcher = controller.changeWatcher(controller.allEvents, controller.eventsFingerprint),
            options = null;

        function getOptions(){
          var calendarSettings = attrs.uiCalendar ? scope.$parent.$eval(attrs.uiCalendar) : {},
              fullCalendarConfig;

          fullCalendarConfig = controller.getFullCalendarConfig(calendarSettings, uiCalendarConfig);

          var localeFullCalendarConfig = controller.getLocaleConfig(fullCalendarConfig);
          angular.extend(localeFullCalendarConfig, fullCalendarConfig);

          options = { eventSources: sources };
          angular.extend(options, localeFullCalendarConfig);

          var options2 = {};
          for(var o in options){
            if(o !== 'eventSources'){
              options2[o] = options[o];
            }
          }
          return JSON.stringify(options2);
        }

        scope.destroy = function(){
          if(scope.calendar && scope.calendar.fullCalendar){
            scope.calendar.fullCalendar('destroy');
          }
          if(attrs.calendar) {
            scope.calendar = scope.$parent[attrs.calendar] =  $(elm).html('');
          } else {
            scope.calendar = $(elm).html('');
          }
        };

        scope.init = function(){
          scope.calendar.fullCalendar(options);
        };

        eventSourcesWatcher.onAdded = function(source) {
            scope.calendar.fullCalendar('addEventSource', source);
            sourcesChanged = true;
        };

        eventSourcesWatcher.onRemoved = function(source) {
          scope.calendar.fullCalendar('removeEventSource', source);
          sourcesChanged = true;
        };

        eventsWatcher.onAdded = function(event) {
          scope.calendar.fullCalendar('renderEvent', event);
        };

        eventsWatcher.onRemoved = function(event) {
          scope.calendar.fullCalendar('removeEvents', function(e) { 
            return e._id === event._id;
          });
        };

        eventsWatcher.onChanged = function(event) {
          event._start = $.fullCalendar.moment(event.start);
          event._end = $.fullCalendar.moment(event.end);
          scope.calendar.fullCalendar('updateEvent', event);
        };

        eventSourcesWatcher.subscribe(scope);
        eventsWatcher.subscribe(scope, function(newTokens, oldTokens) {
          if (sourcesChanged === true) {
            sourcesChanged = false;
            // prevent incremental updates in this case
            return false;
          }
        });

        scope.$watch(getOptions, function(newO,oldO){
            scope.destroy();
            scope.init();
        });
      }
    };
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[4]);