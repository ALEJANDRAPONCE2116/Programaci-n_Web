(function(){

    let app = angular.module('reviewstab',[])

    app.directive('reviewsTab', function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/reviews-tab.html',
            controller: function(){
                console.log("reviews tab")
            }
        }
    })
})();