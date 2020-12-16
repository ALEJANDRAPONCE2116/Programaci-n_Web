(function(){
    let app = angular.module('navbar',[])

    app.directive("navbar",function(){
        return {
            restrict: "E",
            templateUrl: "partials/navbar.html",
            controller: function(){
                console.log("navbar")
            },
            controllerAs: "nav"
        }
    })
})();