angular.module("intro").controller("IntroCtrl", function ($scope, heroService, villainService) { 
    $scope.heroes = heroService.getAll();
    $scope.villains = villainService.getAll();

    $scope.removeHero = function (id) {
        if (id >= 0) {
            heroService.remove(id);
        }
    };

    $scope.removeVillain = function (id) {
        if (id >= 0) {
            villainService.remove(id);
        }
    };
    
    $scope.alertName = function (heroOrVillain) {
        if (heroOrVillain) {
            alert(heroOrVillain);
        }
    };
});