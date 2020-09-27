(function () {
    let app = angular.module('store', ['store-products']) //arreglo en especifico donde se van a crear las dependencias inyectadas en el proyecto.




    //controller: se va a encargar de manejar directamente la aplicaci'on en especifico
    //funcion como parametro: va a generar el scope de las variables
    app.controller('StoreController', ['$http','$log', function ($http, $log) { //arreglo de funciones que inyecta la dependencia del json
        let store = this
        store.products = []

        // Simple GET request example: Hacer usos o llamadas a un elemento externo de la app
        $http({
            method: 'GET',
            url: '../products.json'
        }).then(function successCallback(response) {
            $log.info("Response data", response.data)
            store.products = response.data;
        }, function errorCallback(response) {
            $log.error(response)
        });
    }]);

    //controller: se va a encargar de manejar directamente los paneles
    //funcion como parametro: va a generar el scope de las variables
    /*  app.controller('PanelController', function () {
  
      })
  
      //
      app.controller('ReviewController', function () {
          
      })*/


})();