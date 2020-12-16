(function(){

    let app = angular.module('panels',[])
    
    app.directive("productPanels", function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/product-panels.html',
            controller: function (){
                this.current=0

                this.setCurrent=function(i){
                    this.current= i || 0
                }

                this.isSet=function(i){
                    return i === this.current
                }
            },
            controllerAs: 'panel'
        }
    })
})();