angular.module('alurapic').controller('FotosController', [ '$scope', '$timeout', 'recursoFoto' ,function($scope, $timeout, recursoFoto) {
	
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
		calendar:{
			height: "100%"
		}
	};

	$timeout( function(){
		console.log($scope.myCalendar);
	
	}, 1 );

	var barConfig = {
        options: {
                chart: {
                    type: 'column',
                },
            },
            series: []
    }
	//$scope.chartConfig = barConfig;
	var data = [
		{ data: [10,3,16,56,42,67,24,33] },];

	$scope.chartConfig = barConfig;

	$scope.chartConfig.series = data;




	recursoFoto.query(function(fotos) {
		$scope.fotos = fotos;
		console.log($scope.myCalendar);
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(foto) {

		recursoFoto.delete({fotoId: foto._id}, function() {
			var indiceDaFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceDaFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
		});
	};

}]);