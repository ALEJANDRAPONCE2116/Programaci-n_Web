(function(){

    let app = angular.module('gallery',[])

    app.directive('productGallery', function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/product-gallery.html',
            controller: function(){
                this.current=0

                this.setCurrent=function(i){
                    this.current = i || 0
                }

                this.isSet=function(i){
                    return i === this.current
                }
            },
            controllerAs:'gallery'
        }
    })
})();