//MODULO QUE VA A MANEJAR TODA LA ESTRUCTURA DE LA APP
(function () {
    let app = angular.module('bookStoreApp', []) //[] es una inyeccion de dependencias

    //controlador que maneja la estructura de los productos
    //Inyecto dependencias ($http) del json
    app.controller('ProductsController', ['$http', function ($http) {
        let products = this //una variable books va a manejar el scope de este controlador, para eso utilizo la palabra this
        products.books = []
        $http({
            method: 'GET', //mandar un objeto (un metodo) al http
            url: '../books.json'
        }).then(function success(response) {
            console.log(response.data)
            products.books = response.data
        }, function error(response) {
            console.log(response)
        })
    }])

    app.config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/Principal');
        $stateProvider
            .state('principal',{
                url:'/Principal',
                templateUrl:'./templates/principal.html'
            })
            .state('2',{
                url:'/juegotronos',
                templateUrl:'./templates/juegotronos.html'
            })
            .state('1',{
                url:'/juegoender',
                templateUrl:'./templates/juegoender.html'
            })
            .state('3',{
                url:'/irobot',
                templateUrl:'./templates/irobot.html'
            })
    })
})()