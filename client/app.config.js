
routing.$inject = ['$routeProvider', '$locationProvider'];

export default function routing($routeProvider, $locationProvider) {
  
  $routeProvider.when('/fotos', {
		//templateUrl: 'partials/principal.html',
		template : require('./partials/principal.html'),
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/new', {
		//templateUrl: 'partials/foto.html',
		template : require('./partials/foto.html'),
		controller: 'FotoController'
	});

	$routeProvider.when('/fotos/edit/:fotoId', {
		//templateUrl: 'partials/foto.html',
		template : require('./partials/foto.html'),
		controller: 'FotoController'
	});

	$routeProvider.otherwise({redirectTo: '/fotos'});

  $locationProvider.html5Mode(true);


}