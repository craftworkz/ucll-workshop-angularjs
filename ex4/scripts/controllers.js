angular.module("intro").controller("IntroCtrl", function ($scope) {

    $scope.name = 'Driss';
    $scope.heroes = [
        'Superman',
        'Batman',
        'Green Lantern',
        'Nightwing',
        'The Flash'
    ];

    $scope.villains = [
        { name:  'The Joker' },
        { name:  'Lex Luthor' },
        { name:  'Sinestro' },
        { name:  'Deathstroke' },
        { name:  'Bane'}
    ];

    $scope.removeHero = function (id) {
        if (id >= 0) {
            $scope.heroes.splice(id, 1);
        }
    };

    $scope.removeVillain = function (id) {
        if (id >= 0) {
            $scope.villains.splice(id, 1);
        }
    };

    $scope.alertName = function (heroOrVillain) {
        if (heroOrVillain) {
            alert(heroOrVillain);
        }
    };
});
