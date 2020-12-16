(function(){

    let app = angular.module('specstab',[])

    app.directive('specsTab', function(){
        return{
            restrict: 'E',
            templateUrl: 'partials/specs-tab.html',
            controller: function(){
                console.log("specs tab")
            }
        }
    })
})();