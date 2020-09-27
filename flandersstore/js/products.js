(function(){
    let app = angular.module('store-products', [])
    .directive('productTitle', function () {
        return {
            restrict: 'A',
            templateUrl: './templates/product-title.html'
        }
    })

    .directive('productDescription', function () {
        return {
            restrict: 'A',
            templateUrl: './templates/product-description.html'
        }
    })

    .directive('productSpecs', function () {
        return {
            restrict: 'A',
            templateUrl: './templates/product-specs.html'
        }
    })

    .directive('productPanels', function () {
        return {
            restrict: 'E',
            templateUrl: './templates/product-panels.html',
            controller: function () { //funcion anonima con sus propias variables dentro del comportamiento de la directiva
                this.tab = 1  //dejar descripcion como predeterminado
                this.selectTab = function (setTab) { //enviar el valor de la tab y colocarlo a this.tab
                    this.tab = setTab
                }

                this.isSelected = function (checkTab) {
                    return this.tab === checkTab
                }
            },
            controllerAs: 'panels'
        }
    })
    .directive('reviewPanels', function () {
        return {
            restrict: 'E',
            templateUrl: './templates/product-reviews.html',
            controller: function () { 
                this.review = {} //obj vacio

        //para que funcione ng-submit
        this.addReview = function (product) {
            console.log(product) //verificar si el producto esta llegando o no
            this.review.createdOn = new Date();
            product.reviews.push(this.review)
            this.review = {} //inicializar variable review
        }
            },
            controllerAs: 'reviewCtlr'
        }
    })

    .directive('productGallery', function () {
        return {
            restrict: 'E', //directiva de tipo elemento
            templateUrl: './templates/product-gallery.html',
            controller: function () { 
                this.current = 0 //va a escoger la primera imagen del obj de gemas
                this.setCurrent= function(i){
                    this.current=i || 0;
                }
                this.isSet=function(i){
                    return i === this.current
                }
            },
            controllerAs: 'gallery'
        }
    })
})()