(function(){
    let app = angular.module('footer',[])

    app.directive("footerb",function(){
        return {
            restrict: "E",
            templateUrl: "partials/footer.html",
            controller: function(){
                console.log("footer")
            },
            controllerAs: "footer"
        }
    })
})();