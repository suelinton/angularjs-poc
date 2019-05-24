angular.module('alurapic')
    .controller('FotoController', function ($scope, $http) {
        $scope.foto = {};
        $scope.mensagem = '';

        $scope.submeter = function () {
            if ($scope.formulario.$valid) {
                console.log($scope.formulario)
                $http.post('/v1/fotos', $scope.foto)
                    .success(function () { 
                        $scope.foto = {};

                        $scope.formulario.$dirty = false;
                        $scope.mensagem = 'Foto add com sucesso' 
                    })
                    .error(function (erro) { 
                        console.log('Não foi possível cadastrar a foto'); 
                        $scope.mensagem = 'Não foi possível cadastrar a foto'; 
                    })
            }
        };
    });