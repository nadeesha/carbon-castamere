'use strict';

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
    .controller('castamereCtrl', function ($scope) {
        $scope.verse = 'And now the rains weep o\'er his hall and not a soul to hear.';
    });
