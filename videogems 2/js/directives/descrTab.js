(function(){

    let app = angular.module('descrtab',[])

    app.directive('descrTab', function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/descr-tab.html',
            controller: function(){
                console.log("descr tab")
            }
        }
    })
})();