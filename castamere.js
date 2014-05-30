'use strict';

carbon.registerModule('carbon.castamere');

angular.module('carbon.castamere', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider.state('castamereHome', {
            url: '/castamere',
            templateUrl: 'components/carbon-castamere/main.html',
            controller: 'castamereCtrl',
            navigationBar: {
                name: 'Catamere',
                glyphicon: 'asterisk',
                weight: 0
            }
        });
    })
    .controller('castamereCtrl', function ($scope, Ned) {
        $scope.verse = 'And now the rains weep o\'er his hall and not a soul to hear.';

        Ned.saySomething().success(function (data) {
            $scope.nedSays = data.message;
        });
    })
    .service('Ned', function ($http) {
        return {
            saySomething: function () {
                return $http.get('https://api.myjson.com/bins/2dcjp');
            }
        };
    });